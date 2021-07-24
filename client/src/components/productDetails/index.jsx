import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ProductDisplay from './productDisplay.jsx';
import ProductOverview from './productOverview.jsx';

const ProductDetails = ({ productData }) => {
  if (!productData) {
    return (
      <div> Hang tight... </div>
    );
  }

  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState();
  const { id } = productData;

  useEffect(() => {
    axios.get('/display', {
      params: { productId: id },
    })
      .then((results) => {
        const data = results.data.results;
        setStyles(data);
        for (let i = 0; i < data.length; i += 1) {
          if (data[i]['default?']) {
            setCurrentStyle(data[i]);
          }
        }
      })
      .catch((error) => {
        console.log('Could not retrieve styles: ', error);
      });
  }, []);

  const Container = styled.div`
    display: flex
  `;

  return (
    <>
      <Container>
        <ProductDisplay currentStyle={currentStyle} />
        <ProductOverview productData={productData} currentStyle={currentStyle} style={styles} />
      </Container>
    </>
  );
};

export default ProductDetails;
