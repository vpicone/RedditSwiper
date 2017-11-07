import React from 'react';
import styled from 'styled-components';

const SubTitle = styled.h3`
  display: flex;
  justify-content: center;
  margin: 0.5rem;
  margin-bottom: 1rem;
`;

export default (props) => {
  const { username } = props;

  if (username) {
    return (
      <div>
        <h1 style={{ margin: '.5rem' }}>Reddit Swiper</h1>
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

  return <h1>Reddit Swiper</h1>;
};
