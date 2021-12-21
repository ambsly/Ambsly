import React from 'react';
import TagItem from './tagsItem';
import { TagListWrapper } from './styles/reviewListStyles';

const TagsList = ({ filterList }) => (
  <TagListWrapper>
    {filterList.map((item) => <TagItem item={item} />)}
  </TagListWrapper>
);

export default TagsList;
