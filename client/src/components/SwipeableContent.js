import React, { Component } from 'react';
import Swipeable from 'react-swipeable';

class SwipeableContent extends Component {
  swiping(e, deltaX, deltaY, absX, absY, velocity) {
    console.log("You're Swiping...", e, deltaX, deltaY, absX, absY, velocity);
  }

  swipingLeft(e, absX) {
    // this.props.unsavePost(this.props.post);
    console.log("You're Swiping to the Left...", e, absX);
  }

  swipingRight(e, absX) {
    // this.props.keepPost(this.props.post);
    console.log("You're Swiping to the Right...", e, absX);
  }

  swiped(e, deltaX, deltaY, isFlick, velocity) {
    console.log('You Swiped...', e, deltaX, deltaY, isFlick, velocity);
    if (deltaX > 0) {
      console.log('Left Left Left');
    }
    if (deltaX > 0) {
      console.log('Right Right Right');
    }
  }

  swipedLeft(e, deltaY, isFlick) {
    console.log('You Swiped Left...', e, deltaY, isFlick);
  }

  swipedRight(e, deltaY, isFlick) {
    console.log('You Swiped Right...', e, deltaY, isFlick);
  }

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
