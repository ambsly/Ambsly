import React from 'react';

const ProductDescription = ({ productData }) => {
  const { slogan } = productData;
  const { description } = productData;

  return (
    <>
      <b>{slogan}</b>
      <br />
      {description}
    </>
  );
};

export default ProductDescription;
