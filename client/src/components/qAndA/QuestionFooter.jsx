/* eslint-disable react/forbid-prop-types */
import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
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
`;

const QuestionFooter = ({ question }) => {
  const [isOpenA, setIsOpenA] = React.useState(false);
  return (
    <FooterSection>
      {'Helpful?'}
      &nbsp;
      <Span>Yes</Span>
      &nbsp;
      {'(25) |'}
      &nbsp;
      <Span onClick={() => setIsOpenA(true)}>Add Answer</Span>
      <ModalAnswerForm open={isOpenA} onClose={() => setIsOpenA(false)} />
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
