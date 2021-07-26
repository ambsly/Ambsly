import React from 'react';

const ProductDescription = ({ productData }) => {
  console.log('Product Data from within description: ', productData);

  return (
    <>
      <b>{productData.slogan}</b>
      <br />
      {productData.description}
    </>
  );
};

export default ProductDescription;
