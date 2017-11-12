import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

const SubTitle = styled.h3`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  margin: 0px;
  font-size: 4rem;
  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

export default (props) => {
  const { username } = props;

  if (username) {
    return (
      <div style={{ maxWidth: '100%' }}>
        <Title>Snoo Swiper</Title>
        <SubTitle>
          /u/{username}
          <a
            style={{ marginLeft: '1rem' }}
            className="paper-btn"
            href="/api/logout"
          >
            logout
          </a>
        </SubTitle>
      </div>
    );
  }

  return (
    <div>
      <MediaQuery minDeviceWidth={1024}>
      <h1>
        Snoo Swiper
      </h1>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1023}>
      <h1>
        Snoo<br />Swiper
      </h1>
      </MediaQuery>
    </div>
  );
};
