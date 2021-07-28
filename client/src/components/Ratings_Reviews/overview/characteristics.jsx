import React from 'react';
import _ from 'underscore';
import CharacteristicItem from './characteristicItem.jsx';

const CharacteristicsBreakdown = ({ characteristics }) => {
  const charsArr = [];
  _.each(characteristics, (val, key) => {
    charsArr.push({ key, val: val.value });
  });

  return (
    <div>
      {charsArr.map((item) => <CharacteristicItem name={item.key} val={item.val} />)}
    </div>
  );
};

export default CharacteristicsBreakdown;
