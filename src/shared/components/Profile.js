import React, { Component } from "react";
import fetch from "isomorphic-fetch";
import { prettyDate } from "../utils";
class Profile extends Component {
  constructor(props) {
    super(props);

    let userInfo = null;
    if (__isBrowser__) {
      userInfo = window.initialData;
    } else {
      userInfo = this.props.staticContext;
    }

    this.state = {
      userInfo: userInfo,
      feeds: [],
      loadingFeed: false
    };
  }
  getFeed = async () => {
    this.setState({ loadingFeed: true });
    const feeds = await (await fetch("/api/feed")).json();
    this.setState({ feeds });
  };

  renderFeed = () => {
    const { feeds } = this.state;
    return feeds
      .filter(feed => feed.message)
      .map(({ message, id, created_time: createdDate }) => (
        <div className="text-muted pt-3" key={id}>
          <div className="pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div className="d-flex justify-content-between align-items-center w-100">
              <strong className="text-gray-dark">{message}</strong>
            </div>
            <span className="d-block">@ {prettyDate(createdDate)}</span>
          </div>
        </div>
      ));
  };

  render() {
    const {
      userInfo: { friendsCount, displayName, imageUrl },
      feeds,
      loadingFeed
    } = this.state;
    return (
      <React.Fragment>
        <div className="profile__head">
          <img className="profile__image" src={imageUrl} alt="profile" />
          <div className="profile__info">
            <h1 className="cover-heading">{displayName}</h1>
            <p className="lead">
              Your Total Number of Friends on Facebook is : {friendsCount}
            </p>
            <button
              disabled={loadingFeed}
              className="btn btn-lg btn-secondary btn__view"
              onClick={this.getFeed}
            >
              View Posts
            </button>
          </div>
        </div>
        <div className="profile__feeds">
          {!!feeds.length && this.renderFeed()}
        </div>
      </React.Fragment>
    );
  }
}
export default Profile;
