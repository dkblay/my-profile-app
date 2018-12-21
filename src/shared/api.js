import fetch from "isomorphic-fetch";

export async function getUserImage(token) {
  try {
    const response = await fetch(
      `https://graph.facebook.com/v3.2/me/picture?access_token=${token}&type=large&format=json&method=get&pretty=0&redirect=false`
    );
    const image = await response.json();
    console.log(image);
    return image;
  } catch (e) {
    console.log(e);
  }
}

export async function getUserFeed(token) {
  const response = await fetch(
    `https://graph.facebook.com/v3.2/me/feed?access_token=${token}`
  );
  const feed = await response.json();
  console.log(feed);
}
