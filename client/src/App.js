import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import SavedPostsContainer from './components/SavedPostsContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import Shortcuts from './components/Shortcuts';
import LoginButton from './components/LoginButton';
import PaperContainer from './components/PaperContainer';

class App extends Component {
  state = {
    username: null,
    postsLoaded: false,
    hideLoginButton: false,
  };

  async componentDidMount() {
    const { data } = await axios.get('/api/current_user');
    if (data) {
      this.setState({
        username: data.profile.name,
        hideLoginButton: true,
      });
    } else this.setState({ hideLoginButton: false });
  }

  togglePostsLoaded = value => {
    this.setState(prevState => {
      return { postsLoaded: value };
    });
  };

  render() {
    return (
      <PaperContainer>
        <Shortcuts />
        <Header username={this.state.username} />
        {!this.state.hideLoginButton ? (
          <LoginButton />
        ) : (
          <Route
            path="/"
            render={() => (
              <SavedPostsContainer
                togglePostsLoaded={this.togglePostsLoaded}
                username={this.state.username}
              />
            )}
          />
        )}
        <Footer>
          Made with ❤ by <a href="https://www.github.com/vpicone">VPP</a>
        </Footer>
      </PaperContainer>
    );
  }
}

export default App;
