import React from 'react';
import MediaQuery from 'react-responsive';

export default () => (
  <div className="row flex-center margin-top-large">
    <MediaQuery minWidth={1024}>
      <a className="paper-btn btn-large" href="/auth/reddit">
        Log in with reddit.
      </a>
    </MediaQuery>
    <MediaQuery maxWidth={1023}>
      <a className="paper-btn btn-medium" href="/auth/reddit">
        Log in with reddit.
      </a>
    </MediaQuery>
  </div>
);
