import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SavedPostsContainer from './components/SavedPostsContainer';
import Landing from './components/LandingPage';
import { Route, Link } from 'react-router-dom';
import SVG from './components/SVG';
import Reddit from './components/icons/Reddit.svg';

class App extends Component {
  state = {
    username: null,
    postsLoaded: false,
  };

  async componentWillMount() {
    const { data } = await axios.get('/api/current_user');
    if (data) {
      this.setState({
        username: data.profile.name,
      });
    }
  }

  togglePostsLoaded = value => {
    this.setState(prevState => {
      return { postsLoaded: value };
    });
  };

  renderGreeting() {
    const { username, postsLoaded } = this.state;
    if (username && !postsLoaded) {
      return (
        <div style={{ marginTop: '5rem' }}>
          <h2>Greetings {username}</h2>
          <Link to="/savedposts">Load Posts</Link>
        </div>
      );
    } else if (username === false) {
      return 'Log in failed. Please try again.';
    }
    return null;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Reddit Swiper</h1>
          <a
            style={{ position: 'absolute', right: '2rem', margin: 'auto' }}
            href="/api/logout"
          >
            <button>Log Out.</button>
          </a>
        </header>
        <div className="App-intro">
          <h1>{this.renderGreeting()}</h1>
          {this.state.username ? (
            ''
          ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '2rem',
                marginBottom: '2rem',
              }}
            >
              <a href="/auth/reddit">
                <SVG width="8rem" src={Reddit} />
              </a>
              <h2>Login with Reddit.</h2>
            </div>
          )}
        </div>

        <Route path="/" exact component={Landing} />
        <Route
          path="/savedposts"
          render={() => (
            <SavedPostsContainer
              togglePostsLoaded={this.togglePostsLoaded}
              username={this.state.username}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
