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
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;

  z-Index: 1000;
  background-color: white;
  border: solid 2px black;
  border-radius: 5px;
  padding: 10px;
`;

const Label = styled.label``;

const AddReviewModal = ({ open, onClose }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <Container>
      <Overlay />
      <ModalForm>
        <button onClick={onClose} type="submit">Click to close me</button>
      </ModalForm>
    </Container>,
    document.getElementById('portal'),
  );
};

export default AddReviewModal;
