import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';
import Modal from './Modal.jsx';
import ModalCarousel from './ModalCarousel';
import LikeButton from './StyledComponents/LikeButton.jsx';
import { rate } from '../Ratings_Reviews/overview/overview.jsx';
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
cursor: pointer;
position: absolute;
top: 25%;
left: 75px;
width: 75px;
height: 75px;
`;

const StyledCardImage = styled.img`
object-fit: cover;
width: 100%;
height: 100%;`;

const StyledProductDetails = styled.div`
cursor: pointer;
display: flex;
flex-direction: column`;

const StyledCategoryName = styled.span`
font-size: 14px;
font-style: italic;
line-height: 20px;
padding: 1px;
margin: 2px;
color: #90a4ae;`;
const StyledProductName = styled.span`
font-weight: bold;
font-size: 15px;
padding: 1px;
margin: 2px;
color: black;`;
const StyledProductPrice = styled.span`
font-size: 16px;
padding-top: 4px;
margin: 2px;
color: #007185;`;

const StyledComparedButton = styled.button`
cursor: pointer;
position: absolute;
top: 90%;
border: none;
right: 0%;
border-color: #c3c3c3;
text-align: center;`;

const StyledStarDiv = styled.div`
position: relative;
`;

const StyledStarRatingDiv = styled.div`
position: absolute;
top: 32px;
`;

function RelatedItem({ cardInfo }) {
  const rating = rate();
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
  let renderPhoto = '';
  console.log(firstPhoto, 'seeing for nulls');

  if (firstPhoto.thumbnail_url === null) {
    renderPhoto = '../../PNG/unavailable-image-300x225.jpg';
  } else {
    renderPhoto = firstPhoto.thumbnail_url;
  }

  function changeProduct() {
    console.log(products.currentItemId, 'the id before the change');
    console.log(id, 'the id being saved ');
    setProducts((prevState) => ({ ...prevState, currentItemId: id }));

    console.log(products.currentItemId), ' the id after';
  }

  return (
    <StyledCardContainer>
      <StyledCard>
        <StyledImageCardContainer>
          <LikeButton id={id} card={card} />
          <StyledMouseHover onClick={() => setCarouselOpen(true)} />
          <StyledCardImage src={renderPhoto} alt="" />

        </StyledImageCardContainer>
        <StyledProductDetails onClick={changeProduct}>
          <StyledCategoryName>{category}</StyledCategoryName>
          <StyledProductName>{name}</StyledProductName>
          <StyledProductPrice>
            $
            {default_price}
            <div>

              <StyledStarDiv>
                <StyledStarRatingDiv>
                  <StarRatings
                    rating={rating[0]}
                    starRatedColor="gold"
                    starDimension="15px"
                    starSpacing="0"
                    numberOfStars={5}
                    name="rating"
                  />
                </StyledStarRatingDiv>
              </StyledStarDiv>

              <StyledComparedButton>
                <span className="material-icons assesment" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                  assessment
                </span>
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
