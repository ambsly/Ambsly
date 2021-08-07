import React, { useState } from 'react';
import styled from 'styled-components';
import TagItem from './tagsItem.jsx';

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 435px;
`;

const TagsList = ({ filterList }) => (
  <ListWrapper>
    {filterList.map((item) => <TagItem item={item} />)}
  </ListWrapper>
);

export default TagsList;
