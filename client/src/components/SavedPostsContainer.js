import React, { Component } from "react";
import debounce from "lodash.debounce";
import axios from "axios";
import SavedPost from "./SavedPost";

class SavedPostsContainer extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      keptPosts: [],
      unsavedPosts: [],
      lastActions: [],
      currentPost: null,
      morePosts: true
    };

    // this.undoLastAction = this.undoLastAction.bind(this);
    // this.unsavePost = this.unsavePost.bind(this);
  }

  unsavePost = debounce(async post => {
    const unsaveResponse = await axios.post(
      "/api/posts/unsave",
      {
        postId: post.name
      },
      100
    );

    const unsavedPostName = unsaveResponse.data.name;

    this.setState(prevState => {
      if (unsavedPostName) {
        return {
          unsavedPosts: [...prevState.unsavedPosts, unsavedPostName],
          lastActions: [...prevState.lastActions, "unsaved"],
          posts: prevState.posts.slice(1),
          currentPost: prevState.posts[1]
        };
      }

      return null;
    });
  }, 100);

  keepPost = debounce(post => {
    this.setState(prevState => {
      return {
        keptPosts: [...prevState.keptPosts, post],
        posts: [...prevState.posts.slice(1)],
        lastActions: [...prevState.lastActions, "kept"],
        currentPost: prevState.posts[1]
      };
    });
  }, 100);

  undoLastAction = debounce(async () => {
    let post;
    const lastAction = this.state.lastActions[
      this.state.lastActions.length - 1
    ];
    const lastKeptPost = this.state.keptPosts[this.state.keptPosts.length - 1];
    const lastUnsavedPost = this.state.unsavedPosts[
      this.state.unsavedPosts.length - 1
    ];

    if (lastAction === "kept") {
      post = lastKeptPost;
    } else if (lastAction === "unsaved") {
      const { data } = await axios.post("/api/posts/save", {
        postId: lastUnsavedPost
      });
      post = data;
    }

    this.setState(({ unsavedPosts, keptPosts, lastActions, posts }) => {
      if (post && lastAction === "kept") {
        return {
          lastActions: lastActions.slice(0, -1),
          keptPosts: keptPosts.slice(0, -1),
          posts: [post, ...posts],
          currentPost: post
        };
      } else if (post && lastAction === "unsaved") {
        return {
          lastActions: [...lastActions.slice(0, -1)],
          unsavedPosts: [...unsavedPosts.slice(0, -1)],
          posts: [post, ...posts],
          currentPost: post
        };
      }
      return null;
    });
  }, 100);

  async fetchMorePosts() {
    const lastPostIndex = this.state.posts.length - 1;
    const lastPost = this.state.posts[lastPostIndex].name;
    const { data } = await axios.post("/api/posts/fetch", { lastPost });
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

  renderPosts() {
    const undeletedPosts = this.state.posts.filter(post => {
      return (
        !this.state.unsavedPosts.includes(post.name) &&
        !this.state.keptPosts.map(e => e.name).includes(post.name)
      );
    });

    if (this.state.posts.length === 0) {
      return <h2>No more saved content.</h2>;
    }
    if (undeletedPosts.length < 10 && this.state.morePosts) {
      this.fetchMorePosts();
    }

    if (this.state.currentPost) {
      return (
        <SavedPost
          key={this.state.currentPost.name}
          post={this.state.currentPost}
          undoLastAction={this.undoLastAction}
          keepPost={this.keepPost}
          unsavePost={this.unsavePost}
        />
      );
    }

    return null;
  }

  async componentDidMount() {
    const { data: posts, isFinished } = await axios.get("/api/posts");
    this.props.togglePostsLoaded(true);
    this.setState({ posts, morePosts: !isFinished, currentPost: posts[0] });
  }

  render() {
    const { posts } = this.state;
    if (
      !posts[0] &&
      this.state.morePosts &&
      this.state.currentPost !== undefined
    ) {
      return <h2>Loading...</h2>;
    }
    return <div>{this.renderPosts()}</div>;
  }
}

export default SavedPostsContainer;
