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

  const [expanded, setExpand] = useState([false]);

  const handleExpand = (e) => {
    const xPos = (e.clientX - 138);
    const yPos = (e.clientY - 30);

    if (!expanded[0] && e.type !== 'mouseleave') {
      setExpand([true, xPos, yPos]);
    } else {
      setExpand([false]);
    }
  };

  const imageSelector = (e) => {
    changeImage(e.target.id);
  };

  const currentImage = currentStyle.photos[mainImageKey].url || currentStyle.photos[0].url;

  return (
    <ImageContainer>
      <MainImage
        src={currentImage}
        alt=""
        onClick={handleExpand}
        onMouseLeave={handleExpand}
        style={{
          cursor: expanded[0] ? 'zoom-out' : 'zoom-in',
          transform: expanded[0] ? 'scale(2.5)' : 'scale(1)',
          transformOrigin: expanded[0] ? `${expanded[1]}px ${expanded[2]}px` : undefined,
          zIndex: expanded[0] ? '1000' : undefined,
        }}
      />
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
