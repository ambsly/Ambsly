import React from 'react';
import styled from 'styled-components';

const StyleImage = styled.input`
  padding: 5px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  background-position: center center;
`;

const ProductStyles = ({ styles, changeStyle }) => {
  const onStyleClick = (e) => {
    changeStyle(styles[e.target.id]);
  }

  return (
    <div>
      {styles.map((style, key) => (
        <StyleImage
          type="image"
          src={style.photos[0].thumbnail_url}
          alt=""
          id={key}
          key={key}
          onClick={onStyleClick}
        />
      ))}
    </div>
  );
};

export default ProductStyles;
