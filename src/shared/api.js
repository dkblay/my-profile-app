import fetch from "isomorphic-fetch";

const facebookUrl = (token, resource, params = "") =>
  `https://graph.facebook.com/v3.2/me/${resource}?access_token=${token}&type=large&format=json&method=get&pretty=0&redirect=false${params}`;

export async function getUserInfo({ displayName, token }) {
  const [imageUrl, friendsCount] = await Promise.all([
    getUserImage(token),
    getFriendsInfo(token)
  ]);

  return {
    imageUrl,
    friendsCount,
    displayName
  };
}

async function getFriendsInfo(token) {
  try {
    const response = await fetch(facebookUrl(token, "friends"));
    const friends = await response.json();
    return friends.summary && friends.summary.total_count;
  } catch (e) {
    console.error(e);
  }
}

async function getUserImage(token) {
  try {
    const response = await fetch(facebookUrl(token, "picture", "&type=large"));
    const image = await response.json();
    return image.data && image.data.url;
  } catch (e) {
    console.error(e);
  }
}

export async function getUserFeed(token) {
  const response = await fetch(facebookUrl(token, "feed"));
  const feed = await response.json();
  console.log(feed);
  return feed.data;
}
