import React, { useState } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
position: relative;
overflow: hidden;
margin: 25px;
box-shadow: 0 0 5px;
`;

const MainImage = styled.img`
width: 625px;
height: 500px;
object-fit: cover;
transition: 0.4s;
`;

// const ExpandButton = styled.span`
// background: rgba(255, 255, 255, 0.50);
// width: 30px;
// height: 30px;
// border: none;
// border-radius: 50%;
// color: rgba(50, 50, 50);
// font-size: 18px;
// text-align: center;
// position: absolute;
// top: 10%;
// left: 10%;
// `;

const ScrollMenu = styled.div`
position: absolute;
top: 445px;
left: 50px;
margin: auto;
width: 525px;
overflow-x: scroll;
white-space: nowrap;
scrollbar-color: #90A4AE;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(234, 242, 245, 0.4);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(144, 164, 174, 0.8);
  }

scrollbar-width: thin;
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
  // const [expandIcon, setExpandIcon] = useState('✛');

  const handleExpand = (e) => {
    const xPos = (e.clientX);
    const yPos = (e.clientY);

    if (!expanded[0]) {
      setExpand([true, xPos, yPos]);
    } else {
      setExpand([false]);
    }

    // if (expandIcon === '✛') {
    //   setExpandIcon('✕');
    // } else {
    //   setExpandIcon('✛');
    // }
  };

  const imageSelector = (e) => {
    changeImage(e.target.id);
  };

  const currentImage = currentStyle.photos[mainImageKey].url || currentStyle.photos[0].url;

  return (
    <div id="gallery">
      <ImageContainer>
        <MainImage
          src={currentImage}
          alt=""
          onClick={handleExpand}
          style={{
            cursor: expanded[0] ? 'zoom-out' : 'zoom-in',
            transform: expanded[0] ? 'scale(2.5)' : undefined,
            transformOrigin: expanded[0] ? `${expanded[1]}px ${expanded[2]}px` : undefined,
            backgroundPosition: expanded[0] ? `-${expanded[1]}px -${expanded[2]}px` : undefined,
          }}
        />
        {/* <ExpandButton
          onClick={handleExpand}
        >
          {expandIcon}
        </ExpandButton> */}
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
    </div>
  );
};

export default ProductDisplay;
