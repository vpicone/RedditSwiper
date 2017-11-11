import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

const Container = styled.div.attrs({
  className: 'background-primary',
  popover: 'Shake to undo',
  popoverposition: 'bottom',
})`
  position: absolute;
  margin: 1rem;
  top: 0;
  left: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
`;

export default () => (
  <MediaQuery maxDeviceWidth={1224}>
    <Container>
      <span style={{ lineHeight: '2.1rem' }}>⎌</span>
    </Container>
  </MediaQuery>
);
