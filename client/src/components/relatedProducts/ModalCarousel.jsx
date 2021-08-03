import React, { useContext, useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import { ProductsContext, CarouselImg } from '../globalState.jsx';
import ModalCarouselCard from './ModalCarouselCard.jsx';

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
  position: 'relative',
  top: '80%',
};

const modalCarouselContainer = {
  margin: '100 auto',
  top: '75%',
  width: 400,
  height: 200,
  minHeight: 100,
  position: 'relative',
};
const modalCarouselTrack = {
  display: 'flex',
  height: 100,
};

const modalCarouselCardContainer = {
  width: 100,
  height: 100,
  flexShrink: 0,
  padding: 10,
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

const leftModalCarouselButton = {
  left: -30,
};

const rightModalCarouselButton = {
  right: -30,
};

const modalCarouselContainerImage = {
  display: 'block',
  height: 300,
  width: 400,
};

// const modalCarouselButtons = {
//   transform: 'translateY(-150%)',
//   top: '50%',
//   position: 'absolute',
// };

function ModalCarousel({
  open, children, onClose, photos, id,
}) {
  if (!open) {
    return null;
  }

  const track = React.createRef();
  const photo = photos[0].thumbnail_url;
  // console.log(img);
  const [products, setProducts] = useContext(ProductsContext);
  const [globalImg, setGobalImg] = useContext(CarouselImg);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (globalImg.currentRelatedImg === '' || id !== globalImg.currentRelatedID) {
      setGobalImg({
        currentRelatedImg: photo,
        currentRelatedID: id,
      });
    }
  },
  []);

  function onClickLeft() {
    if (width !== 0) {
      setWidth((prevState) => prevState + 100);
      track.current.style.transform = `translate(${width + 100}px`;
    }
  }

  function onClickRight() {
    setWidth((prevState) => prevState - 100);
    track.current.style.transform = `translate(${width - 100}px`;
  }

  const cardPhotos = photos.map((picture) => (
    <ModalCarouselCard
      picture={picture}
      id={id}
    />
  ));

  return ReactDom.createPortal(
    <div style={MODAL_STYLES}>
      <div style={Inner_MODAL_STYLES} onMouseLeave={onClose}>
        <img
          style={modalCarouselContainerImage}
          alt=""
          src={globalImg.currentRelatedImg}
        />

        <div className="modalcarousel-container">
          <div className="modalcarousel-inner">
            <div className="modalcarousel-track" ref={track}>
              {cardPhotos}
            </div>

          </div>
          <div className="modalCarouselButtons">
            <button className="rightModalCarouselButton" onClick={onClickLeft}>
              <span className="material-icons">
                chevron_left
              </span>
            </button>
            <button className="leftModalCarouselButton" onClick={onClickRight}>
              <span className="material-icons">
                chevron_right
              </span>

            </button>
          </div>

          {children}
        </div>

      </div>
    </div>,
    document.getElementById('app'),
  );
}

export default ModalCarousel;
