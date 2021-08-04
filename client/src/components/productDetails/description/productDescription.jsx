import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
position: relative;
width: 1000px;
margin: auto;
`;

const Slogan = styled.div`
z-index: -1;
font-weight: bold;
margin-left: 25px;
font-size: 50px;
width: 1000px;
// color: rgba(0, 206, 209, .5);
color: rgba(144, 164, 174, 0.8);
`;

const Description = styled.div`
position: absolute;
top: 65px;
margin-left: 25px;
`;

const ProductDescription = ({ productData }) => {
  const { slogan } = productData;
  const { description } = productData;

  return (
    <Container>
      <Slogan>{slogan}</Slogan>
      <Description>{description}</Description>
    </Container>
  );
};

export default ProductDescription;
