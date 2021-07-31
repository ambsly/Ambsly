import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { idContext } from '../../index.jsx';
import RelatedItem from './RelatedItem.jsx';
import { ProductsContext, globalContext } from '../globalState';

function Related() {
  const [products, setProducts] = useContext(globalContext);
  let RelatedItems = [];
  const [productInfo] = useContext(ProductsContext);
  const [productInformation, setProductInformation] = useState(productInfo);
  const [width, setWidth] = useState(0);

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

  const track = React.createRef();

  function onClickLeft() {
    if (width !== 0) {
      setWidth((prevState) => prevState + 253);
      track.current.style.transform = `translate(${width + 253}px`;
    }
  }

  function onClickRight() {
    setWidth((prevState) => prevState - 253);
    track.current.style.transform = `translate(${width - 253}px`;
  }
  RelatedItems = products.relatedProducts.map((item) => (
    <RelatedItem
      key={item.id}
      cardInfo={item}
    />
  ));

  return (

    <div className="carousel-container">
      <div className="carousel-inner">
        <div className="track" ref={track}>
          {RelatedItems}
        </div>
      </div>
      <div className="nav">
        <button className="prev" onClick={onClickLeft}>
          <span className="material-icons">
            chevron_left
          </span>
        </button>
        <button className="next" onClick={onClickRight}>
          <span className="material-icons">
            chevron_right
          </span>
        </button>
      </div>
    </div>
  );
}

export default Related;
