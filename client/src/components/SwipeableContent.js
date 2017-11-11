import React, { Component } from 'react';
import Swipeable from 'react-swipeable';

class SwipeableContent extends Component {
  render() {
    return (
      <Swipeable
        className={this.props.styleClass}
        onSwiping={this.swiping}
        onSwipedLeft={() => this.props.unsavePost(this.props.post)}
        onSwipedRight={() => this.props.keepPost(this.props.post)}
      >
        {this.props.children}
      </Swipeable>
    );
  }
}

export default SwipeableContent;
