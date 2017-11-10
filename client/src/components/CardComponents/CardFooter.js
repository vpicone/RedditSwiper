import React from 'react';

export default props => (
  <div className="card-footer">
    <a
      popover={`${props.permalink.slice(0, 25)}...`}
      popoverplacement="top"
      style={{ marginLeft: '1.25rem' }}
      href={`https://www.reddit.com${props.permalink}`}
    >
      permalink
    </a>
  </div>
);
