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

const StarsBreakdown = ({ ratings, totalRatings }) => (
  <StarList>
    <Wrapper>
      <label htmlFor="5starbar">5  stars</label>
      <meter className="5starbar" min="0" max={totalRatings.toString()} value={ratings[5]} />
    </Wrapper>
    <Wrapper>
      <label htmlFor="4starbar">4  stars</label>
      <meter className="4starbar" min="0" max={totalRatings.toString()} value={ratings[4]} />
    </Wrapper>
    <Wrapper>
      <label htmlFor="3starbar">3  stars</label>
      <meter className="3starbar" min="0" max={totalRatings.toString()} value={ratings[3]} />
    </Wrapper>
    <Wrapper>
      <label htmlFor="2starbar">2  stars</label>
      <meter className="2starbar" min="0" max={totalRatings.toString()} value={ratings[2]} />
    </Wrapper>
    <Wrapper>
      <label htmlFor="1starbar">1  star</label>
      <meter className="1starbar" min="0" max={totalRatings.toString()} value={ratings[1]} />
    </Wrapper>
  </StarList>
);

export default StarsBreakdown;
