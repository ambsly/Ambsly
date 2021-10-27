import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CharLabel = styled.label`
  margin-bottom: 3px;
`;

export const Bar = styled.progress`
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
