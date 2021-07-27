import React, { useState } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
position: relative;
`;

const MainImage = styled.img`
width: 600px;
height: 500px;
object-fit: cover;
transition: all 0.4s ease-out;
${({ transform }) => transform && 'transform-origin: top left; transform: scale(1.5);'};
margin-left: 25px;
margin-right: 25px;
margin-top: 25px
`;

const ExpandButton = styled.button`
background-color: transparent;
border: none;
color: white;
cursor: pointer;
position: absolute;
top: 7.5%;
right: 7.5%;
`;

const ScrollMenu = styled.div`
width: 400px;
overflow-x: scroll;
white-space: nowrap;
margin-left: 25px;
`;

const Image = styled.input`
padding: 10px;
width: 50px;
height: 50px;
object-fit: cover;
background-position: center center;
`;

const ProductDisplay = ({ currentStyle, mainImage, changeImage }) => {
  if (!currentStyle) {
    return (
      <div>
        <img
          src=""
          alt=""
          width="600px"
          height="500px"
        />
      </div>
    );
  }

  const [expand, setExpand] = useState(false);
  const [expandIcon, setExpandIcon] = useState('+');

  const handleExpand = () => {
    setExpand(prevState => !prevState);
    if (expandIcon === '+') {
      setExpandIcon('-');
    } else {
      setExpandIcon('+');
    }
  };

  const imageSelector = (e) => {
    const key = e.target.id;
    changeImage(currentStyle.photos[key].url);
  };

  const currentImage = mainImage || currentStyle.photos[0].url;

  return (
    <div className="gallery">
      <ImageContainer>
        <MainImage
          src={currentImage}
          alt=""
          transform={expand}
        />
        <ExpandButton
          onClick={handleExpand}
        >
          {expandIcon}
        </ExpandButton>
      </ImageContainer>
      <br />
      <ScrollMenu>
        {currentStyle.photos.map((image, key) => (
          <Image
            type="image"
            src={image.thumbnail_url}
            alt=""
            id={key}
            key={key}
            onClick={imageSelector}
          />
        ))}
      </ScrollMenu>
    </div>
  );
};

export default ProductDisplay;
