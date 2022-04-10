let client_id = "609d9c3a61a26777a0c3";
let scopes = "read:user notifications"
let redirect_uri = "http://localhost:3000/login"

const searchform = document.querySelector('.searchform');
const searchBar = document.querySelector('.search-input');


document.querySelector('.login').addEventListener('click', () => {
  window.location.href = `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=${scopes}&redirect_uri=${redirect_uri}`;
});

async function dataa() {

}

async function getUserData(url) {
  const res = await axios.get(url);
  localStorage.setItem('githubData', JSON.stringify(res.data));
}

// function setUserData()

searchform.addEventListener('submit', (e) => {
  e.preventDefault();
  let id = searchBar.value;
  let url = `https://api.github.com/users/${id}`;
  if (window.navigator.onLine) {
    getUserData(url)
    let user = JSON.parse(localStorage.getItem('githubData'));
    console.log(user);
  }
})

if (window.navigator.onLine) {
  const url = 'https://api.github.com/users/octocat';
  getUserData();
}
else {

}

// const url = 'https://api.github.com/users/lostgirljourney';


const user = JSON.parse(localStorage.getItem('githubData'));

document.querySelector('.user-img').src = user.avatar_url; // img of user

document.querySelector('.name').innerText = user.name; // name of user

let date = user.created_at;
date = date.substr(0, date.indexOf('T'));
document.querySelector('.joined').innerText = `Joined at ${date}`; // a/c creation date

document.querySelector('.username').innerText = `@${user.login}`; // username of user

document.querySelector('.bio').innerText =
  user.bio === undefined ? '404 not found!' : user.bio; // bio of user

document.querySelector('.r-numbers').innerText = user.public_repos; // repo of user

document.querySelector('.fo-numbers').innerText = user.followers; // followers of user

document.querySelector('.fn-numbers').innerText = user.following; // following of user

document.querySelector('.loc-links').innerText =
  user.location === undefined ? 'not available!' : user.location; // location of user

document.querySelector('.twi-links').innerText =
  user.twitter_username === undefined
    ? 'not available!'
    : `@${user.twitter_username}`; // twitter of user

document.querySelector('.twi-links').href =
  user.twitter_username === undefined
    ? 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    : `https://twitter.com/${user.twitter_username}`;

document.querySelector('.blg-links').innerText =
  user.blog === undefined ? 'not available!' : user.blog; // blog link of user

document.querySelector('.blg-links').href =
  user.blog === undefined
    ? 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    : document.querySelector('.blg-links').innerText;

document.querySelector('.org-links').innerText =
  user.company === undefined ? 'not available!' : user.company; // company of user

document.querySelector('.org-links').href =
  user.company === undefined
    ? 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    : `https://github.com/${user.company.substr(1)}`;
