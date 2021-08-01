/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import IndividualQuestion from './IndividualQuestion';
import ModalQuestionForm from './ModalQuestionForm';

const Section = styled.div`
  display: block;
  margin-top: 10px;
`;

const QuestionSection = styled.div`
  display: block;
  margin-top: 10px;
  max-height: 80vh;
  overflow-y: auto;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  /* border: solid 1px #8A9EA0; */
  border: solid 1px;
  /* background-color: #FCFAF0; */
  /* color: #8A9EA0; */
  cursor: pointer;
`;

const QuestionsList = ({
  questions,
  searchText,
  refreshQ,
  productId,
  productName,
}) => {
  const [isOpenQ, setIsOpenQ] = React.useState(false);
  const [currentQs, setCurrentQs] = React.useState([...questions]);
  // console.log('currentQs', currentQs);
  // React.useEffect(() => {
  //   if (searchText.length >= 3) {
  //     const filteredQs = questions.filter((question) => {
  //       const qBody = question.question_body.toLowerCase();
  //       return qBody.includes(searchText.toLowerCase());
  //     });
  //     setCurrentQs(filteredQs);
  //   }
  //   if (searchText.length < 3) {
  //     setCurrentQs(questions);
  //   }
  // }, [searchText]);
  return (
    <Section>
      <QuestionSection>
        {questions.map((question, index) => (
          <IndividualQuestion
            key={index}
            question={question}
            productName={productName}
          />
        ))}
      </QuestionSection>
      <Button onClick={() => refreshQ(100)}>More Answered Questions</Button>
      <Button onClick={() => setIsOpenQ(true)}>Add a Question +</Button>
      <ModalQuestionForm
        open={isOpenQ}
        onClose={() => {
          setIsOpenQ(false);
          refreshQ(4);
        }}
        productId={productId}
        productName={productName}
      />
    </Section>
  );
};

QuestionsList.defaultProps = {
  questions: [],
  searchText: '',
};

QuestionsList.propTypes = {
  questions: propTypes.arrayOf(propTypes.object),
  searchText: propTypes.string,
};

export default QuestionsList;
