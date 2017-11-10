import React from 'react';
import { CardContainer, SelfText } from './CardComponents';

const CommentCard = (props) => {
  const { author, link_title, subreddit, body } = props.post;
  return (
    <CardContainer {...props}>
      <h4 className="card-title">
        Comment by /u/{author} in /r/{subreddit}
      </h4>
      <h5 className="card-subtitle">Thread: {link_title}</h5>
      <SelfText>{body}</SelfText>
    </CardContainer>
  );
};

export default CommentCard;
