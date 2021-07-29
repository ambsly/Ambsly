import React from 'react';
import styled from 'styled-components';
import SimpleDateTime  from 'react-simple-timestamp-to-date';

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

// onclick
// increment or decrement item.helpful
// change contents to say 'thank you for your response.'
const HelpfulBtn = styled.button`
  background-color: transparent;
  border-style: none;
  color: blue;
  cursor: pointer;
  /* margin: 8px; */
`;

const ReportBtn = styled.button`
  color: blue;
  background-color: transparent;
  border-radius: 4px;
  border-style: none;
  cursor: pointer;
  /* margin-left: 28px; */
`;

const ReviewListItem = ({ item }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Container>
      <FirstLineWrapper>
        <div>★★★★</div>
        <div>{item.reviewer_name}</div>
      </FirstLineWrapper>
      <SecondLineWrapper>
        <ReviewSummary>{item.summary}</ReviewSummary>
        <div>{formatDate(item.date)}</div>
      </SecondLineWrapper>
      <p>
        {item.body}
      </p>
      <ThirdLineWrapper>
        <div>
          Was this review helpful?
          <HelpfulBtn>
            Yes {`  (${item.helpfulness})`}
          </HelpfulBtn>
        </div>
        <ReportBtn>
          Report
        </ReportBtn>
      </ThirdLineWrapper>
    </Container>

  );
}

export default ReviewListItem;
