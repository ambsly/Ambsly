/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
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
  max-height: 75vh;
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

const QuestionsList = ({
  questions,
  refreshQ,
  productId,
  productName,
  setIsMoreQ,
  isMoreQ,
}) => {
  const [isOpenQ, setIsOpenQ] = useState(false);

  if (isOpenQ) {
    document.documentElement.style.overflow = 'clip';
  } else {
    document.documentElement.style.overflow = 'scroll';
  }
  return (
    <Section>
      <QuestionSection>
        {questions.map((question, index) => (
          <IndividualQuestion
            key={index}
            question={question}
            productName={productName}
            isOpenQ={isOpenQ}
          />
        ))}
      </QuestionSection>
      <Button onClick={() => {
        refreshQ(20);
        setIsMoreQ(true);
      }}
      >
        More Answered Questions
      </Button>
      <Button onClick={() => setIsOpenQ(true)}>Add a Question +</Button>
      <ModalQuestionForm
        open={isOpenQ}
        onClose={() => {
          setIsOpenQ(false);
          if (isMoreQ) {
            refreshQ(20);
          } else {
            refreshQ(4);
          }
        }}
        productId={productId}
        productName={productName}
      />
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
