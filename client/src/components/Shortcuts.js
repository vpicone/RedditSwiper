import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

const DesktopContainer = styled.div.attrs({
  className: 'shadow shadow-hover background-primary',
  popover: "Press the 'u' key to undo",
  popoverposition: 'left',
})`
  position: absolute;
  margin: 1.5rem;
  top: 0;
  right: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
`;

const MobileContainer = styled.div.attrs({
  className: 'background-primary',
  popover: 'Swipe right to keep, left to unsave.',
  popoverposition: 'bottom',
})`
  position: absolute;
  margin: 1rem;
  top: 0;
  right: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
`;

export default () => (
  <div>
    <MediaQuery maxDeviceWidth={1224}>
      <MobileContainer>
        <span style={{ lineHeight: '2.1rem' }}>?</span>
      </MobileContainer>
    </MediaQuery>
    <MediaQuery minDeviceWidth={1225}>
      <DesktopContainer>
        <span style={{ lineHeight: '2.1rem' }}>?</span>
      </DesktopContainer>
    </MediaQuery>
  </div>
);
