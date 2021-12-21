import styled from 'styled-components';

/* MODAL-STYLES */

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .7);
  z-Index: 1000;
`;

export const ModalForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: fixed;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -30%);
  z-Index: 1000;

  background-color: white;
  border: solid 2px black;
  border-radius: 5px;
  padding: 30px;
  width: 720px;
  min-width: 30%;
  max-width: 80%;
  min-height: 760px;
  height: auto;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Label = styled.label`
  display: block;
  margin-top: 20px;
`;

export const ReviewTitleInput = styled.input`
  overflow: hidden;
  text-align: left;
  padding: 5px 5px 5px 10px;
  margin: 8px 0 8px 0;
  width: 400px;
  font-size: 18px;
  border: 1px solid rgba(144, 164, 174, 0.8);
`;

export const Input = styled.input`
  overflow: hidden;
  text-align: left;
  padding: 5px 5px 5px 10px;
  margin: 8px 0 8px 0;
  border: 1px solid rgba(144, 164, 174, 0.8);
`;

export const SliderList = styled.div`
  margin: 20px 0;
`;

export const SliderItem = styled.div`
  display: inline-block;
  margin-right: 35px;
`;

export const SliderInput = styled.input`
  height: 2px;
  width: 100%;
  margin-bottom: 10px;
`;

export const SliderLabel = styled.label`
  display: block;
`;

export const RadioInput = styled.input`
  margin: 8px 25px 0px 6px;
`;

export const ReviewBody = styled.textarea`
  overflow: auto;
  padding: 5px 5px 5px 10px;
  margin: 8px 0 8px 0;
  height: 80px;
  width: 660px;
  min-width: 70%;
  border: 1px solid rgba(144, 164, 174, 0.8);
`;

export const CloseBtn = styled.button`
  width: 25px;
  padding: 2px;
  height: auto;
  align-self: flex-end;
  cursor: pointer;

  background: #fff;
  border: 1px solid rgba(144, 164, 174, 0.8);
  &:hover {
    transition: 0.4s;
    border: 1px solid #0c2d47;
    border-radius: 2px;
  }
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  height: 40px;
  width: 120px;

  background: #fff;
  border-color: #b2cfeb;
  color: #0c2d47;
  background-color: transparent !important;
  border-bottom-width: 2px;
  line-height: 2.6;
  text-transform: uppercase;

  &:hover {
    appearance: none;
    background: rgba(144, 164, 174, 0.8);
    border: 1px solid rgba(144, 164, 174, 0.8);
    border-radius: 0;
    cursor: pointer;
    height: 40px;
    width: 120px;
    letter-spacing: .25px;
    text-align: center;
    text-transform: uppercase;
    transition: .3s;
  }
`;

/* REVIEW-LIST-STYLES */

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px 20 px 20px;
  margin-left: 40px;
  width: 100%;
`;

export const ReviewSorter = styled.div`
  font-size: large;
  margin-bottom: 12px;
`;

export const List = styled.div`
  height: 579px;
  border-style: solid;
  border-width: 1px 0 1px 0;
  border-color: rgb(238, 238, 238);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0 60px 0;
`;

export const Button = styled.button`
  cursor: pointer;
  height: 40px;
  width: 140px;

  background: #fff;
  border-color: #b2cfeb;
  color: #0c2d47;
  background-color: transparent !important;
  border-bottom-width: 2px;
  border-left: 0;
  border-right: 0;
  border-top: 0;
  line-height: 2.6;
  text-transform: uppercase;

  &:hover {
    appearance: none;
    background: rgba(144, 164, 174, 0.8);
    border: 1px solid rgba(144, 164, 174, 0.8);
    border-radius: 0;
    cursor: pointer;
    height: 45px;
    width: 140px;
    letter-spacing: .25px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: .3s;
  }
`;

export const SelectFilter = styled.select`
  margin-left: 12px;
  width: 80px;
  height: auto;
`;

/* REVIEW-LIST-ITEM-STYLES */

export const ListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-style: solid;
  border-width: 1px 0 1px 0;
  border-color: rgb(238, 238, 238);
  margin-bottom: -1px;
  padding: 4px 16px 4px 16px;
  width: 700px;
  height: 280px;
`;

export const FirstLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0 4px 0;
`;

export const SecondLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Recommended = styled.div`
  font: small Georgia, serif;
`;

export const FourthLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
`;

export const UserWrapper = styled.div`
  color: #195d92;
`;

export const ReviewSummary = styled.div`
  font-size: 20;
  font-weight: bold;
`;

export const DateDisplay = styled.div`
  font-size: small;
`;

export let HelpfulBtn = styled.button`
  background-color: transparent;
  border-style: none;
  color: #195d92;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export let ReportBtn = styled.button`
  color: #195d92;
  background-color: transparent;
  border-style: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

/* TAG-LIST-STYLES */

export const TagListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 435px;
`;

/* TAG-ITEM-STYLES */

export const TagButton = styled.button`
  margin-top: 8px;
  margin-left: 5px;
  cursor: pointer;
  border: 1px solid rgba(144, 164, 174, 0.8);
  border-radius: 3px;
  background-color: transparent;
  line-height: 22px;
  &:hover {
    transition: 0.4s;
    border: 1px solid #0c2d47;
  }
`;