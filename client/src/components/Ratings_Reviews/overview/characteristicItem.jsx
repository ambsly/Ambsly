import React from 'react';

const CharacteristicItem = ({ name, val }) => (
  <div>
    <label htmlFor="characteristicItem">{name}</label>
    <br />
    <meter className="characteristicItem" min="0" max="5" value={Math.round(Number(val)).toString()} />
  </div>
);

export default CharacteristicItem;
