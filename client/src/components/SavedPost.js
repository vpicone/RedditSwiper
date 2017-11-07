import React, { Component } from 'react';
import CommentCard from './CommentCard';
import LinkCard from './LinkCard';

class SavedPost extends Component {
  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.keyCode === 37) this.props.unsavePost(this.props.post);
    if (e.keyCode === 39) this.props.keepPost(this.props.post);
    if (e.keyCode === 85) this.props.undoLastAction();
  };

  renderPreviewImage = () => {
    const { preview, title } = this.props.post;
    const largestResolution = preview.images[0].resolutions.length - 1;
    return (
      <img
        style={{ maxHeight: '80%' }}
        className="no-responsive"
        alt={`for ${title}`}
        src={[preview.images[0].resolutions[largestResolution].url]}
      />
    );
  };

  render() {
    const { post } = this.props;
    const comment = post.name.slice(0, 2) === 't1';
    return (
      <div className="row flex-center" onKeyDown={this.handleKeyDown}>
        {comment ? (
          <CommentCard
            unsavePost={this.props.unsavePost}
            keepPost={this.props.keepPost}
            post={post}
          />
        ) : (
          <LinkCard
            unsavePost={this.props.unsavePost}
            keepPost={this.props.keepPost}
            post={post}
          />
        )}
      </div>
    );
  }
}

export default SavedPost;
