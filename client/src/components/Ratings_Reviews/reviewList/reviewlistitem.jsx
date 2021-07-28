import React from 'react';
import styled from 'styled-components';
import SimpleDateTime  from 'react-simple-timestamp-to-date';

// onclick
// increment or decrement item.helpful
// change contents to say 'thank you for your response.'
const HelpfulBtn = styled.button`
  color: blue;
  background-color: transparent;
  border-radius: 4px;
`;

const ReportBtn = styled.button`
  color: blue;
  background-color: transparent;
  border-radius: 4px;
`;

const ReviewListItem = ({ item }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <span>★★★★</span>
      <span>
        {item.reviewer_name}
        {', '}
        {formatDate(item.date)}
      </span>
      <div style={{"fontSize": 16, "fontWeight": "bold" }}>{item.summary}</div>
      <p>
        {item.body}
      </p>
      <span>Was this review helpful?</span>
      {/* <span>
        <a href="helpful.com">Yes</a>
      </span> */}
      <HelpfulBtn>
        Yes
      </HelpfulBtn>
      <HelpfulBtn>
        No
      </HelpfulBtn>
      <span>{item.helpfulness}</span>
      <ReportBtn>
        Report
      </ReportBtn>
    </div>

  );
}

export default ReviewListItem;
