import React, { useState } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
display: flex;
flex-basis: 625px;
height: 500px;
position: relative;
overflow: hidden;
margin: 25px;
box-shadow: 0 0 3px;
`;

const MainImage = styled.img`
position: absolute;
width: 625px;
height: 500px;
object-fit: cover;
transition: 0.4s linear;
`;

const ExpandButton = styled.button`
z-index: 1001;
background: rgba(255, 255, 255, 0.50);
width: 30px;
height: 30px;
border: none;
border-radius: 50%;
color: rgba(50, 50, 50);
font-size: 18px;
text-align: center;
cursor: pointer;
position: absolute;
top: 10%;
left: 10%;
`;

const ScrollBackground = styled.div`
position: absolute;
height: 80px;
width: 625px;
top: 420px;
background-color: black;
opacity: 0.2;
`;

const ScrollMenu = styled.div`
position: relative;
top: 210px;
max-width: 525px;
margin: auto;
overflow-x: auto;
white-space: nowrap;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(234, 242, 245, 0.4);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(144, 164, 174, 0.8);
  }
`;

const ImagePreview = styled.input`
margin-left: 20px;
margin-right: 20px;
box-shadow: 0 0 3px;
width: 35px;
height: 35px;
object-fit: cover;
transition: 0.4s;
opacity: 1;
`;

const ProductDisplay = ({ currentStyle, mainImageKey, changeImage }) => {
  if (!currentStyle) {
    return (
      <div>
        <img
          src=""
          alt=""
          width="625px"
          height="500px"
        />
      </div>
    );
  }

  const [zoom, setZoom] = useState(false);
  const [fullViewIcon, setFullViewIcon] = useState('✛');
  const [style, setStyle] = useState({
    cursor: 'zoom-in',
  });

  const handleZoom = (e) => {
    const xPos = (e.clientX - e.target.x);
    const yPos = (e.clientY - e.target.y);
    const container = document.getElementById('gallery');
    container.style.overflow = 'hidden';
    let styles = {};
    let styleObj = {};

    if (!zoom && e.type !== 'mouseleave') {
      setZoom(true);
      styleObj = {
        cursor: 'zoom-out',
        transform: 'scale(2.5)',
        transformOrigin: `${xPos}px ${yPos}px`,
        zIndex: '1000',
      };
    } else {
      setFullViewIcon('✛');
      setZoom(false);
      styleObj = {
        cursor: 'zoom-in',
        transform: undefined,
        transformOrigin: undefined,
        zIndex: undefined,
      };
    }
    styles = Object.assign(styles, styleObj);
    setStyle(styles);
  };

  const handleFullView = () => {
    let styles = {};
    let styleObj = {};
    const container = document.getElementById('gallery');

    if (fullViewIcon === '✛') {
      setFullViewIcon('✕');
      setZoom(true);
      container.style.overflow = 'visible';
      styleObj = {
        cursor: 'zoom-out',
        transform: 'scale(1.5)',
        transformOrigin: 'top left',
        zIndex: '1000',
      };
    } else {
      setFullViewIcon('✛');
      setZoom(false);
      container.style.overflow = 'hidden';
      styleObj = {
        cursor: 'pointer',
        transform: 'scale(1)',
        transformOrigin: undefined,
        zIndex: undefined,
      };
    }
    styles = Object.assign(styles, styleObj);
    setStyle(styles);
  };

  const imageSelector = (e) => {
    changeImage(e.target.id);
  };

  const currentImage = currentStyle.photos[mainImageKey].url || currentStyle.photos[0].url;

  return (
    <ImageContainer
      id="gallery"
      onMouseLeave={handleZoom}
    >
      <MainImage
        src={currentImage}
        alt=""
        onClick={handleZoom}
        style={style}
      />
      <ExpandButton
        onClick={handleFullView}
      >
        {fullViewIcon}
      </ExpandButton>
      <ScrollBackground />
      <ScrollMenu>
        {currentStyle.photos.map((image, key) => {
          if (image.url === currentImage) {
            return (
              <ImagePreview
                type="image"
                src={image.thumbnail_url}
                alt=""
                id={key}
                key={key}
                onClick={imageSelector}
                style={{
                  opacity: 0.5,
                  boxShadow: '0 0 3px white',
                }}
              />
            );
          }
          return (
            <ImagePreview
              type="image"
              src={image.thumbnail_url}
              alt=""
              id={key}
              key={key}
              onClick={imageSelector}
            />
          );
        })}
      </ScrollMenu>
    </ImageContainer>
  );
};

export default ProductDisplay;
