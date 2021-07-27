import React from 'react';
import styled from 'styled-components';

const MainImage = styled.img`
width: 600px;
height: 500px;
object-fit: cover;
margin-left: 25px;
margin-right: 25px;
margin-top: 25px
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

  const imageSelector = (e) => {
    const key = e.target.id;
    changeImage(currentStyle.photos[key].url);
  };

  const currentImage = mainImage || currentStyle.photos[0].url;

  return (
    <div className="gallery">
      <MainImage
        src={currentImage}
        alt=""
      />
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
