import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

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

const AnswerFooter = ({ answer }) => {
  const formatDate = (string) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([], options);
  };

  return (
    <FooterSection>
      {`by ${answer.answerer_name}, ${formatDate(answer.date)} | Helpful?`}
      &nbsp;
      <Span>Yes</Span>
      &nbsp;
      {'(25) |'}
      &nbsp;
      <Span>Report</Span>
    </FooterSection>
  );
};

AnswerFooter.defaultProps = {
  answer: [],
};

AnswerFooter.propTypes = {
  answer: propTypes.arrayOf({
    answer_id: propTypes.number,
    answerer_name: propTypes.string,
    body: propTypes.string,
    date: propTypes.string,
    helpfulness: propTypes.number,
    photos: propTypes.array,
  }),
};

export default AnswerFooter;
