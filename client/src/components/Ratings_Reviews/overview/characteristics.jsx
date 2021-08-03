import React from 'react';
import _ from 'underscore';
import styled from 'styled-components';
import CharacteristicItem from './characteristicItem.jsx';

const CharacteristicsList = styled.div`
  /* margin: 10px 0; */
`;

const Title = styled.div`
  font-size: 20px;
  margin-bottom: 5px;
`;

const CharacteristicsBreakdown = ({ characteristics }) => {
  const charsArr = [];
  _.each(characteristics, (val, key) => {
    charsArr.push({ key, val: val.value, id: val.id });
  });

  return (
    <CharacteristicsList>
      <Title>Item Specific</Title>
      {charsArr.map((item) => <CharacteristicItem key={item.id} name={item.key} val={item.val} />)}
    </CharacteristicsList>
  );
};

export default CharacteristicsBreakdown;
