import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const AddReviewModal = ({ open, onClose }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <button onClick={onClose()} type="submit">Click to close me</button>,
    document.getElementById('portal'),
  );
};

export default AddReviewModal;
