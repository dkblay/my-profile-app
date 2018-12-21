import React, { Component } from "react";
import fetch from "isomorphic-fetch";

class Home extends Component {
  componentDidMount() {}

  signIn() {
    window.location.href = "http://localhost:3000/auth/facebook";
  }

  render() {
    return (
      <div>
        <div>Home Page</div>
        <button onClick={this.signIn}>Sign In</button>
      </div>
    );
  }
}
export default Home;
