import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal.jsx';
import { PizzaContext } from '../index.jsx';

const BUTTON_WRAPER_STYLES = {
  position: 'relative',
  zIndex: 1,
};


function RelatedItem({ cardInfo }) {
  const [isOpen, setIsOpen] = useState(false);
  const {
    // eslint-disable-next-line react/prop-types
    id, campus, name, slogan, description, category, create_At,
    // eslint-disable-next-line no-unused-vars
    // eslint-disable-next-line camelcase
    default_price, ...rests
  } = cardInfo;
  const { results } = rests;
  const [firstStyle] = results;
  const { photos } = firstStyle;
  const [firstPhoto] = photos;
  console.log(firstPhoto, 'looking at this');
  // console.log(firstPhoto, 'what is this?');

  function saveFavorite() {
    const oldData = JSON.parse(localStorage.getItem('dataArray'));
    oldData.push(id);
    localStorage.setItem('dataArray', JSON.stringify(oldData));
  }
  return (
    <div className="card-container">
      <button type="submit" onClick={saveFavorite}>Favorites</button>
      <div className="card">
        <img src={firstPhoto.thumbnail_url} alt="" className="cardImage" />
        <div className="productDetails">
          <div className="categoryName">{category}</div>
          <div className="productName">{name}</div>
          <div className="productPrice">
            $

            {default_price}
          </div>
          <div style={BUTTON_WRAPER_STYLES}>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
          </div>
        </div>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        Comparing
      </Modal>
    </div>
  );
}

export default RelatedItem;
