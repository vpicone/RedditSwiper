import React from 'react';

const CardFooter = props => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
    className="card-footer"
  >
    <a
      popover={`${props.permalink.slice(0, 25)}...`}
      popoverplacement="top"
      style={{ margin: '0' }}
      href={`https://www.reddit.com${props.permalink}`}
    >
      permalink
    </a>
    <button onClick={() => props.undoLastAction()} className="btn-small">
      undo
    </button>
  </div>
);

export default CardFooter;
