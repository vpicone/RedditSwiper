import React from 'react';
import { CardContainer } from './CardComponents';

const CommentCard = (props) => {
  const { author, link_title, subreddit, body, permalink } = props.post;
  return (
    <CardContainer>
      <div className="card-body">
        <h4 className="card-title">
          Comment by /u/{author} in /r/{subreddit}
        </h4>
        <h5 className="card-subtitle">Thread: {link_title}</h5>
        <p className="card-text">{body}</p>
        <div style={{ textAlign: 'center' }}>
          <button
            popover="Left-arrow"
            popoverPosition="left"
            onClick={() => props.unsavePost(props.post)}
            className="margin-small"
          >
            Unsave
          </button>
          <button
            popover="Right-arrow"
            popoverPosition="right"
            onClick={() => props.keepPost(props.post)}
            className="margin-small"
          >
            Save
          </button>
        </div>
      </div>
      <div className="card-footer">
        <a href={`https://www.reddit.com/u/${author}`}>comment author</a>
        <a
          style={{ marginLeft: '1.25rem' }}
          href={`https://www.reddit.com${permalink}`}
        >
          permalink
        </a>
      </div>
    </CardContainer>
  );
};

export default CommentCard;

// <div className="card">
// <Card>
//   <SelfText text={body} />
//   <Detail>-/u/{author}</Detail>
//   <Detail>
//     From: "{link_title}" in /r/{subreddit}
//   </Detail>
//   <Detail>
//     <a href={permalink}>view comment</a>
//   </Detail>
// </Card>
// </div>
