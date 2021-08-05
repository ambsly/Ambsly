import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  /* display: flex; */
  /* justify-content: center; */
`;

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
  position: fixed;
  /* overflow: scroll !important; */
  /* max-height: 80%; */
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
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 20px;
  margin-bottom: 5px;
  /* padding: 10px; */
`;

const Subtitle = styled.div`
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
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
`;

const Input = styled.input`
  overflow: hidden;
  text-align: left;
  padding: 5px 5px 5px 10px;
  margin: 8px 0 8px 0;
`;

const RadioInput = styled.input`
  margin: 8px 25px 0px 6px;
`;

const ReviewBody = styled.textarea`
  overflow: auto;
  padding: 5px 5px 5px 10px;
  margin: 8px 0 8px 0;
  height: 120px;
  width: 660px;
  min-width: 70%;
`;

const CloseBtn = styled.button`
  width: 25px;
  height: auto;
  align-self: flex-end;
`;

// handle submit
// state will be an obj with username: '', other placeholders
// then on each field input, state will update on Change to populate empty strings
// that state obj will be packaged up and sent in an axios.post

const AddReviewModal = ({ open, onClose }) => {
  const [recommendedInput, setRecommendedInput] = useState(true);
  const [reviewInputs, setReviewInputs] = useState({
    product_id: 25167,
    rating: null,
    summary: '',
    body: '',
    recommend: null,
    name: '',
    email: '',
    photos: [],
    characteristics: {
      84504: 5, 84505: 5, 84506: 5, 84507: 5,
    },
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
    console.log(reviewInputs);
  };

  const handleRecommendInputChange = (e) => {
    if (e.target.id === 'no') {
      setRecommendedInput(false);
    } else if (e.target.id === 'yes') {
      setRecommendedInput(true);
    }
    setReviewInputs((prevState) => ({
      ...prevState,
      recommend: recommendedInput,
    }));
  };

  const handleSubmit = (e) => {
    // if all fields filled out properly, then submit (& close)
    // tomorrow: fix server side so it res.sends success only on 200 or 201 whatever
    // for other status codes send as error so i can handle in catch block

    // what to work on: change review button text once submitted
    // star rating
    // use context to share characteristic id's from metadata
    // dynamically render product name based on use context from product GET
    e.preventDefault();
    axios.post('/reviews', reviewInputs)
      .then((results) => {
        if (results.data.name !== 'Error') {
          submitBtnText = 'Review Submitted!';
          setTimeout(() => {
            onClose();
          }, 1500);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let submitBtnText = 'Submit';

  if (!open) return null;
  return ReactDOM.createPortal(
    <Container>
      <Overlay />
      <ModalForm>
        <Heading>
          <CloseBtn onClick={onClose}>x</CloseBtn>
          <Title>Write a Review</Title>
          <Subtitle>productName</Subtitle>
        </Heading>
        <form>
          <Label htmlFor="rating">Rating:</Label>
          <Input type="number" min="1" max="5" id="rating" onChange={handleTextInputChange} required />

          <Label htmlFor="summary">Title:</Label>
          <ReviewTitleInput type="text" id="summary" onChange={handleTextInputChange} required />

          <Label htmlFor="body">Review (50 - 1000 characters):</Label>
          <ReviewBody required minLength="50" maxLength="1000" id="body" onChange={handleTextInputChange} required />

          <div style={{ marginTop: '20px' }}>Would you recommend this product to a friend?</div>
          <label htmlFor="yes">Yes</label>
          <RadioInput type="radio" id="yes" name="recommend" onClick={handleRecommendInputChange} />

          <label htmlFor="no">No</label>
          <RadioInput type="radio" id="no" name="recommend" onClick={handleRecommendInputChange} />

          <Label htmlFor="name">Your Name:</Label>
          <Input type="text" id="name" onChange={handleTextInputChange} required />

          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" onChange={handleTextInputChange} required />

          <Label className="button" />
          <button onClick={handleSubmit} type="submit">{submitBtnText}</button>

        </form>
      </ModalForm>
    </Container>,
    document.getElementById('portal'),
  );
};

export default AddReviewModal;
