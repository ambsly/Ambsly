/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import styled from 'styled-components';
import QuestionFooter from './QuestionFooter';
import IndividualAnswer from './IndividualAnswer';

const Block = styled.div`
  display: flex;
  justify-content: space-between;
`;

const QuestionSection = styled.div`
  display: block;
  margin: 10px;
  color: #8a9ea0;
  font-weight: 700;
`;

const AnswerSection = styled.div`
  display: block;
  margin-top: 10px;
  color: #8a9ea0;
  font-weight: 400;
`;

const IndividualQuestion = ({ question }) => {
  const [answers, setAnswers] = React.useState([]);

  React.useEffect(() => {
    axios.get('/qa/questions/:question_id/answers', {
      params: {
        question_id: question.question_id,
      },
    })
      .then((res) => {
        console.log('answers', res.data);
        setAnswers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Block>
      <QuestionSection key={question.question_id}>
        {`Q: ${question.question_body}`}
        <AnswerSection>
          A:
          &nbsp;
        </AnswerSection>
      </QuestionSection>
      <QuestionFooter />
    </Block>
  )
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
