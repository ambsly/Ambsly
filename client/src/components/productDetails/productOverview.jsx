import React, { useState, useEffect } from 'react';
import ProductStyles from './productStyles.jsx';
import ProductSelection from './productSelection.jsx';

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

  return (
    <div>
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
        <b>{style}</b>
      </span>
      <ProductStyles styles={styles} />
      <ProductSelection />
    </div>
  );
};

export default ProductOverview;
