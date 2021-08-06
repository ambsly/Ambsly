import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
margin-top: 20px;
`;

const StyleGallery = styled.div`
width: 260px;
`;

const StyleImage = styled.input`
margin: 5px;
width: 50px;
height: 50px;
box-shadow: 0 0 3px;
border-radius: 50%;
object-fit: cover;
transition: 0.6s;
opacity: 0.3;

  &:hover {
    opacity: 1;
  }
`;

const ProductStyles = ({ styles, currentStyle, changeStyle }) => {
  const onStyleClick = (e) => {
    changeStyle(styles[e.target.id]);
  };

  const styleName = currentStyle.name;

  return (
    <Container>
      {styleName}
      <StyleGallery>
        {styles.map((style, key) => {
          if (style.style_id === currentStyle.style_id) {
            return (
              <StyleImage
                type="image"
                src={style.photos[0].thumbnail_url}
                alt=""
                id={key}
                key={key}
                style={{ opacity: 1, boxShadow: '0 0 5px' }}
                onClick={onStyleClick}
              />
            );
          }
          return (
            <StyleImage
              type="image"
              src={style.photos[0].thumbnail_url}
              alt=""
              id={key}
              key={key}
              onClick={onStyleClick}
            />
          );
        })}
      </StyleGallery>
    </Container>
  );
};

export default ProductStyles;
