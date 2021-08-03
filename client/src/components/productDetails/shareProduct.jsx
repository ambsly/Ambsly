import React, { useState } from 'react';
import styled from 'styled-components';
import { Facebook } from '@styled-icons/fa-brands/Facebook';
import { Twitter } from '@styled-icons/fa-brands/Twitter';
import { Pinterest } from '@styled-icons/fa-brands/Pinterest';

const Container = styled.div`
margin-left: 25px;
margin-bottom: 25px;
transition: 0.6s;
border-radius: 50%;
background-color: rgba(144, 164, 174, 0.2);
width: 40px;
height: 40px;
white-space: nowrap;
text-align: center;

 &:hover {
  width: 250px;
  border-radius: 0;
  background-color: rgba(144, 164, 174);
 }
`;

const Share = styled.span`
display: inline-block;
font-size: 12px;
margin-left: 3px;
margin-top: 12.5px;
`;

const Icon = styled.span`
display: inline-block;
margin-right: 20px;
margin-left: 20px;
cursor: pointer;
color: white;
`;

const ShareProduct = () => {

  const [expandStyle, setExpanded] = useState([false, { color: "rgba(144,164,174)" }]);

  const isExpanded = () => {
    if (!expandStyle[0]) {
      setExpanded([true, { color: "rgba(255,255,255)" }])
    } else {
      setExpanded([false, { color: "rgba(144,164,174)" }])
    }
  }

  return (
    <Container
      onMouseEnter={isExpanded}
      onMouseLeave={isExpanded}
    >
      <Share
        style={expandStyle[1]}
      ><b>Share</b> </Share>
      <Icon>
        <Facebook size="24" />
      </Icon>
      <Icon>
        <Twitter size="24" />
      </Icon>
      <Icon>
        <Pinterest size="24" />
      </Icon>
    </Container>
  );
};

export default ShareProduct;
