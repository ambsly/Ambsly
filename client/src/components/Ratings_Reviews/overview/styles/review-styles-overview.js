import styled from 'styled-components';

/* CHARACTERISTIC-ITEM-STYLES */

export const Container = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CharLabel = styled.label`
  margin-bottom: 3px;
`;

export const CharBar = styled.progress`
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

/* CHARACTERISTICS-LIST-STYLES */

export const CharacteristicsList = styled.div`
  margin-bottom: 20px;
  border-top: 1px solid;
  border-color: rgb(238, 238, 238);
`;

/* REVIEW-OVERVIEW-STYLES */

export const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

export const RatingWrapper = styled.div`
  display: flex;
`;

export const Rating = styled.div`
  display: inline-block;
  font-size: xx-large;
  padding-right: 3px;
`;

export const Recommends = styled.div`
  font: small Georgia, serif;
  padding-bottom: 25px;
  margin-top: 15px;
  border-bottom: 1px solid rgb(238, 238, 238);
`;

/* STARLIST-STYLES */

export const StarList = styled.div`
  margin: 25px 0;
  width: 180px;
`;

export const StarItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 8px 0;
`;

export const StarGauge = styled.progress`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 60%;
  align-self: center;
  height: 5px;
  &::-webkit-progress-bar {
    background: rgb(238, 238, 238);
  }
  &::-webkit-progress-value {
  background-color: #195d92;
  }
`;