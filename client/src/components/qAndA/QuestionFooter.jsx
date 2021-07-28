import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const FooterSection = styled.div`
  display: flex;
  align-items: flex-start;
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

export default QuestionFooter;
