document.querySelector('.login').addEventListener('click', () => {
  window.location.href = 'https://www.google.com';
});

const url = 'https://api.github.com/users/lostgirljourney';
const res = await axios.get(url);

document.querySelector('.user-img').src = res.data.avatar_url; // img of user

document.querySelector('.name').innerText = res.data.name; // name of user

let date = res.data.created_at;
date = date.substr(0, date.indexOf('T'));
document.querySelector('.joined').innerText = `Joined at ${date}`; // a/c creation date

document.querySelector('.username').innerText = `@${res.data.login}`; // username of user

document.querySelector('.bio').innerText = res.data.bio; // bio of user

document.querySelector('.r-numbers').innerText = res.data.public_repos; // repo of user

document.querySelector('.fo-numbers').innerText = res.data.followers; // followers of user

document.querySelector('.fn-numbers').innerText = res.data.following; // following of user

document.querySelector('.loc-links').innerText = res.data.location; // location of user

document.querySelector('.twi-links').innerText = res.data.twitter_username; // twitter of user

document.querySelector('.blg-links').innerText = res.data.blog; // blog link of user

document.querySelector('.org-links').innerText = res.data.company; // company of user
