import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import _ from 'underscore';
import { ProductsContext } from '../../globalState';
import ReviewContext from '../context/ReviewContext';
import {
  Overlay, ModalForm, Heading, CloseBtn, Title, Label, ReviewTitleInput, ReviewBody, RadioInput,
  SubmitButton, SliderList, SliderItem, SliderLabel, SliderInput, Input,
} from './styles/reviewListStyles';

const AddReviewModal = ({ open, onClose }) => {
  const { productMetaData, reviewSubmit, setReviewSubmit } = useContext(ReviewContext);
  const [products, setProducts] = useContext(ProductsContext);
  const charsObj = {};
  const charsArr = [];
  _.each(productMetaData.characteristics, (val, key) => {
    charsObj[val.id] = undefined;
    charsArr.push({
      name: key,
      id: val.id,
    });
  });

  const [characteristics, setChars] = useState(charsObj);
  const [recommendedInput, setRecommendedInput] = useState(true);
  const [rating, setRating] = useState(0);
  const [sliderValue, setSliderValue] = useState(3);
  const [reviewInputs, setReviewInputs] = useState({
    product_id: products.currentItemId,
    rating: null,
    summary: '',
    body: '',
    recommend: null,
    name: '',
    email: '',
    photos: [],
    characteristics,
  });

  const handleTextInputChange = (e) => {
    let { id, value } = e.target;
    if (id === 'rating') {
      value = Number(value);
    }
    setReviewInputs((prevState) => (
      {
        ...prevState,
        [id]: value,
      }
    ));
  };

  const handleRecommendInputChange = (e) => {
    setRecommendedInput(e.target.id === 'yes');
    setReviewInputs((prevState) => ({
      ...prevState,
      recommend: recommendedInput,
    }));
  };

  const handleRatingChange = (newRating) => {
    setRating((rating) => newRating);
    setReviewInputs((prevState) => ({
      ...prevState,
      rating: newRating,
    }));
  };

  const handleSliderChange = (e) => {
    const { id } = e.target;
    const value = Number(e.target.value);

    setChars((prevState) => ({
      ...prevState,
      [id]: value,
    }));

    setTimeout(() => {
      setReviewInputs((prev) => ({
        ...prev,
        characteristics,
      }));
    }, 1000);
  };

  const submitBtnText = 'Submit';

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/reviews', reviewInputs)
      .then(({ data }) => {
        if (data.name !== 'Error') {
          onClose();
          setReviewSubmit(!reviewSubmit);
        } else {
          alert('Please fill out entire form.');
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  if (!open) return null;
  return ReactDOM.createPortal(
    <div>
      <Overlay />
      <ModalForm>
        <Heading>
          <CloseBtn onClick={onClose}>x</CloseBtn>
          <Title>{products.currentItem.name}</Title>
        </Heading>
        <form>
          <Label htmlFor="rating">Rating:</Label>
          <StarRatings
            rating={rating}
            starRatedColor="gold"
            starHoverColor="gold"
            starDimension="25px"
            starSpacing="0"
            numberOfStars={5}
            changeRating={handleRatingChange}
            name="rating"
            required
          />

          <Label htmlFor="summary">Title:</Label>
          <ReviewTitleInput type="text" id="summary" onChange={handleTextInputChange} placeholder="Example: Best purchase ever!" required />

          <Label htmlFor="body">Review (10 - 1000 characters):</Label>
          <ReviewBody required minLength="10" maxLength="1000" id="body" onChange={handleTextInputChange} placeholder="Why did you like the product or not?" />

          <div style={{ marginTop: '20px' }}>Would you recommend this product to a friend?</div>
          <label htmlFor="yes">Yes</label>
          <RadioInput type="radio" id="yes" name="recommend" onClick={handleRecommendInputChange} />

          <label htmlFor="no">No</label>
          <RadioInput type="radio" id="no" name="recommend" onClick={handleRecommendInputChange} />

          <SliderList>
            {charsArr.map((item) => (
              <SliderItem>
                <SliderLabel htmlFor={item.id}>{item.name}</SliderLabel>
                <SliderInput type="range" id={item.id} min="1" max="5" defaultValue="3" onChange={handleSliderChange} />
              </SliderItem>
            ))}
          </SliderList>

          <Label htmlFor="name">Your Name:</Label>
          <Input type="text" id="name" onChange={handleTextInputChange} required />
          <div style={{ fontSize: 'small' }}>For privacy reasons, do not use your full name or email address.</div>

          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" onChange={handleTextInputChange} required />
          <div style={{ fontSize: 'small' }}>For authentication reasons, you will not be emailed.</div>

          <Label className="button" />
          <SubmitButton onClick={handleSubmit} type="submit">{submitBtnText}</SubmitButton>

        </form>
      </ModalForm>
    </div>,
    document.getElementById('portal'),
  );
};

export default AddReviewModal;
