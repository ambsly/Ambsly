import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import IndividualQuestion from './IndividualQuestion';

const Section = styled.div`
  display: block;
  margin-top: 10px;
`;

const QuestionSection = styled.div`
  display: block;
  margin-top: 10px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  border: solid 1px #8A9EA0;
  background-color: #FCFAF0;
  color: #8A9EA0;
`;

const QuestionsList = ({ questions }) => (
  <Section>
    <QuestionSection>
      {questions.map((question, index) => (
        <IndividualQuestion key={index} question={question} />
      ))}
    </QuestionSection>
    <Button>More Answered Questions</Button>
    <Button>Add a Question +</Button>
  </Section>
);

QuestionsList.defaultProps = {
  questions: [],
};

QuestionsList.propTypes = {
  questions: propTypes.arrayOf(propTypes.object),
};

export default QuestionsList;
