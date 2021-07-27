import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
margin-left: 25px;
width: 600px;
`;

const ProductDescription = ({ productData }) => {
  const { slogan } = productData;
  const { description } = productData;

  return (
    <Container>
      <b>{slogan}</b>
      <br />
      {description}
    </Container>
  );
};

export default ProductDescription;
