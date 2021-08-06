import React from 'react';
import styled from 'styled-components';

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
  /* position: relative; */
  height: 6px;
  &::-webkit-progress-bar {
    background: rgb(238, 238, 238);
  }
  &::-webkit-progress-value {
  background-color: #74e474;
}
`;

const StarsBreakdown = ({ ratings, totalRatings }) => (
  <StarList>
    <Wrapper>
      <label htmlFor="5starbar">5  star</label>
      <Bar className="5starbar" min="0" max={totalRatings.toString()} value={ratings[5]} />
    </Wrapper>
    <Wrapper>
      <label htmlFor="4starbar">4  star</label>
      <Bar className="4starbar" min="0" max={totalRatings.toString()} value={ratings[4]} />
    </Wrapper>
    <Wrapper>
      <label htmlFor="3starbar">3  star</label>
      <Bar className="3starbar" min="0" max={totalRatings.toString()} value={ratings[3]} />
    </Wrapper>
    <Wrapper>
      <label htmlFor="2starbar">2  star</label>
      <Bar className="2starbar" min="0" max={totalRatings.toString()} value={ratings[2]} />
    </Wrapper>
    <Wrapper>
      <label htmlFor="1starbar">1  star</label>
      <Bar className="1starbar" min="0" max={totalRatings.toString()} value={ratings[1]} />
    </Wrapper>
  </StarList>
);

export default StarsBreakdown;
