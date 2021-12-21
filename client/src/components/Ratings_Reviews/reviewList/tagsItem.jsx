import React, { useContext } from 'react';
import ReviewContext from '../context/ReviewContext';
import { TagButton } from './styles/reviewListStyles';

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
      <TagButton onClick={handleClickFilter}>
        Remove Filter:
        {' '}
        {item}
        {' '}
        star
      </TagButton>
    </div>
  );
};

export default TagItem;
