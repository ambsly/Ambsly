/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import AnswerFooter from './AnswerFooter';

const AnswerSection = styled.div`
  display: block;
  margin-top: 10px;
  /* color: #8a9ea0; */
  font-weight: 400;
`;

const PhotosSection = styled.div`
  display: block;
`;

const PhotoDiv = styled.div`
  display: inline-block;
  margin: 10px 10px 0 0;
  width: 150px;
  height: 150px;
  overflow: hidden;

  &:hover {
    width: 250px;
    height: auto;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const IndividualAnswer = ({ answer, refreshA }) => (
  <AnswerSection>
    {`${answer.body}`}
    <PhotosSection>
      {answer.photos.length > 0
        && answer.photos.map((photo, index) => (
          <PhotoDiv key={photo.id}>
            <a target="about:_blank" href={photo.url}>
              <Img alt={index + 1} src={photo.url} />
            </a>
          </PhotoDiv>
        ))}
    </PhotosSection>
    <AnswerFooter answer={answer} refreshA={refreshA} />
  </AnswerSection>
);

export default IndividualAnswer;
