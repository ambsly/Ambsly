import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import { User } from '@styled-icons/boxicons-regular/User';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-style: solid;
  border-width: 1px 0 1px 0;
  border-color: rgb(238, 238, 238);
  margin-bottom: -1px;
  padding: 4px 16px 4px 16px;
  width: 700px;
  height: 280px;
`;

const FirstLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0 4px 0;
`;

const SecondLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ThirdLineWrapper = styled.div`
  /* display: flex;
  justify-content: space-between; */
`;

const Recommended = styled.div`
  font: small Georgia, serif;
  /* font-size: small;
  font-family: Georgia; */
`;

const FourthLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
`;

const UserWrapper = styled.div`
  color: blue;
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
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const ReviewListItem = ({ item }) => {
  const [helpfulBtnContents, setHelpfulContents] = useState(`Yes  (${item.helpfulness})`);
  const [reportBtnContents, setReportContents] = useState('Report');

  const markHelpful = () => {
    if (helpfulBtnContents === `Yes  (${item.helpfulness})`) {
      axios.put(`/reviews/${item.review_id}/helpful`)
        .then((result) => {
          HelpfulBtn = styled.span`
            margin-left: 7px;
            font-size: small;
          `;
          setHelpfulContents('Thank you for your response.');
        })
        .catch((err) => {
          console.log('err');
        });
    }
  };

  const report = () => {
    if (reportBtnContents === 'Report') {
      axios.put(`/reviews/${item.review_id}/report`)
        .then((result) => {
          ReportBtn = styled.span`
            margin-left: 7px;
            font-size: small;
          `;
          setReportContents('Reported Successfully');
        })
        .catch((err) => {
          console.log('err');
        });
    }
  };

  return (
    <Container>
      <div>
        <FirstLineWrapper>
          <StarRatings
            rating={item.rating}
            starRatedColor="gold"
            starDimension="15px"
            starSpacing="0"
            numberOfStars={5}
            name="rating"
          />
          <UserWrapper>
            <User size="20" style={{marginBottom: '8px', marginRight: '5px'}}/>
            {' '}
            {item.reviewer_name}
          </UserWrapper>
        </FirstLineWrapper>
        <SecondLineWrapper>
          <ReviewSummary>{item.summary}</ReviewSummary>
          <DateDisplay>{formatDate(item.date)}</DateDisplay>
        </SecondLineWrapper>
      </div>
      <ThirdLineWrapper>
        <p>
          {item.body}
        </p>
        <Recommended>
          {item.recommend ? 'User Recommended ✓' : ''}
        </Recommended>
      </ThirdLineWrapper>
      <FourthLineWrapper>
        <div>
          Was this review helpful?
          <HelpfulBtn onClick={markHelpful}>
            {helpfulBtnContents}
          </HelpfulBtn>
        </div>
        <ReportBtn onClick={report}>
          {reportBtnContents}
        </ReportBtn>
      </FourthLineWrapper>
    </Container>
  );
};

export default ReviewListItem;
