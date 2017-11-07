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

export default props => {
  return (
    <LandingContainer>
      <ImageContainer>
        <SVG src={LeftArrow} text="unsave" />
        <h5>unsave</h5>
      </ImageContainer>
      <ImageContainer>
        <SVG src={RightArrow} text="keep saved" />
        <h5>keep</h5>
      </ImageContainer>
      <ImageContainer>
        <SVG src={U} text="undo" />
        <h5>undo</h5>
      </ImageContainer>
    </LandingContainer>
  );
};
