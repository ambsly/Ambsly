import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import propTypes from 'prop-types';
import QuestionsList from './QuestionsList';

const QAndAModule = styled.div`
  width: 1000px;
  margin: 50px auto;
`;

const Title = styled.span`
  font-size: 24px;
  margin: 10px;
  padding: 10px;
  /* color: #FCFAF0; */
  /* background-color: #99B0B0; */
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
  /* border: solid 1px #8A9EA0; */
  border: solid 1px;
  /* background-color: #FCFAF0; */
  /* color: #B5B2B0; */
`;

const QAndA = ({ productId }) => {
  const [questions, setQuestions] = React.useState([]);
  const [searchText, setSearchText] = React.useState('');

  React.useEffect(() => {
    axios
      .get(`/qa/questions?product_id=${28010}`)
      .then((res) => {
        // api returns already sorted by helpfulness?
        setQuestions(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <QAndAModule>
      <Title>Questions &amp; Answers</Title>
      <Section>
        <SearchBar
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Have a question? Search for answers..."
        />
      </Section>
      <QuestionsList questions={questions} searchText={searchText} />
    </QAndAModule>
  );
};

QAndA.defaultProps = {
  productId: propTypes.number,
};

QAndA.propTypes = {
  productId: propTypes.number,
};

export default QAndA;
