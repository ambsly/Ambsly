import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const MainImage = styled.img`
width: 500px;
height: 500px;
object-fit: cover;
`;

const ScrollMenu = styled.div`
width: 400px;
overflow-x: scroll;
white-space: nowrap;
`;

const Image = styled.input`
padding: 10px;
width: 50px;
height: 50px;
object-fit: cover;
background-position: center center;
`;

const ProductDisplay = ({ currentStyle }) => {
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

  // const currentImage = currentStyle.photos[0].url;
  let [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    setCurrentImage(currentStyle.photos[0].url);
  }, []);

  const imageSelector = (e) => {
    setCurrentImage(e.target.src);
  };

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
            src={image.url}
            alt=""
            key={key}
            onClick={imageSelector}
          />
        ))}
      </ScrollMenu>
    </div>
  );
};

export default ProductDisplay;
