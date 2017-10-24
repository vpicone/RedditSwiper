import React, { Component } from 'react';
import Img from 'react-image';
import styled from 'styled-components';

const PostContainer = styled.div`
  flex-direction: column;
  width: 300px;
  padding: 2rem 2rem;
  margin-bottom: 2rem;
  margin-top: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

class SavedPost extends Component {
  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    const { name } = this.props.post;
    if (e.keyCode === 37) this.props.unsavePost(name);
    if (e.keyCode === 39) this.props.keepPost(name);
  };

  renderPreviewImage = () => {
    const { preview, title } = this.props.post;
    const largestResolution = preview.images[0].resolutions.length - 1;
    return (
      <Img
        alt={`for ${title}`}
        style={{ maxWidth: '80%' }}
        src={[
          preview.images[0].resolutions[largestResolution].url,
          preview.images[0].resolutions[0].url,
        ]}
      />
    );
  };

  render() {
    const {
      preview,
      name,
      title,
      subreddit_name_prefixed,
      permalink,
    } = this.props.post;
    const comment = name.slice(0, 2) === 't1';
    return (
      <div onKeyDown={this.handleKeyDown}>
        <PostContainer>
          <h2>{title}</h2>
          <h3>
            <a href={`https://www.reddit.com${permalink}`}>permalink</a> -
            {comment ? ' comment ' : ' post '} -
            <a href={`https://www.reddit.com${subreddit_name_prefixed}`}>
              {' ' + subreddit_name_prefixed}
            </a>
          </h3>
          {preview ? this.renderPreviewImage() : null}
        </PostContainer>
      </div>
    );
  }
}

export default SavedPost;
