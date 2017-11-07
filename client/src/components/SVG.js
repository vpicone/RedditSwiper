import styled from 'styled-components';

const SVG = styled.img.attrs({
  className: 'no-border',
  width: props => props.width || '3rem',
})`
  width: ${props => props.width};
  margin: 0 1rem;
`;

export default SVG;
