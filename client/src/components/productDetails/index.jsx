import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ProductDisplay from './display/productDisplay.jsx';
import ProductOverview from './overview/productOverview.jsx';
import ProductDescription from './description/productDescription.jsx';

const Container = styled.div`
display: flex
`;

const ProductDetails = ({ productData }) => {
  if (!productData) {
    return (
      <></>
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
            console.log("LOOK HERE", data[i]);
          }
        }
      })
      .catch((error) => {
        console.log('Could not retrieve styles: ', error);
      });
  }, []);

  const changeStyle = (newStyle) => {
    setCurrentStyle(newStyle);
  };

  return (
    <>
      <Container className="productDetails">
        <ProductDisplay currentStyle={currentStyle} />
        <ProductOverview
          productData={productData}
          currentStyle={currentStyle}
          styles={styles}
          changeStyle={changeStyle}
        />
      </Container>
      <br />
      <ProductDescription productData={productData} currentStyle={currentStyle} />
    </>
  );
};

export default ProductDetails;
