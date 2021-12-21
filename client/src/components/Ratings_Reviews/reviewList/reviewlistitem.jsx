import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import { User } from '@styled-icons/boxicons-regular/User';
import { ListItemContainer, FirstLineWrapper, SecondLineWrapper, FourthLineWrapper, ReviewSummary, DateDisplay, Recommended, UserWrapper, HelpfulBtn, ReportBtn } from './styles/reviewListStyles';

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
    <ListItemContainer>
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
    </ListItemContainer>
  );
};

export default ReviewListItem;
