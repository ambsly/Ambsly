import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { idContext } from '../../index.jsx';
import RelatedItem from './RelatedItem.jsx';
import CarouselComponent from './StyledComponents/CarouselComponent.jsx';
import { ProductsContext, GlobalContext } from '../globalState';

function Related() {
  const [products, setProducts] = useContext(GlobalContext);
  let RelatedItems = [];
  useEffect(() => {
    axios.get(`/products/${products.currentItemId}`)
      .then((result) => {
        setProducts((prevState) => ({ ...prevState, currentItem: result.data }));
      })
      .catch((err) => {
      // eslint-disable-next-line no-console
        console.log('Error retrieving product data: ', err);
      });

    axios.get(`/products/${products.currentItemId}/related`)
      .then((results) => {
        let setArray = new Set(results.data);
        setArray = [...setArray];
        setProducts((prevState) => ({ ...prevState, relatedProducts: setArray }));
      })
      .catch((err) => {
      // eslint-disable-next-line no-console
        console.log('Error retrieving product data: ', err);
      });
  }, [products.currentItemId]);
  const newObj = {};
  for (let i = 0; i < products.relatedProducts.length; i += 1) {
    newObj[products.relatedProducts[i].id] = products.relatedProducts[i];
  }
  const newProductArray = [];

  Object.keys(newObj).forEach((product) => (
    newProductArray.push(newObj[product])
  ));

  RelatedItems = newProductArray.map((item) => (
    <RelatedItem
      key={item.id}
      cardInfo={item}
    />
  ));

  console.log(RelatedItems, ' what is this?');

  return (
    <CarouselComponent cards={RelatedItems} name="Related Products" />
  );
}

export default Related;
