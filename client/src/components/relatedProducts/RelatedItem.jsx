import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from './Modal.jsx';
import ModalCarousel from './ModalCarousel';
import LikeButton from './StyledComponents/LikeButton.jsx';
import {
  GlobalContext, ButtonClickedContext, FavoritesContext, ProductsContext,
} from '../globalState.jsx';

const StyledCardContainer = styled.div`
width: 253px;
height: 300px;
flex-shrink: 0;
padding-right: 15px;
box-sizing: border-box;
`;

const StyledCard = styled.div`
position: relative;
width: 100%;
height: 100%;
border: 1px solid black;
box-sizing: border-box;
display: flex;
flex-direction: column;
`;

const StyledImageCardContainer = styled.div`
object-fit: cover;
position: relative;
height: 175px;
`;

const StyledMouseHover = styled.div`
position: absolute;
top: 25%;
left: 75px;
width: 75px;
height: 75px;
`;

const StyledCardImage = styled.img`
cursor: pointer;
object-fit: cover;
width: 100%;
height: 100%;`;

const StyledProductDetails = styled.div`
cursor: pointer;
display: flex;
flex-direction: column`;

const StyledCategoryName = styled.span`
font-size: 12px;
font-style: italic;
line-height: 20px;
padding: 1px;
margin: 2px;
color: black;`;
const StyledProductName = styled.span`
font-size: 15px;
padding: 1px;
margin: 2px;
color: black;`;
const StyledProductPrice = styled.span`
font-weight: bold;
font-size: 16px;
padding-top: 4px;
margin: 2px;
color: black;`;

const StyledComparedButton = styled.button`
position: absolute;
top: 93%;
right: 34%;
border-color: #c3c3c3;
text-align: center;`;

function RelatedItem({ cardInfo }) {
  const [products, setProducts] = useContext(ProductsContext);
  const card = cardInfo;
  const {
    // eslint-disable-next-line react/prop-types
    id, campus, name, slogan, description, category, create_At,
    // eslint-disable-next-line no-unused-vars
    // eslint-disable-next-line camelcase
    default_price, ...rests
  } = cardInfo;
  const { results } = rests;
  const [firstStyle] = results;
  const { photos } = firstStyle;
  const [firstPhoto] = photos;
  // console.log(firstPhoto, 'what is this?');
  const [isOpen, setIsOpen] = useState(false);
  const [isCarouselOpen, setCarouselOpen] = useState(false);

  function changeProduct() {
    console.log(products.currentItemId, 'the id before the change');
    console.log(id, 'the id being saved ');
    setProducts((prevState) => ({ ...prevState, currentItemId: id }));

    console.log(products.currentItemId), ' the id after';
  }

  return (
    <StyledCardContainer>
      <StyledCard>
        <StyledImageCardContainer onClick={() => setCarouselOpen(true)}>
          <LikeButton id={id} card={card} />
          <StyledCardImage src={firstPhoto.thumbnail_url} alt="" />

        </StyledImageCardContainer>
        <StyledProductDetails onClick={changeProduct}>
          <StyledCategoryName>{category}</StyledCategoryName>
          <StyledProductName>{name}</StyledProductName>
          <StyledProductPrice>
            $
            {default_price}
            <div>
              <StyledComparedButton
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                Compare
              </StyledComparedButton>
            </div>
          </StyledProductPrice>

        </StyledProductDetails>
        <div>
          <ModalCarousel
            id={id}
            photos={photos}
            open={isCarouselOpen}
            onClose={() => setCarouselOpen(false)}
          />
        </div>
      </StyledCard>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} card={card} />

    </StyledCardContainer>
  );
}

export default RelatedItem;
