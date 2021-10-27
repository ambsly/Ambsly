import React from 'react';
import { Container, CharLabel, Bar } from './styles/reviewOverviewStyles';

const CharacteristicItem = ({ name, val }) => {
  const barPosition = Math.round(Number(val)) / 5 * 100;
  return (
    <Container>
      <CharLabel htmlFor="characteristicItem">{name}</CharLabel>
      <Bar className="characteristicItem" min="0" max="5" value={Math.round(Number(val)).toString()} barPosition={barPosition.toString()} />
    </Container>
  );
};

export default CharacteristicItem;
