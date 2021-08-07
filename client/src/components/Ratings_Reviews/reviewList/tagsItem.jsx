import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import BigContext from '../context/BigContext.js';

const Button = styled.button`
  margin-top: 8px;
  margin-left: 5px;
  cursor: pointer;
`;

const TagItem = ({ item }) => {
  const { ratingFilter, setRatingFilter } = useContext(BigContext);

  const handleClickFilter = (e) => {
    const filterNum = e.target.getAttribute('name');
    const arr = [...ratingFilter];
    const index = arr.indexOf(filterNum);
    arr.splice(index, 1);
    setRatingFilter(arr);
  };

  return (
    <div>
      <Button onClick={handleClickFilter}>Remove Filter: {item} star</Button>
    </div>
  );
};

export default TagItem;
