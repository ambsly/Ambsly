import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// import propTypes from 'prop-types';
import { ProductsContext } from '../globalState';
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

const QAndA = () => {
  const [questions, setQuestions] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredQs, setFilteredQs] = useState([]);
  const [product] = useContext(ProductsContext);
  const [productId, setProductId] = useState(product.currentItemId);
  const [productName, setProductName] = useState('');
  const [isMoreQ, setIsMoreQ] = useState(false);

  useEffect(() => {
    // Get product
    axios
      .get(`/products?product_id=${productId}`)
      .then((res) => {
        console.log('res.data now', res.data);
        setProductId(res.data[4].id);
        setProductName(res.data[4].name);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    // Get questions list
    axios
      .get(`/qa/questions?product_id=${productId}&count=20`)
      .then((res) => {
        setQuestions(res.data);
        setFilteredQs(res.data.slice(0, 4));
      })
      .catch((err) => {
        console.error(err);
      });
  }, [productName]);

  useEffect(() => setFilteredQs(questions), [isMoreQ]);

  const filterQuestions = () => {
    if (searchText.length >= 3) {
      setFilteredQs(questions.filter((question) => {
        const qBody = question.question_body.toLowerCase();
        return qBody.includes(searchText.toLowerCase());
      }));
    } else if (isMoreQ) {
      setFilteredQs(questions);
    } else {
      setFilteredQs(questions.slice(0, 4));
    }
  };

  useEffect(() => {
    // Filter questions whenever searchText or questions are changed
    // filterQuestions();
    // Prevent sending requests too quickly
    setTimeout(filterQuestions, 300);
  }, [searchText, questions]);

  const refreshQ = (count) => {
    axios
      .get(`/qa/questions?product_id=${productId}&count=${count}`)
      .then((res) => {
        // api returns already sorted by helpfulness?
        setQuestions(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
      <QuestionsList
        questions={filteredQs}
        searchText={searchText}
        refreshQ={refreshQ}
        productId={productId}
        productName={productName}
        isMoreQ={isMoreQ}
        setIsMoreQ={setIsMoreQ}
      />
    </QAndAModule>
  );
};

// QAndA.defaultProps = {
//   productId: propTypes.number,
// };

// QAndA.propTypes = {
//   productId: propTypes.number,
// };

export default QAndA;
