import React from 'react';

const ProductOverview = ({ productData }) => {
  const { category } = productData;
  const { name } = productData;
  const { default_price } = productData;

  return (
    <div>
      {category}
      <h3>{name}</h3>
      $ {default_price}
    </div>
  );
};

export default ProductOverview;
