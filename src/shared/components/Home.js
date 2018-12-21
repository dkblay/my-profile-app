import React, { Component } from "react";

class Home extends Component {
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
