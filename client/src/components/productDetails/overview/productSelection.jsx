import React, { useState } from 'react';
import styled from 'styled-components';
import _ from 'underscore';

const Container = styled.div`
display: flex;
justify-content: space-between;
`;

const Selector = styled.div`
padding: 0.5rem .25rem;
background-color: transparent;
border: 2px solid black;
`;

const ProductSelection = ({ currentStyle }) => {
  const styleList = Object.values(currentStyle.skus);

  const [quantity, setQuantity] = useState([]);

  const sizeSelected = (e) => {
    // console.log("Look here: ", e.target.quantity);
    let range = [];
    for (let i = 0; i < styleList.length; i++) {
      if (styleList[i].size === e.target.value) {
        let q = styleList[i].quantity + 1;
        if (styleList[i].quantity > 15) {
          q = 15;
        }
        range = _.range(1, q + 1);
        setQuantity(range);
      }
    }
  };

  return (
    <>
      <Container>
        <Selector>
          <label>SELECT SIZE</label>
          <select name="size-selector" onChange={sizeSelected}>
            <option value='--'>--</option>
            {styleList.map((sku, key) => (
              <option
                value={sku.size}
                id={key}
                key={key}
              >{sku.size}</option>
            ))}
          </select>
        </Selector>
        <Selector>
          <label>Qty</label>
          <select name="qty-selector" id="qty-selector">
            <option value='--'>--</option>
            {quantity.map((num, key) => (
              <option value={num} key={key}>{num}</option>
            ))}
          </select>
        </Selector>
      </Container>
      <Container>
        <Selector>
          <button type="button" name="add-to-bag" id="add-to-bag">Add to Bag </button>
        </Selector>
        <Selector>
          <button type="button" name="favorite" id="favorite">☆ </button>
        </Selector>
      </Container>
    </>
  );
};

export default ProductSelection;
