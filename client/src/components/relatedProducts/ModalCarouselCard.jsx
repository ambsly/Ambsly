import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { ProductsContext, CarouselImg } from '../globalState.jsx';

const StyledModalCardContainer = styled.div`
width:  100px;
height: 100px;
flex-shrink: 0;
padding: 10px;
box-sizing: border-box;
`;

const StyledModalCard = styled.div`
width: 100%;
height: 100%;
box-sizing: border-box;
display: flex;
flex-direction: column;
border: 1px saddlebrown;
`;

const StyleModalCardImageContainer = styled.div`
cursor: pointer;
display: flex ;
justifyContent: center;
alignItems: center;
object-fit: cover;
`;

let modalCardImg = {
  objectFit: 'cover',
  opacity: 0.7,
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
      opacity: 0.7,
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
    <StyledModalCardContainer>
      <StyledModalCard>
        <StyleModalCardImageContainer>
           <img
            style={modalCardImg}
            src={thumbnail_url}
            alt=""
            className="modalcardImage"
            onClick={onClick}
            ref={img}
          />
        </StyleModalCardImageContainer>
      </StyledModalCard>
    </StyledModalCardContainer>
  );
}

export default ModalCarouselCard;
