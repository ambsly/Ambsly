/* eslint-disable react/forbid-prop-types */
import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const FooterSection = styled.div`
  margin: 10px;
  font-family: arial;
  font-size: small;
  color: #B5B2B0;
`;

const Link = styled.a`
  color: #B5B2B0;
`;

const QuestionFooter = ({ question }) => (
  <FooterSection>
    {'Helpful?'}
    &nbsp;
    <Link href="about:blank">Yes</Link>
    &nbsp;
    {'(25) |'}
    &nbsp;
    <Link href="about:blank">Add Answer</Link>
  </FooterSection>
);

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
