import React, { useState, useEffect } from 'react';
import ProductStyles from './productStyles.jsx';

const ProductOverview = ({ productData, currentStyle, styles }) => {
  if (!currentStyle) {
    return (
      <></>
    );
  }

  const { category } = productData;
  const { name } = productData;
  const { default_price } = productData;
  const [style, setStyle] = useState('');

  useEffect(() => {
    setStyle(currentStyle.name);
  }, []);

  console.log("Styles from overview: ", styles)

  return (
    <div>
      {category}
      <h3>{name}</h3>
      $ {default_price}
      <br />
      <br />
      STYLES // {style}
      <ProductStyles styles={styles} />
    </div>
  );
};

export default ProductOverview;
