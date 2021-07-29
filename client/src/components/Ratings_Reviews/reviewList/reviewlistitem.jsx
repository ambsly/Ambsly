import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  border-style: solid;
  border-width: 1px 0 1px 0;
  margin: 1px;
  padding: 4px 16px 4px 16px;
  width: 700px;
`;

const FirstLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
`;

const SecondLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ThirdLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
`;

const ReviewSummary = styled.div`
  font-size: 20;
  font-weight: bold;
`;

const DateDisplay = styled.div`
  font-size: small;
`;

// onclick
// increment or decrement item.helpful
// change contents to say 'thank you for your response.'
let HelpfulBtn = styled.button`
  background-color: transparent;
  border-style: none;
  color: blue;
  cursor: pointer;
`;

let ReportBtn = styled.button`
  color: blue;
  background-color: transparent;
  border-style: none;
  cursor: pointer;
  /* margin-left: 28px; */
`;

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};


const ReviewListItem = ({ item }) => {
  const [helpfulBtnContents, setHelpful] = useState(`Yes  (${item.helpfulness})`);
  const [reportBtnContents, setReport] = useState('Report');

  const markHelpful = () => {
    axios.put(`/reviews/${item.review_id}/helpful`)
      .then((result) => {
        HelpfulBtn = styled.span`
          margin-left: 7px;
          font-size: small;
        `;
        setHelpful('Thank you for your response.');
      })
      .catch((err) => {
        console.log('err');
      });
  };

  const report = () => {
    axios.put(`/reviews/${item.review_id}/report`)
      .then((result) => {
        ReportBtn = styled.span`
          margin-left: 7px;
          font-size: small;
        `;
        setReport('Reported Successfully');
      })
      .catch((err) => {
        console.log('err');
      });
  };

  return (
    <Container>
      <FirstLineWrapper>
        <div>★★★★</div>
        <div>{item.reviewer_name}</div>
      </FirstLineWrapper>
      <SecondLineWrapper>
        <ReviewSummary>{item.summary}</ReviewSummary>
        <DateDisplay>{formatDate(item.date)}</DateDisplay>
      </SecondLineWrapper>
      <p>
        {item.body}
      </p>
      <ThirdLineWrapper>
        <div>
          Was this review helpful?
          <HelpfulBtn onClick={markHelpful}>
            {helpfulBtnContents}
          </HelpfulBtn>
        </div>
        <ReportBtn onClick={report}>
          {reportBtnContents}
        </ReportBtn>
      </ThirdLineWrapper>
    </Container>
  );
};

export default ReviewListItem;
