import React, { useState, useContext, useEffect } from 'react';
import { ProductsContext, CarouselImg } from '../globalState.jsx';

const modalCardImageContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

let modalCardImg = {
  objectFit: 'cover',
  opacity: 0.5,
  height: 80,
  width: 80,
};

function ModalCarouselCard({ picture, setIMG, id }) {
  const { thumbnail_url, url } = picture;
  const [globalImg, setGobalImg] = useContext(CarouselImg);
  const img = React.createRef();
  if (globalImg.currentRelatedImg === thumbnail_url) {
    modalCardImg = {
      height: 80,
      width: 80,
    };
  } else {
    modalCardImg = {
      opacity: 0.5,
      height: 80,
      width: 80,
    };
  }

  function onClick() {
    setGobalImg({
      currentRelatedImg: thumbnail_url,
      currentRelatedID: id,
    });
  }

  return (
    <div className="modalcard-container">
      <div className="modalcard">
        <div
          className="modalcardimg-container"
          style={modalCardImageContainer}
        >
          <img
            style={modalCardImg}
            src={thumbnail_url}
            alt=""
            className="modalcardImage"
            onClick={onClick}
            ref={img}
          />
        </div>
      </div>
    </div>
  );
}

export default ModalCarouselCard;
