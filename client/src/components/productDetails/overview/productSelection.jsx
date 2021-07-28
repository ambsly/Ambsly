import React, { useState } from 'react';
import styled from 'styled-components';
import _ from 'underscore';

const Container = styled.div`
display: flex;
width: 250px;
justify-content: space-between;
`;

const Selector = styled.div`
padding: 10px 5px;
background-color: transparent;
border: 2px solid black;
`;

const Button = styled.button`
background: transparent;
border: none;
cursor: pointer;
`;

const ProductSelection = ({ currentStyle }) => {
  const styleList = Object.values(currentStyle.skus);

  const [quantity, setQuantity] = useState([]);
  const [inBag, setInBag] = useState('Add to Bag +');
  const [favorited, setFavorited] = useState('☆');

  const sizeSelected = (e) => {
    let range = [];
    for (let i = 0; i < styleList.length; i += 1) {
      if (styleList[i].size === e.target.value) {
        if (!styleList[i].quantity) {
          setQuantity(['Out of Stock']);
        } else {
          let q = styleList[i].quantity + 1;
          if (styleList[i].quantity > 15) {
            q = 15;
          }
          range = _.range(1, q + 1);
          setQuantity(range);
        }
      }
    }
  };

  const handleBagClick = () => {
    if (inBag === 'Add to Bag +') {
      setInBag('Added to Bag');
    } else {
      setInBag('Add to Bag +');
    }
  };

  const handleFavoritedClick = () => {
    if (favorited === '☆') {
      setFavorited('★');
    } else {
      setFavorited('☆');
    }
  };

  return (
    <>
      <Container>
        <select
          name="size-selector"
          onChange={sizeSelected}
          style={{
            width: '145px',
            height: '40px',
            padding: '10px 5px',
            backgroundColor: 'transparent',
            border: '1px solid black',
          }}
        >
          <option value="SELECT SIZE">SELECT SIZE</option>
          {styleList.map((sku, key) => (
            <option
              value={sku.size}
              id={key}
              key={key}
            >
              {sku.size}
            </option>
          ))}
        </select>
        <select
          name="qty-selector"
          id="qty-selector"
          style={{
            width: '85px',
            height: '40px',
            padding: '10px 5px',
            backgroundColor: 'transparent',
            border: '1px solid black',
          }}
        >
          <option value="--">QTY</option>
          {quantity.map((value, key) => (
            <option value={value} key={key}>{value}</option>
          ))}
        </select>
      </Container>
      <br />
      <Container>
        <Button
          type="button"
          name="add-to-bag"
          id="add-to-bag"
          onClick={handleBagClick}
          style={{
            width: '185px',
            height: '40px',
            padding: '10px 5px',
            backgroundColor: 'transparent',
            border: '1px solid black',
            textAlign: 'center',
          }}
        >
          {inBag}
        </Button>
        <Button
          type="button"
          name="favorite"
          id="favorite"
          onClick={handleFavoritedClick}
          style={{
            width: '45px',
            height: '40px',
            padding: '10px 5px',
            backgroundColor: 'transparent',
            border: '1px solid black',
          }}
        >
          {favorited}
        </Button>
      </Container>
    </>
  );
};

export default ProductSelection;
