import React from 'react';
import ReactDom from 'react-dom';

const MODAL_STYLES = {
  display: 'flex',
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100vh',
  zIndex: 1000,
  alignItems: 'center',
  justifyContent: 'center',
};

const Inner_MODAL_STYLES = {
  width: 500,
  height: 500,
  backgroundColor: 'aquamarine',
};
function Modal({ open, children, onClose }) {
  if (!open) {
    return null;
  }
  return ReactDom.createPortal(
    <div style={MODAL_STYLES}>
      <div style={Inner_MODAL_STYLES}>
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </div>,
    document.getElementById('app'),
  );
}

export default Modal;
