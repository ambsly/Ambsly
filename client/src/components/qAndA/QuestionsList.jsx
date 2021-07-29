/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import IndividualQuestion from './IndividualQuestion';
import ModalQuestionForm from './ModalQuestionForm';

const Section = styled.div`
  display: block;
  margin-top: 10px;
`;

const QuestionSection = styled.div`
  display: block;
  margin-top: 10px;
  max-height: 80vh;
  overflow-y: auto;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  /* border: solid 1px #8A9EA0; */
  border: solid 1px;
  /* background-color: #FCFAF0; */
  /* color: #8A9EA0; */
  cursor: pointer;
`;

const QuestionsList = ({ questions }) => {
  const [isOpenQ, setIsOpenQ] = React.useState(false);

  return (
    <Section>
      <QuestionSection>
        {questions.map((question, index) => (
          <IndividualQuestion key={index} question={question} />
        ))}
      </QuestionSection>
      <Button>More Answered Questions</Button>
      <Button onClick={() => setIsOpenQ(true)}>Add a Question +</Button>
      <ModalQuestionForm open={isOpenQ} onClose={() => setIsOpenQ(false)} />
    </Section>
  );
};

QuestionsList.defaultProps = {
  questions: [],
};

QuestionsList.propTypes = {
  questions: propTypes.arrayOf(propTypes.object),
};

export default QuestionsList;
