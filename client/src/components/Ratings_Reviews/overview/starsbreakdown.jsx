import React, { useState, useContext } from 'react';
import ReviewContext from '../context/ReviewContext';
import { StarList, StarItemWrapper, StarGauge } from './styles/review-styles-overview';

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
      <StarItemWrapper className="starStarGauge" name="5" style={hoverStyle} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} onClick={handleClickFilter}>
        <label htmlFor="5star" name="5">5 star</label>
        <StarGauge name="5" min="0" max={totalRatings.toString()} value={ratings[5]} />
      </StarItemWrapper>
      <StarItemWrapper className="starStarGauge" name="4" style={hoverStyle} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} onClick={handleClickFilter}>
        <label htmlFor="4starStarGauge" name="4">4 star</label >
        <StarGauge name="4" className="4starStarGauge" min="0" max={totalRatings.toString()} value={ratings[4]} />
      </StarItemWrapper>
      <StarItemWrapper className="starStarGauge" name="3" style={hoverStyle} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} onClick={handleClickFilter}>
        <label name="3" htmlFor="3starStarGauge">3 star</label>
        <StarGauge name="3" className="3starStarGauge" min="0" max={totalRatings.toString()} value={ratings[3]} />
      </StarItemWrapper>
      <StarItemWrapper className="starStarGauge" name="2" style={hoverStyle} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} onClick={handleClickFilter}>
        <label name="2" htmlFor="2starStarGauge">2 star</label>
        <StarGauge name="2" className="2starStarGauge" min="0" max={totalRatings.toString()} value={ratings[2]} />
      </StarItemWrapper>
      <StarItemWrapper className="starStarGauge" name="1" style={hoverStyle} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} onClick={handleClickFilter}>
        <label name="1" htmlFor="1starStarGauge">1 star</label>
        <StarGauge name="1" className="1starStarGauge" min="0" max={totalRatings.toString()} value={ratings[1]} />
      </StarItemWrapper>
    </StarList>
  );
};

export default StarsBreakdown;
