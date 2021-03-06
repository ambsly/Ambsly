/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import ModalAnswerForm from './ModalAnswerForm';

const FooterSection = styled.div`
  margin: 10px;
  font-family: arial;
  font-size: small;
  color: #B5B2B0;
`;

const Span = styled.span`
  color: #B5B2B0;
  text-decoration: underline;
  cursor: pointer;
  border: none;
  background-color: none;
`;

const QuestionFooter = ({
  question, refreshAnswers, productName, isOpenQ,
}) => {
  const [isOpenA, setIsOpenA] = useState(false);
  const [qHelpfulScore, setQHelpfulScore] = useState(question.question_helpfulness);
  const markQHelpful = () => {
    axios.put('/qa/questions/:question_id/helpful', {
      question_id: question.question_id,
    })
      .then((response) => {
        if (response.status === 204) {
          setQHelpfulScore(qHelpfulScore + 1);
        }
      })
      .catch((err) => console.error(err));
  };
  if (isOpenA || isOpenQ) {
    document.documentElement.style.overflow = 'clip';
  } else {
    document.documentElement.style.overflow = 'scroll';
  }
  return (
    <FooterSection>
      Helpful?
      &nbsp;
      <Span onClick={() => markQHelpful()}>Yes</Span>
      &nbsp;
      {`(${qHelpfulScore}) |`}
      &nbsp;
      <Span onClick={() => setIsOpenA(true)}>Add Answer</Span>
      <ModalAnswerForm
        open={isOpenA}
        onClose={() => {
          setIsOpenA(false);
          refreshAnswers(2);
        }}
        question={question}
        refreshAnswers={refreshAnswers}
        productName={productName}
      />
    </FooterSection>
  );
};

QuestionFooter.defaultProps = {
  question: {},
};

QuestionFooter.propTypes = {
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

export default QuestionFooter;
