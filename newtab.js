let client_id = "609d9c3a61a26777a0c3";
let scopes = "read:user notifications"
let redirect_uri = "http://localhost:3000/login"

document.querySelector('.login').addEventListener('click', () => {
  window.location.href = `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=${scopes}&redirect_uri=${redirect_uri}`;
});

const url = 'https://api.github.com/users/lostgirljourney';
const res = await axios.get(url);

document.querySelector('.user-img').src = res.data.avatar_url; // img of user

document.querySelector('.name').innerText = res.data.name; // name of user

let date = res.data.created_at;
date = date.substr(0, date.indexOf('T'));
document.querySelector('.joined').innerText = `Joined at ${date}`; // a/c creation date

document.querySelector('.username').innerText = `@${res.data.login}`; // username of user

document.querySelector('.bio').innerText =
  res.data.bio === undefined ? '404 not found!' : res.data.bio; // bio of user

document.querySelector('.r-numbers').innerText = res.data.public_repos; // repo of user

document.querySelector('.fo-numbers').innerText = res.data.followers; // followers of user

document.querySelector('.fn-numbers').innerText = res.data.following; // following of user

document.querySelector('.loc-links').innerText =
  res.data.location === undefined ? 'not available!' : res.data.location; // location of user

document.querySelector('.twi-links').innerText =
  res.data.twitter_username === undefined
    ? 'not available!'
    : `@${res.data.twitter_username}`; // twitter of user

document.querySelector('.twi-links').href =
  res.data.twitter_username === undefined
    ? 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    : `https://twitter.com/${res.data.twitter_username}`;

document.querySelector('.blg-links').innerText =
  res.data.blog === undefined ? 'not available!' : res.data.blog; // blog link of user

document.querySelector('.blg-links').href =
  res.data.blog === undefined
    ? 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    : document.querySelector('.blg-links').innerText;

document.querySelector('.org-links').innerText =
  res.data.company === undefined ? 'not available!' : res.data.company; // company of user

document.querySelector('.org-links').href =
  res.data.company === undefined
    ? 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    : `https://github.com/${res.data.company.substr(1)}`;
