import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CharLabel = styled.label`
  /* align-self: center; */
  margin-bottom: 3px;
`;

const Bar = styled.progress`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  position: relative;
  height: 4px;
  &::before {
    background: #195d92;
    content: "";
    height: 6px;
    position: absolute;
    left: ${(props) => props.barPosition}%;
    top: 50%;
    transform: translateY(-50%);
    width: 2px;
  }
  &::-webkit-progress-bar {
    background: rgb(238, 238, 238);
  }
  &::-webkit-progress-value {
  background-color: #195d92;
}
`;

const positioner = (value) => Math.round(Number(value)) / 5 * 100;

const CharacteristicItem = ({ name, val }) => {
  const barPosition = positioner(val);
  return (
    <Container>
      <CharLabel htmlFor="characteristicItem">{name}</CharLabel>
      <Bar className="characteristicItem" min="0" max="5" value={Math.round(Number(val)).toString()} barPosition={barPosition.toString()} />
    </Container>
  );
};

export default CharacteristicItem;
