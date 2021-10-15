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

const Recommended = styled.div`
  font: small Georgia, serif;
`;

const FourthLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
`;

const UserWrapper = styled.div`
  color: #195d92;
`;

const ReviewSummary = styled.div`
  font-size: 20;
  font-weight: bold;
`;

const DateDisplay = styled.div`
  font-size: small;
`;

let HelpfulBtn = styled.button`
  background-color: transparent;
  border-style: none;
  color: #195d92;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

let ReportBtn = styled.button`
  color: #195d92;
  background-color: transparent;
  border-style: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
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
        .then(() => {
          HelpfulBtn = styled.span`
            margin-left: 7px;
            font-size: small;
          `;
          setHelpfulContents('Thank you for your response.');
        })
        .catch((err) => {
          throw new Error(err);
        });
    }
  };

  const report = () => {
    if (reportBtnContents === 'Report') {
      axios.put(`/reviews/${item.review_id}/report`)
        .then(() => {
          ReportBtn = styled.span`
            margin-left: 7px;
            font-size: small;
          `;
          setReportContents('Reported Successfully');
        })
        .catch((err) => {
          throw new Error(err);
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
      <div>
        <p>
          {item.body}
        </p>
        <Recommended>
          {item.recommend ? 'User Recommended ✓' : ''}
        </Recommended>
      </div>
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
