import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import ReviewContext from '../context/ReviewContext';

const StarList = styled.div`
  margin: 25px 0;
  width: 180px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 8px 0;
`;

const Bar = styled.progress`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 60%;
  align-self: center;
  height: 5px;
  &::-webkit-progress-bar {
    background: rgb(238, 238, 238);
  }
  &::-webkit-progress-value {
  background-color: #195d92;
  }
`;

const StarsBreakdown = ({ ratings, totalRatings }) => {
  const [hover, setHover] = useState(false);
  const { ratingFilter, setRatingFilter } = useContext(ReviewContext);

  const handleClickFilter = (e) => {
    const filterNum = e.target.getAttribute('name');
    if (ratingFilter.includes(filterNum)) {
      const arr = [...ratingFilter];
      const index = arr.indexOf(filterNum);
      arr.splice(index, 1);
      setRatingFilter(arr);
    } else {
      setRatingFilter(() => [...ratingFilter, filterNum]);
    }
  };

  const mouseEnterHandler = () => {
    setHover(true);
  };

  const mouseLeaveHandler = () => {
    setHover(false);
  };

  let hoverStyle = {};
  if (hover) {
    hoverStyle = { cursor: 'pointer' };
  } else {
    hoverStyle = {};
  }

  return (
    <StarList>
      <Wrapper className="starbar" name="5" style={hoverStyle} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} onClick={handleClickFilter}>
        <label htmlFor="5star" name="5">5 star</label>
        <Bar name="5" min="0" max={totalRatings.toString()} value={ratings[5]} />
      </Wrapper>
      <Wrapper className="starbar" name="4" style={hoverStyle} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} onClick={handleClickFilter}>
        <label htmlFor="4starbar" name="4">4 star</label >
        <Bar name="4" className="4starbar" min="0" max={totalRatings.toString()} value={ratings[4]} />
      </Wrapper>
      <Wrapper className="starbar" name="3" style={hoverStyle} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} onClick={handleClickFilter}>
        <label name="3" htmlFor="3starbar">3 star</label>
        <Bar name="3" className="3starbar" min="0" max={totalRatings.toString()} value={ratings[3]} />
      </Wrapper>
      <Wrapper className="starbar" name="2" style={hoverStyle} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} onClick={handleClickFilter}>
        <label name="2" htmlFor="2starbar">2 star</label>
        <Bar name="2" className="2starbar" min="0" max={totalRatings.toString()} value={ratings[2]} />
      </Wrapper>
      <Wrapper className="starbar" name="1" style={hoverStyle} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} onClick={handleClickFilter}>
        <label name="1" htmlFor="1starbar">1 star</label>
        <Bar name="1" className="1starbar" min="0" max={totalRatings.toString()} value={ratings[1]} />
      </Wrapper>
    </StarList>
  );
};
export default StarsBreakdown;
