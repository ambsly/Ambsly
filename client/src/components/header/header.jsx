import React from 'react';
import styled from 'styled-components';

const Banner = styled.div`
height: 50px;
width: 100%;
padding-left: 20px;
padding-bottom: 10px;
background-color: rgba(144,164,174,0.8);
`;

const Title = styled.div`
font-size: 50px;
position: absolute;
color: white;
bottom: 0;
`;

const Header = () => (
  <Banner>
    <Title>
      Ambsly
    </Title>
  </Banner>
);

export default Header;
