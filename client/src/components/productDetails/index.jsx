import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ProductDisplay from './display/productDisplay.jsx';
import ProductOverview from './overview/productOverview.jsx';
import ProductDescription from './description/productDescription.jsx';

const Container = styled.div`
display: flex;
margin: auto;
width: 1000px;
`;

const ProductDetails = ({ productData }) => {
  if (!productData) {
    return (
      <></>
    );
  }

  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState();
  const [mainImageKey, setMainImageKey] = useState(0);
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

  const changeStyle = (newStyle) => {
    setCurrentStyle(newStyle);
  };

  const changeImage = (key) => {
    setMainImageKey(key);
  };

  return (
    <>
      <Container className="productDetails">
        <ProductDisplay
          currentStyle={currentStyle}
          mainImageKey={mainImageKey}
          changeImage={changeImage}
        />
        <ProductOverview
          productData={productData}
          currentStyle={currentStyle}
          styles={styles}
          changeStyle={changeStyle}
        />
      </Container>
      <br />
      <Container>
        <ProductDescription
          productData={productData}
          currentStyle={currentStyle}
        />
      </Container>
    </>
  );
};

export default ProductDetails;
