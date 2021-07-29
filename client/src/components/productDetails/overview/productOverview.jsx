import React from 'react';
import ProductStyles from './productStyles.jsx';
import ProductSelection from './productSelection.jsx';
import styled from 'styled-components';
import { Facebook } from '@styled-icons/fa-brands/Facebook';
import { Twitter } from '@styled-icons/fa-brands/Twitter';
import { Pinterest } from '@styled-icons/fa-brands/Pinterest';

const Container = styled.div`
margin-top: 50px;
`;

const Category = styled.div`
font-size: 12px;
`;

const ProductName = styled.div`
font-size: 32px;
`;

const Style = styled.div`
font-size: 14px;
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
      <Style>{styleName}</Style>
      <span
        style={{
          fontSize: '12px',
        }}
      >[★★★★★ x,xxx ratings]</span>
      <br />
      <br />
      <Price><b>${default_price}</b></Price>
      <br />
      <br />
      <br />
      <span
        style={{
          fontSize: '14px',
          marginLeft: '10px',
        }}
      >
        <b>STYLES</b>
        <br />
      </span>
      <ProductStyles styles={styles} currentStyle={currentStyle} changeStyle={changeStyle} />

      <ProductSelection currentStyle={currentStyle} />
      <br />
      <div
        className="share"
        // style={{
        //   position: 'absolute',
        //   top: '500px',
        //   width: '260px',
        // }}
      >
        <span
          style={{
            fontSize: '14px',
          }}
        ><b>Share Item</b></span>
        <Facebook size="24" style={{
          margin: '10px',
          cursor: 'pointer',
        }}/>
        <Twitter size="24" style={{
          margin: '10px',
          cursor: 'pointer',
        }}/>
        <Pinterest size="24" style={{
          margin: '10px',
          cursor: 'pointer',
        }}/>
      </div>
    </Container>
  );
};

export default ProductOverview;
