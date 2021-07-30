/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import AnswerFooter from './AnswerFooter';

const AnswerSection = styled.div`
  display: block;
  margin-top: 10px;
  /* color: #8a9ea0; */
  font-weight: 400;
`;

const IndividualAnswer = ({ answer, refreshA }) => (
  <AnswerSection>
    {`${answer.body}`}
    <AnswerFooter answer={answer} refreshA={refreshA} />
  </AnswerSection>
);

export default IndividualAnswer;
