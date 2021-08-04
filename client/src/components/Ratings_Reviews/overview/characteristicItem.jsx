import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px 0;
`;

const CharLabel = styled.label`
  align-self: center;
  margin-bottom: 10px;
`;

const Meterito = styled.meter`
  width: 100%;
  position: relative;
  height: 9px;
`;

const CharacteristicItem = ({ name, val }) => (
  <Container>
    <CharLabel htmlFor="characteristicItem">{name}</CharLabel>
    <Meterito className="characteristicItem" min="0" max="5" value={Math.round(Number(val)).toString()} />
  </Container>
);

export default CharacteristicItem;
