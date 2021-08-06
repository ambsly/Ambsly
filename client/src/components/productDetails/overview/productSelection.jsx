import React, { useState } from 'react';
import styled from 'styled-components';
import _ from 'underscore';

const Container = styled.div`
display: flex;
width: 250px;
justify-content: space-between;
`;

const Button = styled.button`
background: transparent;
border: none;
cursor: pointer;
height: 40px;
padding: 10px 5px;
backgroundColor: transparent;
border: 1px solid black;
`;

const DropDownSelector = styled.select`
height: 40px;
padding: 10px 5px;
backgroundColor: transparent;
border: 1px solid black;
outline: none;
`;

const ProductSelection = ({ currentStyle }) => {
  const styleList = Object.values(currentStyle.skus);

  const [qtyRange, setQtyRange] = useState([]);
  const [inBag, setInBag] = useState('Add to Bag +');
  const [favorited, setFavorited] = useState('☆');
  const [size, setSize] = useState('SELECT SIZE');
  const [qtyInBag, setQtyInBag] = useState('QTY');

  const sizeSelected = (e) => {
    let range = [];
    for (let i = 0; i < styleList.length; i += 1) {
      if (styleList[i].size === e.target.value) {
        if (!styleList[i].quantity) {
          setQtyRange(['Out of Stock']);
        } else {
          let q = styleList[i].quantity + 1;
          if (styleList[i].quantity > 15) {
            q = 15;
          }
          range = _.range(1, q + 1);
          setQtyRange(range);
        }
      }
    }

    if (qtyRange.every((value) => value === 'Out of Stock')) {
      setSize('Out of Stock');
    } else {
      setSize(e.target.value);
      setQtyInBag(1);
    }
  };

  const qtySelected = (e) => {
    setQtyInBag(e.target.value);
  };

  const handleBagClick = () => {
    if (inBag === 'Add to Bag +') {
      if (size === 'SELECT SIZE' || qtyInBag === 'QTY') {
        alert('Please make sure to select a size and quantity');
      } else {
        setInBag('Added to Bag');
      }
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
        <DropDownSelector
          name="size-selector"
          onChange={sizeSelected}
          style={{
            width: '120px',
          }}
        >
          <option defaultValue="SELECT SIZE" hidden>SELECT SIZE</option>
          {styleList.map((sku, key) => {
            if ({ size } === 'Out of Stock') {
              return;
            }
            if (sku.quantity) {
              return (
                <option
                  value={sku.size}
                  id={key}
                  key={key}
                >
                  Size: {sku.size}
                </option>
              );
            }
          })}
        </DropDownSelector>
        <DropDownSelector
          name="qty-selector"
          id="qty-selector"
          onChange={qtySelected}
          style={{
            width: '110px',
          }}
        >
          <option defaultValue="QTY" hidden>QTY</option>
          {qtyRange.map((value, key) => {
            if ({ size } === 'Out of Stock') {
              return (
                <option
                  value={value}
                  key={key}
                >
                  --
                </option>
              );
            }
            return (
              <option
                value={value}
                key={key}
              >
                Qty: {value}
              </option>
            );
          })}
        </DropDownSelector>
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
          }}
        >
          {favorited}
        </Button>
      </Container>
    </>
  );
};

export default ProductSelection;
