import React from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import styled from 'styled-components';
import AnswerFooter from './AnswerFooter';

const AnswerSection = styled.div`
  display: block;
  margin-top: 10px;
  /* color: #8a9ea0; */
  font-weight: 400;
`;

const IndividualAnswer = ({ answer }) => (
  <AnswerSection>
    {`${answer.body}`}
    <AnswerFooter answer={answer} />
  </AnswerSection>
);

export default IndividualAnswer;
