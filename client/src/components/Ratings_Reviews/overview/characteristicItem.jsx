import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 5px 0;
`;

const CharacteristicItem = ({ name, val }) => (
  <Container>
    <label htmlFor="characteristicItem">{name}</label>
    <br />
    <meter className="characteristicItem" min="0" max="5" value={Math.round(Number(val)).toString()} />
  </Container>
);

export default CharacteristicItem;
