import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
position: absolute;
top: 575px;
width: 600px;
margin-left: 25px;
`;

const Slogan = styled.div`
font-weight: bold;
font-size: 18px;
`;

const ProductDescription = ({ productData }) => {
  const { slogan } = productData;
  const { description } = productData;

  return (
    <Container>
      <Slogan><i>{slogan}</i></Slogan>
      <br />
      {description}
    </Container>
  );
};

export default ProductDescription;
