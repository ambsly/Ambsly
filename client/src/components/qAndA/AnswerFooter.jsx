/* eslint-disable react/prop-types */
import React from 'react';
// import propTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';

const FooterSection = styled.div`
  /* display: flex;
  align-items: flex-start; */
  display: block;
  margin: 10px;
  font-family: arial;
  font-size: small;
  color: #B5B2B0;
`;

const Span = styled.span`
  color: #B5B2B0;
  text-decoration: underline;
  cursor: pointer;
`;

const AnswerFooter = ({ answer, refreshA }) => {
  const [aHelpfulScore, setAHelpfulScore] = React.useState(answer.helpfulness);
  const formatDate = (string) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([], options);
  };
  const markAHelpful = () => {
    axios.put('/qa/answers/:answer_id/helpful', {
      answer_id: answer.answer_id,
    })
      .then((response) => {
        if (response.status === 204) {
          setAHelpfulScore(aHelpfulScore + 1);
        }
      })
      .catch((err) => console.error(err));
  };
  const reportA = () => {
    axios.put('/qa/answers/:answer_id/report', {
      answer_id: answer.answer_id,
    })
      .then((response) => {
        if (response.status === 204) {
          refreshA();
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <FooterSection>
      {`by ${answer.answerer_name}, ${formatDate(answer.date)} | Helpful?`}
      &nbsp;
      <Span onClick={() => markAHelpful()}>Yes</Span>
      &nbsp;
      {`(${aHelpfulScore}) |`}
      &nbsp;
      <Span onClick={() => reportA()}>Report</Span>
    </FooterSection>
  );
};

// AnswerFooter.defaultProps = {
//   answer: [],
// };

// AnswerFooter.propTypes = {
//   answer: propTypes.arrayOf({
//     answer_id: propTypes.number,
//     answerer_name: propTypes.string,
//     body: propTypes.string,
//     date: propTypes.string,
//     helpfulness: propTypes.number,
//     photos: propTypes.array,
//   }),
// };

export default AnswerFooter;
