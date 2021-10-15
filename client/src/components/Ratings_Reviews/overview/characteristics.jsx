import React from 'react';
import _ from 'underscore';
import styled from 'styled-components';
import CharacteristicItem from './characteristicItem';

const CharacteristicsList = styled.div`
  margin-bottom: 20px;
  border-top: 1px solid;
  border-color: rgb(238, 238, 238);
`;

const CharacteristicsBreakdown = ({ characteristics }) => {
  const charsArr = [];
  _.each(characteristics, (val, key) => {
    charsArr.push({ key, val: val.value, id: val.id });
  });
  return (
    <CharacteristicsList>
      {charsArr.map((item) => <CharacteristicItem key={item.id} name={item.key} val={item.val} />)}
    </CharacteristicsList>
  );
};

export default CharacteristicsBreakdown;
