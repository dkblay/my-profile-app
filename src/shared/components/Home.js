import React, { Component } from "react";

class Home extends Component {
  signIn() {
    window.location.href = `${window.location.protocol}//${
      window.location.host
    }/auth/facebook`;
  }

  render() {
    return (
      <div>
        <div className="jumbotron mt-3">
          <h1>Welcome to Social Media App</h1>
          <p className="lead">Sign In with Facebook</p>
          <button className="btn btn-lg btn-primary" onClick={this.signIn}>
            Sign In »
          </button>
        </div>
      </div>
    );
  }
}
export default Home;
