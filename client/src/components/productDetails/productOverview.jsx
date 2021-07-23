import React from 'react';

const ProductOverview = ({ productData }) => {
  const { category } = productData;
  const { name } = productData;
  const { default_price } = productData;
  // console.log('Hello?', category, name, default_price);

  return (
    <div>
      {category}
      <br />
      {name}
      <br />
      {default_price}
    </div>
  );
};

export default ProductOverview;
