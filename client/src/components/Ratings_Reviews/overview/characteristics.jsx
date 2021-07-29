import React from 'react';
import _ from 'underscore';
import CharacteristicItem from './characteristicItem.jsx';

const CharacteristicsBreakdown = ({ characteristics }) => {
  console.log('characteristics', characteristics);
  const charsArr = [];
  _.each(characteristics, (val, key) => {
    charsArr.push({ key, val: val.value, id: val.id });
  });

  return (
    <div>
      {charsArr.map((item) => <CharacteristicItem key={item.id} name={item.key} val={item.val} />)}
    </div>
  );
};

export default CharacteristicsBreakdown;
