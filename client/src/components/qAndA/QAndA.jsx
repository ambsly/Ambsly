import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import QuestionsList from './QuestionsList';

const Title = styled.span`
  /* display: flex; */
  margin: 10px;
  padding: 10px;
  color: #FCFAF0;
  background-color: #99B0B0;
`;

const Section = styled.div`
  display: flex;
  margin-top: 10px;
`;

const SearchBar = styled.input`
  display: flex;
  margin: 10px;
  padding: 10px;
  width: 100vw;
  border: solid 1px #8A9EA0;
  background-color: #FCFAF0;
  color: #B5B2B0;
`;

const QAndA = () => {
  const [questions, setQuestions] = React.useState([]);
  const [text, setText] = React.useState('');

  React.useEffect(() => {
    axios.get(`/qa/questions?product_id=${28010}`)
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <Title>QUESTIONS &amp; ANSWERS</Title>
      <Section>
        <SearchBar type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
      </Section>
      <QuestionsList questions={questions} />
    </div>
  );
};

export default QAndA;
