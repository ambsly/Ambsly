import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  border: solid 1px #8A9EA0;
  background-color: #FCFAF0;
  color: #8A9EA0;
`;

const QuestionsList = (props) => {
  console.log('props', props.questions);

  return (
    <Section>
      <Button>More Answered Questions</Button>
      <Button>Add a Question +</Button>
    </Section>
  );
};

export default QuestionsList;
