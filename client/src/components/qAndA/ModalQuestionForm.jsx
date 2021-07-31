import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
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

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  /* border: solid 1px #8A9EA0; */
  border: solid 1px;
  border-radius: 5px;
  /* background-color: #FCFAF0; */
  /* color: #8A9EA0; */
`;

const ModalQuestionForm = ({ open, onClose }) => {
  if (!open) return null;
  const [formData, setFormData] = React.useState({
    product_id: 28010,
    body: '',
    name: '',
    email: '',
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.className]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    // validate inputs
    // POST request
    // onClose --> refreshQ
    e.preventDefault();
    if (formData.body.length === 0 || formData.name.length === 0 || formData.email.length === 0) {
      alert('Please fill in the required fields.');
    } else {
      axios.post('/qa/questions', formData)
        .then((response) => {
          if (response.status === 201) {
            onClose();
          }
        })
        .catch((err) => console.error(err));
    }
  };
  return ReactDOM.createPortal(
    <Container>
      <Overlay />
      <ModalForm>
        <Title>Ask Your Question</Title>
        <Subtitle>About the {`productName`}</Subtitle>

        <form>
          <Label htmlFor="your-question">
            Your Question
            <Asterisk>*</Asterisk>
            <br />
            <textarea maxLength="1000" className="body" onChange={(e) => handleChange(e)} />
          </Label>
          <Label htmlFor="your-nickname">
            What is your nickname?
            <Asterisk>*</Asterisk>
            <br />
            <input type="text" maxLength="60" placeholder="Example: jackson11!" className="name" onChange={(e) => handleChange(e)} />
            <br />
            <P>For privacy reasons, do not use your full name or email address.</P>
          </Label>
          <Label htmlFor="your-email">
            Your email
            <Asterisk>*</Asterisk>
            <br />
            <input type="text" maxLength="60" placeholder="Why did you like the product or not?" className="email" onChange={(e) => handleChange(e)} />
            <br />
            <P>For authentication reasons, you will not be emailed.</P>
          </Label>
          {/* on submit, validate fields and give warning message */}
          <Button onClick={(e) => handleSubmit(e)}>Submit Question</Button>
        </form>
      </ModalForm>
    </Container>,
    document.getElementById('portal'),
  );
};

ModalQuestionForm.propTypes = propTypes.boolean;

export default ModalQuestionForm;
