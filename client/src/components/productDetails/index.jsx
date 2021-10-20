import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ProductDisplay from './display/productDisplay.jsx';
import ProductOverview from './overview/productOverview.jsx';
import ProductDescription from './description/productDescription.jsx';
import ShareProduct from './shareProduct.jsx';
import { ProductsContext } from '../globalState.jsx';

const TopContainer = styled.div`
display: flex;
justify-content: space-between;
margin: auto;
width: 1000px;
`;

const Container = styled.div`
display: flex;
margin: auto;
width: 1000px;
`;

const ProductDetails = () => {
  const [products] = useContext(ProductsContext);
  const [productData, setProductData] = useState({});
  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState();
  const [mainImageKey, setMainImageKey] = useState(0);

  useEffect(() => {
    axios.get('/display', {
      params: { productId: products.currentItemId },
    })
      .then((results) => {
        const data = results.data.results;
        setStyles(data);

        data.forEach((datum) => {
          if (datum['default?']) {
            setCurrentStyle(datum);
          }
        });

        // - REFACTORED ABOVE
        // for (let i = 0; i < data.length; i += 1) {
        //   if (data[i]['default?']) {
        //     setCurrentStyle(data[i]);
        //   }
        // }
      })
      .catch((error) => {
        console.log('Could not retrieve styles: ', error);
      });

    axios.get(`/products/${products.currentItemId}`)
      .then((results) => {
        setProductData(results.data);
      })
      .catch((error) => {
        console.log('Could not retrieve product information: ', error);
      });
  }, [products]);

  const changeStyle = (newStyle) => {
    setCurrentStyle(newStyle);
  };

  const changeImage = (key) => {
    setMainImageKey(key);
  };

  return (
    <>
      <TopContainer>
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
      </TopContainer>
      <br />
      <Container>
        <ShareProduct />
      </Container>
      <Container>
        <ProductDescription
          slogan={productData.slogan}
          description={productData.description}
          currentStyle={currentStyle}
        />
      </Container>
    </>
  );
};

export default ProductDetails;
