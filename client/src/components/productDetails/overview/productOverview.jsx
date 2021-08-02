import React from 'react';
import ProductStyles from './productStyles.jsx';
import ProductSelection from './productSelection.jsx';
import ShareProduct from './shareProduct.jsx';
import styled from 'styled-components';
import { Facebook } from '@styled-icons/fa-brands/Facebook';
import { Twitter } from '@styled-icons/fa-brands/Twitter';
import { Pinterest } from '@styled-icons/fa-brands/Pinterest';

const Container = styled.div`
margin-top: 50px;
`;

const Category = styled.div`
font-size: 14px;
`;

const ProductName = styled.div`
font-size: 32px;
`;

const Price = styled.div`
font-size: 16px;
`;

const ProductOverview = ({ productData, currentStyle, styles, changeStyle }) => {
  if (!currentStyle) {
    return (
      <></>
    );
  }

  const { category } = productData;
  const { name } = productData;
  const { default_price } = productData;
  const styleName = currentStyle.name;

  return (
    <Container>
      <Category><i>{category} </i></Category>
      <ProductName><b>{name}</b></ProductName>
      <span
        style={{
          fontSize: '12px',
        }}
      >[★★★★★ x,xxx ratings]</span>
      <br />
      <br />
      <Price>${default_price}</Price>
      <br />
      <ProductStyles styles={styles} currentStyle={currentStyle} changeStyle={changeStyle} />
      <ProductSelection currentStyle={currentStyle} />
      <ShareProduct />
    </Container>
  );
};

export default ProductOverview;
