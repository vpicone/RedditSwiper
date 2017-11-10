import React from 'react';
// import SwipeableCard from './SwipeableCard';
import { CardContainer, SelfText } from './CardComponents';

const trimTitle = (titleString, length) => {
  if (titleString.length > length) {
    return `${titleString.substring(0, length)}...`;
  }
  return titleString;
};

export default (props) => {
  const { author, title, subreddit, is_self, selftext } = props.post;

  return (
    <CardContainer {...props}>
      <h4 className="card-title">{trimTitle(title, 100)}</h4>
      <h5 className="card-subtitle">
        Post by /u/{author} in /r/{subreddit}
      </h5>
      {is_self ? <SelfText>{selftext}</SelfText> : null}
    </CardContainer>
  );
};
