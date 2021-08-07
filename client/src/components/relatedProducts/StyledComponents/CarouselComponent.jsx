import styled from 'styled-components';
import React, { useEffect, useContext, useState } from 'react';
import { ButtonClickedContext } from '../../globalState';

const StyledCarouselContainer = styled.div`
width: 1000px;
margin: 100px auto;
min-height: 200px;
position: relative;
border: 1px grey;
 `;

const StyledCarouselInnerContainer = styled.div`
margin-top: 20px;
overflow: hidden;
transition: 0.35s;
`;

const StyledCarouselTrack = styled.div`
display: flex;
transition: transform 0.35s;
height: 340px;`;

const StyledRelatedTitle = styled.span`
font-size: 24px;
margin: 10px;
padding: 10px;
 `;

// const StyledNavButtons = styled.div`
//   font-size: 100px !important;
//   width: 60px;
//   height: 60px;
//   border-radius: 50%;
//   background-color: transparent;
//   position: absolute;
//   border: none;
//   top: 40%;
//   color:   rgba(144,164,174,0.8);
//   transform: translateY(-85%);
// `;

const StyledRightButton = styled.div`
right: 10px;
width: 60px;
height: 60px;
border-radius: 50%;
background-color: transparent;
position: absolute;
border: none;
top: 40%;
color:   rgba(144,164,174,0.8);
transform: translateY(-85%);`;

const StyledLeftButton = styled.div`
left: -85px;
width: 60px;
height: 60px;
border-radius: 50%;
background-color: transparent;
position: absolute;
border: none;
top: 40%;
color:   rgba(144,164,174,0.8);
transform: translateY(-85%);`;

function CarouselComponent({ cards, name }) {
  const [buttonValue, setButtonValue] = useContext(ButtonClickedContext);
  const rightButton = React.createRef();
  const track = React.createRef();
  const leftButton = React.createRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (width === 0 && leftButton.current !== null) {
      leftButton.current.hidden = true;
    } else {
      leftButton.current.hidden = false;
    }

    if ((width === (cards.length * -253) + 1012) || cards.length <= 4) {
      rightButton.current.hidden = true;
    } else {
      rightButton.current.hidden = false;
    }

    setButtonValue(false);
  }, [width, cards.length]);

  function onClickLeft() {
    // setButtonValue(true);
    if (width !== 0) {
      setWidth((prevState) => prevState + 253);
      track.current.style.transform = `translate(${width + 253}px`;
    }
  }

  function onClickRight() {
    // setButtonValue(true);
    if (width === (cards.length * -253) + 1012
    || (cards.length * -253) > -1012) {
      console.log(width, 'when capp hits');
      console.log('capped hit');
    } else {
      console.log('checking formula', cards.length * -253 + 1012);
      console.log(width, 'looking at what width ish');
      setWidth((prevState) => prevState - 253);
      track.current.style.transform = `translate(${width - 253}px`;
    }
  }

  return (
    <div>
      <StyledCarouselContainer>
        <StyledRelatedTitle>
          {name}
        </StyledRelatedTitle>
        <StyledCarouselInnerContainer>
          <StyledCarouselTrack ref={track}>
            {cards}
          </StyledCarouselTrack>
        </StyledCarouselInnerContainer>
        <div className="nav">
          <StyledLeftButton onClick={onClickLeft} ref={leftButton} className="prev">
            <span className="material-icons chev">
              chevron_left
            </span>
          </StyledLeftButton>

          <StyledRightButton onClick={onClickRight} ref={rightButton} className="next">
            {' '}
            <span className="material-icons chev">
              chevron_right
            </span>
          </StyledRightButton>
        </div>
      </StyledCarouselContainer>
    </div>
  );
}
export default CarouselComponent;
