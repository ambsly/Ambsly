import React, { useContext } from 'react';
import ReactDom from 'react-dom';
import { ProductsContext } from '../globalState.jsx';

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
  width: 400,
  height: 400,
  backgroundColor: 'aquamarine',
};

const modalCarouselContainer = {
  margin: 'auto',
  top: '75%',
  width: 400,
  maxHeight: 200,
  position: 'relative',
};
const modalCarouselTrack = {
  display: 'flex',
  height: 200,
};

const modalCarouselCardContainer = {
  width: 100,
  height: 100,
  padding: 10,
  flexShrink: 0,
  boxSizing: 'border-box',
};

const modalcarouselInner = {
  overflow: 'hidden',
};

const modalCarouselCard = {
  width: '100%',
  height: '100%',
  border: '1px solid rgba(0, 0, 0, 0.05)',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
};

function ModalCarousel({ open, children, onClose }) {
  if (!open) {
    return null;
  }
  return ReactDom.createPortal(
    <div style={MODAL_STYLES}>
      <div style={Inner_MODAL_STYLES} onMouseLeave={onClose}>
        <div style={modalCarouselContainer} className="modalcarousel-container">
          <div style={modalcarouselInner} className="modalcarousel-inner">
            <div style={modalCarouselTrack} className="modalcarousel-track">
              <div style={modalCarouselCardContainer} className="modalcard-container">
                <div style={modalCarouselCard} className="modalCard">
                  <div className="img">1</div>
                  <div className="">price</div>
                  <div className="">price</div>
                  <div className="">price</div>
                  <div className="">price</div>
                </div>
              </div>
              <div style={modalCarouselCardContainer} className="modalcard-container">
                <div style={modalCarouselCard} className="modalCard">
                  <div className="img">1</div>
                  <div className="">price</div>
                  <div className="">price</div>
                  <div className="">price</div>
                  <div className="">price</div>
                </div>
              </div>
              <div style={modalCarouselCardContainer} className="modalcard-container">
                <div style={modalCarouselCard} className="modalCard">
                  <div className="img">1</div>
                  <div className="">price</div>
                  <div className="">price</div>
                  <div className="">price</div>
                  <div className="">price</div>
                </div>
              </div>
              <div style={modalCarouselCardContainer} className="modalcard-container">
                <div style={modalCarouselCard} className="modalCard">
                  <div className="img">1</div>
                  <div className="">price</div>
                  <div className="">price</div>
                  <div className="">price</div>
                  <div className="">price</div>
                </div>
              </div>
              <div style={modalCarouselCardContainer} className="modalcard-container">
                <div style={modalCarouselCard} className="modalCard">
                  <div className="img">1</div>
                  <div className="">price</div>
                  <div className="">price</div>
                  <div className="">price</div>
                  <div className="">price</div>
                </div>
              </div>
              <div style={modalCarouselCardContainer} className="modalcard-container">
                <div style={modalCarouselCard} className="modalCard">
                  <div className="img">1</div>
                  <div className="">price</div>
                  <div className="">price</div>
                  <div className="">price</div>
                  <div className="">price</div>
                </div>
              </div>
            </div>

          </div>
          {children}
        </div>

      </div>
    </div>,
    document.getElementById('app'),
  );
}

export default ModalCarousel;
