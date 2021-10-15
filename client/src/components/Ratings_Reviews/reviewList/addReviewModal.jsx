import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import _ from 'underscore';
import { ProductsContext } from '../../globalState';
import ReviewContext from '../context/ReviewContext';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .7);
  z-Index: 1000;
`;

const ModalForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: fixed;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -30%);
  z-Index: 1000;

  background-color: white;
  border: solid 2px black;
  border-radius: 5px;
  padding: 30px;
  width: 720px;
  min-width: 30%;
  max-width: 80%;
  min-height: 760px;
  height: auto;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Label = styled.label`
  display: block;
  margin-top: 20px;
`;

const ReviewTitleInput = styled.input`
  overflow: hidden;
  text-align: left;
  padding: 5px 5px 5px 10px;
  margin: 8px 0 8px 0;
  width: 400px;
  font-size: 18px;
  border: 1px solid rgba(144, 164, 174, 0.8);
`;

const Input = styled.input`
  overflow: hidden;
  text-align: left;
  padding: 5px 5px 5px 10px;
  margin: 8px 0 8px 0;
  border: 1px solid rgba(144, 164, 174, 0.8);
`;

const SliderList = styled.div`
  margin: 20px 0;
`;

const SliderItem = styled.div`
  display: inline-block;
  margin-right: 35px;
`;

const SliderInput = styled.input`
  height: 2px;
  width: 100%;
  margin-bottom: 10px;
`;

const SliderLabel = styled.label`
  display: block;
`;

const RadioInput = styled.input`
  margin: 8px 25px 0px 6px;
`;

const ReviewBody = styled.textarea`
  overflow: auto;
  padding: 5px 5px 5px 10px;
  margin: 8px 0 8px 0;
  height: 80px;
  width: 660px;
  min-width: 70%;
  border: 1px solid rgba(144, 164, 174, 0.8);
`;

const CloseBtn = styled.button`
  width: 25px;
  padding: 2px;
  height: auto;
  align-self: flex-end;
  cursor: pointer;

  background: #fff;
  border: 1px solid rgba(144, 164, 174, 0.8);
  &:hover {
    transition: 0.4s;
    border: 1px solid #0c2d47;
    border-radius: 2px;
  }
`;

const SubmitButton = styled.button`
  cursor: pointer;
  height: 40px;
  width: 120px;

  background: #fff;
  border-color: #b2cfeb;
  color: #0c2d47;
  background-color: transparent !important;
  border-bottom-width: 2px;
  line-height: 2.6;
  text-transform: uppercase;

  &:hover {
    appearance: none;
    background: rgba(144, 164, 174, 0.8);
    border: 1px solid rgba(144, 164, 174, 0.8);
    border-radius: 0;
    cursor: pointer;
    height: 40px;
    width: 120px;
    letter-spacing: .25px;
    text-align: center;
    text-transform: uppercase;
    transition: .3s;
  }
`;

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
