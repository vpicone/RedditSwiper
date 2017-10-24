import React from 'react';
import styled from 'styled-components';

const SVG = styled.img.attrs({
  width: props => props.width || '4rem',
})`
  width: ${props => props.width};
  margin: 0 1rem;
`;

export default SVG;
