import React from 'react';
import ProductStyles from './productStyles.jsx';
import ProductSelection from './productSelection.jsx';
import styled from 'styled-components';

const Container = styled.div`
margin-top: 25px;
`

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
      <span>★★★★★ Read all reviews</span>
      <br />
      <br />
      <span><i>{category} </i></span>
      <h3>{name}</h3>
      <span>$ {default_price} </span>
      <br />
      <br />
      <span>
        SELECTED STYLE //
        <br />
        <b>{styleName}</b>
      </span>
      <ProductStyles styles={styles} changeStyle={changeStyle} />
      <ProductSelection currentStyle={currentStyle} />
    </Container>
  );
};

export default ProductOverview;
