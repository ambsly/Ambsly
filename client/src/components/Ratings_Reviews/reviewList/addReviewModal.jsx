import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
  /* display: flex;
  justify-content: center; */
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

const Input = styled.input`
  overflow: hidden;
  text-align: left;
  padding: 5px 5px 5px 10px;
  margin: 8px 0 8px 0;
`;

const RadioInput = styled.input`
  margin: 8px 30px 0px 6px;
`;

const ReviewBody = styled.textarea`
  overflow: auto;
  padding: 5px 5px 5px 10px;
  margin: 8px 0 8px 0;
  height: 160px;
  width: 660px;
  min-width: 70%;
`;

const Label = styled.label`
  display: block;
  margin-top: 20px;
`;

// handle submit
// state will be an obj with username: '', other placeholders
// then on each field input, state will update on Change to populate empty strings
// that state obj will be packaged up and sent in an axios.post

// also include x on top right in case they dont' wanna submit review
const AddReviewModal = ({ open, onClose }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <Container>
      <Overlay />
      <ModalForm>
        <Title>Write a Review</Title>
        <Subtitle>{`productName`}</Subtitle>
        <form>
          <Label htmlFor="rating">Rating:</Label>
          <Input type="number" min="1" max="5" id="rating" />

          <Label htmlFor="title">Title:</Label>
          <Input type="text" id="title" />

          <Label htmlFor="summary">Review (50 - 1000 characters):</Label>
          <ReviewBody required minLength="50" maxLength="1000" id="summary" />

          <div>Would you recommend this product?</div>
          <br />
          <label htmlFor="yes">Yes</label>
          <RadioInput type="radio" id="yes" name="recommend" />

          <label htmlFor="no">No</label>
          <RadioInput type="radio" id="no" name="recommend" />

          <Label htmlFor="username">Your Name:</Label>
          <Input type="text" id="username" />

          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" />

          <Label className="button" />
          <button onClick={onClose} type="submit">Post</button>

        </form>
      </ModalForm>
    </Container>,
    document.getElementById('portal'),
  );
};

export default AddReviewModal;
