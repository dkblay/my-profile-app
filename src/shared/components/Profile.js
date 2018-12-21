import React, { Component } from "react";
import fetch from "isomorphic-fetch";
class Profile extends Component {
  constructor(props) {
    super(props);

    let imageInfo = null;
    if (__isBrowser__) {
      imageInfo = window.initialData;
    } else {
      imageInfo = this.props.staticContext;
    }

    this.state = {
      imageInfo: imageInfo.data
    };
  }
  async showDetails() {
    const data = await (await fetch("/api/feed")).json();
    console.log(data);
  }
  render() {
    const { imageInfo } = this.state;
    return (
      <div>
        <div>Profile Page</div>
        <img src={imageInfo.url} alt="profile" />
        <button onClick={this.showDetails}>View Details</button>
      </div>
    );
  }
}
export default Profile;
