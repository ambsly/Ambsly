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
display: flex;
align-items: center;

 &:hover {
  width: 250px;
  padding-left: 25px;
  border-radius: 0;
  background-color: rgba(144, 164, 174);
 }
`;

const Content = styled.div`
display: flex;
vertical-align: middle;
align-items: center;
`;

const Share = styled.div`
// display: inline-block;
// position: relative;
align-items: center;
font-size: 12px;
margin-left: 3px;
`;

const Icon = styled.span`
// display: inline-block;
position: relative;
align-items: center;
margin-right: 20px;
margin-left: 20px;
cursor: pointer;
color: white;
// display: table-cell;
// vertical-align: middle;
`;

const ShareProduct = () => {

  const [expandStyle, setExpanded] = useState([false, { color: "rgba(144,164,174)" }]);

  const isExpanded = () => {
    expandStyle[0] ?
      setExpanded([false, { color: "rgba(144,164,174)" }]) : setExpanded([true, { color: "rgba(255,255,255)" }]);

    // if (!expandStyle[0]) {
    //   setExpanded([true, { color: "rgba(255,255,255)" }])
    // } else {
    //   setExpanded([false, { color: "rgba(144,164,174)" }])
    // }
  }

  return (
    <Container
      onMouseEnter={isExpanded}
      onMouseLeave={isExpanded}
    >
      <Content>
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
      </Content>
    </Container>
  );
};

export default ShareProduct;
