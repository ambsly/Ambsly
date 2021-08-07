import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ModalForm = styled.div`
  position: fixed;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -30%);
  z-Index: 1000;
  /* background-color: #FCFAF0; */
  /* border: solid 2px #99B0B0; */
  background-color: white;
  border: solid 2px black;
  border-radius: 5px;
  padding: 10px;
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

const Title = styled.span`
  display: block;
  font-size: 20px;
  margin: 10px;
  padding: 10px;
  border: solid 1px black;
  /* color: #FCFAF0; */
  /* background-color: #99B0B0; */
`;

const Subtitle = styled.span`
  display: block;
  font-size: 16px;
  margin: 10px;
  padding: 10px;
  border: solid 1px black;
  /* color: #FCFAF0; */
  /* background-color: #99B0B0; */
`;

const Label = styled.label`
  display: block;
  /* color: #8A9EA0; */
  padding: 5px 5px 5px 10px;
`;

const Asterisk = styled.p`
  display: inline;
  color: red;
`;

const P = styled.p``;

const UploadButton = styled.button`
  margin: 10px;
  /* border: solid 1px #8A9EA0; */
  border: solid 1px;
  border-radius: 2px;
  /* background-color: #FCFAF0; */
  /* color: #8A9EA0; */
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  /* border: solid 1px #8A9EA0; */
  border: solid 1px;
  border-radius: 2px;
  /* background-color: #FCFAF0; */
  /* color: #8A9EA0; */
`;

const PhotoField = styled.input`
  margin: 5px;
`;

const PhotosSection = styled.div`
  display: block;
`;

const PhotoDiv = styled.div`
  display: inline-block;
  margin: 10px 10px 0 0;
  width: 75px;
  height: 75px;
  overflow: hidden;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ModalAnswerForm = ({
  open, onClose, question, productName,
}) => {
  if (!open) return null;

  const [isUploaded, setIsUploaded] = useState(false);
  const [formData, setFormData] = useState({
    questionId: question.question_id,
    body: '',
    name: '',
    email: '',
    photos: [],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.className]: e.target.value,
    });
  };

  const handlePhotoURL = (e) => {
    const newPhoto = e.target.value;
    if (newPhoto.length !== 0) {
      const newPhotos = formData.photos.concat([e.target.value]);
      setFormData({
        ...formData,
        photos: newPhotos,
      });
    }
  };

  const PhotoFields = () => (
    <>
      <PhotoField type="text" placeholder="Paste photo URL here" className="photo" onChange={(e) => handlePhotoURL(e)} />
      <br />
      <PhotoField type="text" placeholder="Paste photo URL here" className="photo" onChange={(e) => handlePhotoURL(e)} />
      <br />
      <PhotoField type="text" placeholder="Paste photo URL here" className="photo" onChange={(e) => handlePhotoURL(e)} />
      <br />
      <PhotoField type="text" placeholder="Paste photo URL here" className="photo" onChange={(e) => handlePhotoURL(e)} />
      <br />
      <PhotoField type="text" placeholder="Paste photo URL here" className="photo" onChange={(e) => handlePhotoURL(e)} />
      <br />
    </>
  );

  const Thumbnails = () => (
    <PhotosSection>
      {formData.photos.map((photo, index) => (
        <PhotoDiv key={photo}>
          <Img alt={index + 1} src={photo} />
        </PhotoDiv>
      ))}
    </PhotosSection>
  );

  const handleUpload = (e) => {
    e.preventDefault();
    if (formData.photos.length > 0) {
      setIsUploaded(true);
    } else {
      alert('To upload photo(s), please enter the photo URL(s).');
    }
  };

  const handleSubmit = (e) => {
    // validate inputs
    // POST request
    // onClose --> refreshAnswers
    e.preventDefault();
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.([a-zA-Z0-9-]+)*$/;
    if (formData.body.length === 0 || formData.name.length === 0 || formData.email.length === 0) {
      alert('Please fill in the required fields.');
    } else if (formData.email.match(validRegex)) {
      axios.post('/qa/questions/:question_id/answers', formData)
        .then((response) => {
          if (response.status === 201) {
            onClose();
          }
        })
        .catch((err) => console.error(err));
    } else {
      alert('Please enter a valid email address.');
    }
  };
  return ReactDOM.createPortal(
    <Container>
      <Overlay />
      <ModalForm>
        <Title>Submit Your Answer</Title>
        <Subtitle>{`${productName}: ${question.question_body}`}</Subtitle>
        <form>
          <Label htmlFor="your-answer">
            Your Answer
            <Asterisk>*</Asterisk>
            <br />
            <textarea maxLength="1000" className="body" onChange={(e) => handleChange(e)} />
          </Label>
          <Label htmlFor="your-nickname">
            What is your nickname?
            <Asterisk>*</Asterisk>
            <br />
            <input type="text" maxLength="60" placeholder="Example: jack543!" className="name" onChange={(e) => handleChange(e)} />
            <br />
            <P>For privacy reasons, do not use your full name or email address.</P>
          </Label>
          <Label htmlFor="your-email">
            Your email
            <Asterisk>*</Asterisk>
            <br />
            <input type="text" maxLength="60" placeholder="Example: jack@email.com" className="email" onChange={(e) => handleChange(e)} />
            <br />
            <P>For authentication reasons, you will not be emailed.</P>
          </Label>
          <Label htmlFor="your-photos">
            Upload photos
            <br />
            {isUploaded ? Thumbnails() : PhotoFields()}
            <UploadButton onClick={(e) => handleUpload(e)}>Upload</UploadButton>
            <br />
          </Label>
          <Button onClick={(e) => handleSubmit(e)}>
            Submit Answer
          </Button>
        </form>
      </ModalForm>
    </Container>,
    document.getElementById('portal'),
  );
};

ModalAnswerForm.propTypes = propTypes.boolean;

export default ModalAnswerForm;
