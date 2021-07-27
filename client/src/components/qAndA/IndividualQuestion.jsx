/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const QuestionSection = styled.div`
  display: block;
  margin: 10px;
  color: #8A9EA0;
  font-weight: 700;
`;

const IndividualQuestion = ({ question }) => (
  <QuestionSection key={question.question_id}>
    {`Q: ${question.question_body}`}
  </QuestionSection>
);

IndividualQuestion.defaultProps = {
  question: {},
};

IndividualQuestion.propTypes = {
  question: propTypes.shape({
    answers: propTypes.object,
    asker_name: propTypes.string,
    question_body: propTypes.string,
    question_date: propTypes.string,
    question_helpfulness: propTypes.number,
    quesiton_id: propTypes.number,
    reported: propTypes.bool,
  }),
};

export default IndividualQuestion;
