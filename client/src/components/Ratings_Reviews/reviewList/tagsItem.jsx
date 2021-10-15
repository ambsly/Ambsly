import React, { useContext } from 'react';
import styled from 'styled-components';
import ReviewContext from '../context/ReviewContext';

const Button = styled.button`
  margin-top: 8px;
  margin-left: 5px;
  cursor: pointer;

  border: 1px solid rgba(144, 164, 174, 0.8);
  border-radius: 3px;
  background-color: transparent;
  line-height: 22px;
  &:hover {
    transition: 0.4s;
    border: 1px solid #0c2d47;
  }
`;

const TagItem = ({ item }) => {
  const { ratingFilter, setRatingFilter } = useContext(ReviewContext);

  const handleClickFilter = (e) => {
    const filterNum = e.target.getAttribute('name');
    const arr = [...ratingFilter];
    const index = arr.indexOf(filterNum);
    arr.splice(index, 1);
    setRatingFilter(arr);
  };

  return (
    <div>
      <Button onClick={handleClickFilter}>
        Remove Filter:
        {' '}
        {item}
        {' '}
        star
      </Button>
    </div>
  );
};

export default TagItem;
