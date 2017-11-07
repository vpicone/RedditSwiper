import React from 'react';
import { CardContainer, Image, SelfText } from './CardComponents';

export default (props) => {
  const {
    preview,
    author,
    title,
    subreddit,
    permalink,
    is_self,
    selftext,
  } = props.post;

  const trimTitle = (titleString, length) => {
    if (titleString.length > length) {
      console.log('trimming...');
      return `${titleString.substring(0, length)}...`;
    }
    return titleString;
  };

  return (
    <CardContainer>
      {preview ? (
        <Image preview={preview} alt={`for ${trimTitle(title, 50)}`} />
      ) : null}
      <div className="card-body">
        <h4 className="card-title">{trimTitle(title, 100)}</h4>
        <h5 className="card-subtitle">
          By /u/{author} in /r/{subreddit}
        </h5>
        {is_self ? <SelfText text={selftext} /> : null}
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
