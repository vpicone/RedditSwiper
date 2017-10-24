import React from 'react';
import styled from 'styled-components';
import SVG from './SVG';

import LeftArrow from './icons/LeftArrow.svg';
import U from './icons/U.svg';
import RightArrow from './icons/RightArrow.svg';

const LandingContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ImageContainer = styled.div`flex-direction: column;`;

export default () => {
  return (
    <LandingContainer>
      <ImageContainer>
        <SVG src={LeftArrow} text="unsave" />
        <p>unsave</p>
      </ImageContainer>
      <ImageContainer>
        <SVG src={RightArrow} text="keep saved" />
        <p>keep saved</p>
      </ImageContainer>
      <ImageContainer>
        <SVG src={U} text="undo" />
        <p>undo</p>
      </ImageContainer>
    </LandingContainer>
  );
};
