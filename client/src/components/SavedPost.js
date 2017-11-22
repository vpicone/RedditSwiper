import React, { Component } from "react";
import CommentCard from "./CommentCard";
import LinkCard from "./LinkCard";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;

const FadeIn = styled.div`
  animation: 1s ${fadeInAnimation};
`;

class SavedPost extends Component {
  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.keyCode === 37) this.props.unsavePost(this.props.post);
    if (e.keyCode === 39) this.props.keepPost(this.props.post);
    if (e.keyCode === 85) this.props.undoLastAction();
  };

  render() {
    const { post } = this.props;
    const comment = post.name.slice(0, 2) === "t1";
    return (
      <FadeIn>
        <div className="row flex-center" onKeyDown={this.handleKeyDown}>
          {comment ? (
            <CommentCard
              unsavePost={this.props.unsavePost}
              keepPost={this.props.keepPost}
              undoLastAction={this.props.undoLastAction}
              post={post}
            />
          ) : (
            <LinkCard
              unsavePost={this.props.unsavePost}
              keepPost={this.props.keepPost}
              undoLastAction={this.props.undoLastAction}
              post={post}
            />
          )}
        </div>
      </FadeIn>
    );
  }
}

export default SavedPost;
