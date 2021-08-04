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

const Meterito = styled.meter`
  -webkit-appearance: none;
  --value: #74e474;
  background: rgb(238, 238, 238);
  /* border: 1px solid #CCC; */
  border-radius: 10px;
  width: 100%;
  position: relative;
  height: 6px;
  &::before {
    background: #74e474;
    content: "";
    height: 9px;
    position: absolute;
    left: ${(props) => props.barPosition}%;
    top: 50%;
    transform: translateY(-50%);
    width: 2px;
  }
  meter::-webkit-meter-bar {
    background-color: #74e474;
  }
`;

const positioner = (value) => Math.round(Number(value)) / 5 * 100;

const CharacteristicItem = ({ name, val }) => {
  const barPosition = positioner(val);
  return (
    <Container>
      <CharLabel htmlFor="characteristicItem">{name}</CharLabel>
      <Meterito className="characteristicItem" min="0" max="5" value={Math.round(Number(val)).toString()} barPosition={barPosition.toString()} />
    </Container>
  );
};

export default CharacteristicItem;
