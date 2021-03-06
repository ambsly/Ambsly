import React from 'react';
import _ from 'underscore';
import CharacteristicItem from './characteristicItem';
import { CharacteristicsList } from './styles/review-styles-overview';

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
