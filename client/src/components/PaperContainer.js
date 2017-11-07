import styled from 'styled-components';

const PaperContainer = styled.div.attrs({
  className: 'paper container',
})`
  padding-bottom: 0;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    margin 0px;
  }
`;

export default PaperContainer;
