import React from 'react';
import _ from 'underscore';
import CharacteristicItem from './characteristicItem.jsx';

const CharacteristicsBreakdown = ({ characteristics }) => {
  const charsArr = [];
  _.each(characteristics, (val, key) => {
    charsArr.push({ key, val: val.value });
  });
  const list = charsArr.map((item) => <CharacteristicItem name={item.key} val={item.val} />);

  return (
    <div>
      {/* <div>Size</div>
      <div>-------v----------</div>
      <div>Comfort</div>
      <div>-------------v----</div> */}
      {list}
    </div>
  );
};

export default CharacteristicsBreakdown;
