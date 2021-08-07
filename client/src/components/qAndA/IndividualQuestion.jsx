/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import styled from 'styled-components';
import QuestionFooter from './QuestionFooter';
import IndividualAnswer from './IndividualAnswer';

const QuestionBodyAndQuestionFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const QuestionBody = styled.div`
  margin: 10px;
  /* color: #8a9ea0; */
  font-weight: 700;
`;

const EntireAnswerSection = styled.div`
  display: block;
`;

const AnswerSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const A = styled.div`
  flex: 1;
  margin: 10px 0 0 10px;
  /* color: #8a9ea0; */
  font-weight: 700;
`;

const AnswerBodyAndAnswerFooter = styled.div`
  flex: 49;
  /* color: #8a9ea0; */
  font-weight: 400;
`;

const BorderlessButton = styled.button`
  border: none;
  margin: 10px;
  /* color: #B5B2B0; */
  cursor: pointer;
`;

const IndividualQuestion = ({ question, productName, isOpenQ }) => {
  const [answers, setAnswers] = useState([]);
  const [currentAnswers, setCurrentAnswers] = useState([]);
  const [isMoreA, setIsMoreA] = useState(false);
  const [errorState, setErrorState] = useState(false);

  const fetchAnswers = () => {
    axios
      .get('/qa/questions/:question_id/answers', {
        params: {
          question_id: question.question_id,
          count: 10,
        },
      })
      .then(({ data }) => {
        // Set answers
        setAnswers(data);
      })
      .catch((err) => {
        console.error(err);
        setErrorState(true);
      });
  };

  const filterAnswers = (answersData) => {
    const sellerAnswers = answersData.filter(
      (answer) => answer.answerer_name.toLowerCase() === 'seller',
    );
    const customerAnswers = answersData.filter(
      (answer) => answer.answerer_name.toLowerCase() !== 'seller',
    );
    customerAnswers.sort(customerAnswers.helpfulness);
    const sortedAnswers = sellerAnswers.concat(customerAnswers);
    if (isMoreA) {
      setCurrentAnswers(sortedAnswers);
    } else {
      setCurrentAnswers(sortedAnswers.slice(0, 2));
    }
  };

  useEffect(() => fetchAnswers(), []);

  useEffect(() => {
    // Filter answers and set current answers
    filterAnswers(answers);
  }, [answers]);

  const refreshA = () => {
    fetchAnswers();
  };

  useEffect(refreshA, [question]);

  useEffect(() => filterAnswers(answers), [isMoreA]);

  const seeMoreOrLessA = () => {
    let buttonMsg = '';
    let setButtonBool = true;
    if (!isMoreA) {
      buttonMsg = 'See more answers';
      setButtonBool = true;
    } else if (isMoreA) {
      buttonMsg = 'Collapse answers';
      setButtonBool = false;
    }
    return answers.length > 2 ? (
      <BorderlessButton onClick={() => setIsMoreA(setButtonBool)}>{buttonMsg}</BorderlessButton>
    ) : (
      <></>
    );
  };

  return (
    <div>
      <QuestionBodyAndQuestionFooter>
        <QuestionBody key={question.question_id}>
          {`Q: ${question.question_body}`}
        </QuestionBody>
        <QuestionFooter
          question={question}
          refreshA={refreshA}
          productName={productName}
          isOpenQ={isOpenQ}
        />
      </QuestionBodyAndQuestionFooter>
      {errorState ? <div style={{ margin: '20px' }}>An error has occurred</div> :
      <EntireAnswerSection>
        <AnswerSection>
          {answers.length > 0 && <A>A:&nbsp;</A>}
          {answers.length > 0 && (
          <AnswerBodyAndAnswerFooter>
            {currentAnswers.map((answer, index) => (
              <IndividualAnswer
                key={index}
                answer={answer}
                refreshA={refreshA}
              />
            ))}
          </AnswerBodyAndAnswerFooter>
          )}
        </AnswerSection>
        {seeMoreOrLessA()}
      </EntireAnswerSection>}
    </div>
  );
};

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
