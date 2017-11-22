import React, { Component } from "react";
import axios from "axios";
import SavedPostsContainer from "./components/SavedPostsContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shortcuts from "./components/Shortcuts";
import LoginButton from "./components/LoginButton";
import PaperContainer from "./components/PaperContainer";
import styled from "styled-components";
// import SwipeableComponent from './components/SwipeableComponent';
//TODO: add shake to undo adjust ? button add animations

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    margin: 0%;
  }
`;

class App extends Component {
  state = {
    username: null,
    postsLoaded: false,
    hideLoginButton: false
  };

  async componentDidMount() {
    const { data } = await axios.post("/api/current_user");
    if (data) {
      this.setState({
        username: data.profile.name,
        hideLoginButton: true
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
      <AppContainer>
        <PaperContainer>
          {this.state.username ? <Shortcuts /> : null}
          <Header username={this.state.username} />
          {!this.state.hideLoginButton ? (
            <LoginButton />
          ) : (
            <SavedPostsContainer
              togglePostsLoaded={this.togglePostsLoaded}
              username={this.state.username}
            />
          )}
          <Footer>
            Made with ❤ by <a href="https://www.vincepicone.com">VPP</a>
          </Footer>
        </PaperContainer>
      </AppContainer>
    );
  }
}

export default App;
