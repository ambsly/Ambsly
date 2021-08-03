/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
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
  const [answers, setAnswers] = React.useState([]);

  const filterAnswers = (answers) => {
    const sellerAnswers = answers.filter(
      (answer) => answer.answerer_name.toLowerCase() === 'seller',
    );
    const customerAnswers = answers.filter(
      (answer) => answer.answerer_name.toLowerCase() !== 'seller',
    );
    customerAnswers.sort(customerAnswers.helpfulness);
    const sortedAnswers = sellerAnswers.concat(customerAnswers);
    setAnswers(sortedAnswers);
  };

  React.useEffect(() => {
    axios
      .get('/qa/questions/:question_id/answers', {
        params: {
          question_id: question.question_id,
          count: 2,
        },
      })
      .then((res) => {
        // Filter answers and set answers
        filterAnswers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const refreshA = (count) => {
    axios
      .get('/qa/questions/:question_id/answers', {
        params: {
          question_id: question.question_id,
          count,
        },
      })
      .then((res) => {
        // Filter answers and set answers
        filterAnswers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
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
      <EntireAnswerSection>
        <AnswerSection>
          {answers.length > 0 && <A>A:&nbsp;</A>}
          {answers.length > 0 && (
            <AnswerBodyAndAnswerFooter>
              {answers.map((answer, index) => (
                <IndividualAnswer
                  key={index}
                  answer={answer}
                  refreshA={refreshA}
                />
              ))}
            </AnswerBodyAndAnswerFooter>
          )}
        </AnswerSection>
        {answers.length > 2 ? (
          <BorderlessButton onClick={() => refreshA(2)}>Collapse answers</BorderlessButton>
        ) : (
          <BorderlessButton onClick={() => refreshA(100)}>
            See more answers
          </BorderlessButton>
        )}
      </EntireAnswerSection>
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
