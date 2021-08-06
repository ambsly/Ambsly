import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactDom from 'react-dom';
import { ProductsContext, CarouselImg } from '../globalState.jsx';
import ModalCarouselCard from './ModalCarouselCard.jsx';
import CarouselComponent from './StyledComponents/CarouselComponent.jsx';

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

const StyledModalCarouselContainer = styled.div`
width: 400px;
height: 100px;
min-height:  100px;
position: relative;
background-color: white;
`;

const StyledMoodalCarouselInner = styled.div`
overflow: hidden;
`;
const StyledModalCarouselTrack = styled.div`
background-color: white;
display: flex;
height: 100px;
`;

const modalCarouselCardContainer = {
  width: 100,
  height: 100,
  flexShrink: 0,
  padding: 10,
  boxSizing: 'border-box',
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
        <StyledModalCarouselContainer>
          <StyledMoodalCarouselInner>
            <StyledModalCarouselTrack ref={track}>
              {cardPhotos}
            </StyledModalCarouselTrack>

          </StyledMoodalCarouselInner>
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

        </StyledModalCarouselContainer>
      </div>
    </div>,
    document.getElementById('app'),
  );
}

export default ModalCarousel;
