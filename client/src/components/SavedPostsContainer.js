import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SavedPost from './SavedPost';
import LandingPage from './LandingPage';

const Container = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
`;

class SavedPostsList extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      keptPosts: [],
      unsavedPosts: [],
      morePosts: true,
    };

    this.permanentlyUnsavePosts = this.permanentlyUnsavePosts.bind(this);
  }

  unsavePost = post => {
    this.setState(prevState => {
      return { unsavedPosts: [...prevState.unsavedPosts, post] };
    });
  };

  keepPost = post => {
    this.setState(prevState => {
      return { keptPosts: [...prevState.keptPosts, post] };
    });
  };

  resavePosts = () => {
    this.setState({ unsavedPosts: [] });
  };

  async fetchMorePosts() {
    const lastPostIndex = this.state.posts.length - 1;
    const lastPost = this.state.posts[lastPostIndex].name;
    const { data } = await axios.post('/api/posts/fetch', { lastPost });
    if (data.isFinished) {
      this.setState(prevState => {
        return { posts: [...prevState.posts, ...data.posts], morePosts: false };
      });
    } else {
      this.setState(prevState => {
        return { posts: [...prevState.posts, ...data.posts] };
      });
    }
  }

  async permanentlyUnsavePosts() {
    const { unsavedPosts } = this.state;
    const unsaveResponse = await axios.post('/api/posts/unsave', {
      unsavedPosts,
    });
    this.setState(prevState => {
      const unsavedPostNames = unsaveResponse.data.map(e => e.name);
      const remainingPosts = prevState.posts.filter(
        element => !unsavedPostNames.includes(element.name),
      );
      return { posts: remainingPosts, unsavedPosts: [] };
    });
  }

  renderPosts() {
    const undeletedPosts = this.state.posts.filter(post => {
      return (
        !this.state.unsavedPosts.includes(post.name) &&
        !this.state.keptPosts.includes(post.name)
      );
    });

    if (undeletedPosts.length === 0) {
      return <h1>No more saved content.</h1>;
    }
    if (undeletedPosts.length < 10 && this.state.morePosts) {
      this.fetchMorePosts();
    }

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2>Unsaved Posts: {this.state.unsavedPosts.length}</h2>
        <SavedPost
          post={undeletedPosts[0]}
          permanentlyUnsavePosts={this.permanentlyUnsavePosts}
          keepPost={this.keepPost}
          unsavePost={this.unsavePost}
        />
        <LandingPage />
      </div>
    );
  }

  renderLoading() {
    if (this.props.username) {
      return <h1>Loading</h1>;
    }
    return '';
  }

  async componentDidMount() {
    const { data: posts, isFinished } = await axios.get('/api/posts');
    this.props.togglePostsLoaded(true);
    this.setState({ posts, morePosts: !isFinished });
  }

  render() {
    const { posts } = this.state;
    if (posts[0] == null) {
      return <h2>Loading...</h2>;
    }
    return <Container>{this.renderPosts()}</Container>;
  }
}

export default SavedPostsList;
