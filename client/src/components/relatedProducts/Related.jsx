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
    axios.get('/products/25170')
      .then((result) => {
        setProducts((prevState) => ({ ...prevState, currentItem: result.data }));
      })
      .catch((err) => {
      // eslint-disable-next-line no-console
        console.log('Error retrieving product data: ', err);
      });

    axios.get('/products/25170/related')
      .then((results) => {
        setProducts((prevState) => ({ ...prevState, relatedProducts: results.data }));
      })
      .catch((err) => {
      // eslint-disable-next-line no-console
        console.log('Error retrieving product data: ', err);
      });
  }, []);

  RelatedItems = products.relatedProducts.map((item) => (
    <RelatedItem
      key={item.id}
      cardInfo={item}
    />
  ));

  console.log(RelatedItems, ' what is this?');

  return (
    <CarouselComponent cards={RelatedItems} name="RelatedProducts" />
  );
}

export default Related;
