import styled from 'styled-components';

const PaperContainer = styled.div.attrs({
  className: 'paper container',
})`
  padding: 0.5rem;
  margin-top: 2rem;
  background: white;
  @media (max-width: 768px) {
    margin-top: 0rem;
    min-height: 100vh;
  }
`;

export default PaperContainer;
