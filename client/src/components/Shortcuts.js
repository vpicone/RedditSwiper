import React from 'react';
import styled from 'styled-components';

const DesktopContainer = styled.div.attrs({
  className: 'shadow shadow-hover background-primary',
  popover: "Press the 'u' key to undo",
  popoverposition: 'left',
})`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
`;

export default () => (
  <DesktopContainer>
    <span style={{ lineHeight: '2.1rem' }}>?</span>
  </DesktopContainer>
);
