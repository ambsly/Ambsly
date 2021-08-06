import React, { useState } from 'react';
import styled from 'styled-components';
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt';

const Container = styled.div`
height: 125px;
width: 100%;
margin-bottom: 25px;
background-color: rgba(144,164,174,0.8);
`;

const TitleSection = styled.div`
padding-top: 10px;
text-align: center;
`;

const Title = styled.div`
display: inline-block;
font-size: 50px;
color: white;
font-family: Brush Script MT;
`;

const SearchContainer = styled.div`
width: 1000px;
margin: auto;
`;

const SearchBar = styled.div`
position: relative;
right: 20px;
overflow: hidden;
margin-left: auto;
margin-right: 0;
transition: 0.4s;
`;

const SearchField = styled.input`
display: inline-block;
height: 30px;
width: 150px;
border: solid 1px rgba(144, 164, 174);
border-radius: 20px;
outline: none;
`;

const SearchButton = styled.button`
position: absolute;
right: 0;
z-index: 10;
height: 34px;
width: 34px;
border-radius: 50%;
border: none;
text-align: center;
color: white;
background-color: rgba(104, 124, 134);
cursor: pointer;
`;

const Header = () => {
  const [hovered, setHovered] = useState(false);

  const onHover = () => {
    if (!hovered) {
      setHovered(true);
    } else {
      setTimeout(() => {
        setHovered(false);
      }, 3000);
    }
  }

  return (
    <Container>
      <TitleSection>
        <Title>
          Ambsly
        </Title>
      </TitleSection>
      <SearchContainer>
        <SearchBar
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          style={{
            width: hovered ? "160px" : "34px",
            borderRadius: hovered ? undefined : "50%",
          }}
        >
        <SearchButton
          >
            <SearchAlt size="18px" />
          </SearchButton>
          <SearchField
            type="text"
            placeholder="Search..."
          />
        </SearchBar>
      </SearchContainer>
    </Container>
  );
};

export default Header;
