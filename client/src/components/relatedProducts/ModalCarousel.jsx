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
  border: '1px solid black',
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

const modalCarouselContainerImage = {
  display: 'block',
  height: 300,
  width: 400,
};

const StyledRightButton = styled.div`
left: 360px;
position: absolute;
border-radius: 50%;
border: none;
top: -145%;
background-color: transparent;
`;

const StyledLeftButton = styled.div`
left: -35px;
position: absolute;
border-radius: 50%;
border: none;
background-color: transparent;
top: -145%;
`;
function ModalCarousel({
  open, children, onClose, photos, id,
}) {
  if (!open) {
    return null;
  }

  const rightButton = React.createRef();
  const track = React.createRef();
  const leftButton = React.createRef();
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

  useEffect(() => {
    if (width === 0 && leftButton.current !== null) {
      leftButton.current.hidden = true;
    } else {
      leftButton.current.hidden = false;
    }

    if ((width === (photos.length * -100) + 400) || photos.length <= 4) {
      rightButton.current.hidden = true;
    } else {
      rightButton.current.hidden = false;
    }
  }, [width]);

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
            <StyledRightButton onClick={onClickRight} ref={rightButton}>
              <span className="material-icons modalButton">
                chevron_right
              </span>
            </StyledRightButton>
            <StyledLeftButton onClick={onClickLeft} ref={leftButton}>
              <span className="material-icons modalButton">
                chevron_left
              </span>
            </StyledLeftButton>
          </div>

          {children}

        </StyledModalCarouselContainer>
      </div>
    </div>,
    document.getElementById('app'),
  );
}

export default ModalCarousel;
