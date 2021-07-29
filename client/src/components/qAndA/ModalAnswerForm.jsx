import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ModalForm = styled.div`
  position: fixed;
  /* left: 50%; */
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
  /* color: #FCFAF0; */
  /* background-color: #99B0B0; */
`;

const Subtitle = styled.span`
  display: block;
  font-size: 16px;
  margin: 10px;
  padding: 10px;
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
  border-radius: 5px;
  /* background-color: #FCFAF0; */
  /* color: #8A9EA0; */
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  /* border: solid 1px #8A9EA0; */
  border: solid 1px;
  border-radius: 5px;
  /* background-color: #FCFAF0; */
  /* color: #8A9EA0; */
`;

const ModalAnswerForm = ({ open, onClose }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <Container>
      <Overlay />
      <ModalForm>
        <Title>Submit Your Answer</Title>
        <Subtitle>{`productName: questionBody`}</Subtitle>
        <form>
          <Label htmlFor="your-answer">
            Your Answer
            <Asterisk>*</Asterisk>
            <br />
            <textarea maxLength="1000" />
          </Label>
          <Label htmlFor="your-nickname">
            What is your nickname?
            <Asterisk>*</Asterisk>
            <br />
            <input type="text" maxLength="60" placeholder="Example: jack543!" />
            <br />
            <P>For privacy reasons, do not use your full name or email address.</P>
          </Label>
          <Label htmlFor="your-email">
            Your email
            <Asterisk>*</Asterisk>
            <br />
            <input type="text" maxLength="60" placeholder="Example: jack@email.com" />
            <br />
            <P>For authentication reasons, you will not be emailed.</P>
          </Label>
          <Label htmlFor="your-photos">
            Upload photos
            <br />
            {/* add upload functionality */}
            <UploadButton>Upload</UploadButton>
            <br />
          </Label>
          {/* on submit, validate fields and give warning message */}
          <Button onClick={onClose}>Submit Answer</Button>
        </form>
      </ModalForm>
    </Container>,
    document.getElementById('portal'),
  );
};

ModalAnswerForm.propTypes = propTypes.boolean;

export default ModalAnswerForm;
