import octocat from './octocat.js';
const searchform = document.querySelector('.popup');
const searchBar = document.querySelector('#username-ip');
if (!localStorage.getItem('githubData')) {
  localStorage.setItem('githubData', JSON.stringify(octocat));
}

let user = JSON.parse(localStorage.getItem('githubData'));
renderUser(user);

async function getUserData(url) {
  try {
    const res = await axios.get(url);
    localStorage.setItem('githubData', JSON.stringify(res.data));
    document.querySelector('.not-found').classList.add('hide');
    document.querySelector('.modal').classList.toggle('hide');
    user = JSON.parse(localStorage.getItem('githubData'));
    renderUser(user);
    console.log(user);
  } catch {
    document.querySelector('.not-found').classList.remove('hide');
  }
}

function renderUser(user) {
  document.querySelector('.user-img').src = user?.avatar_url; // img of user
  document.querySelector('.name').innerText = !user?.name
    ? 'not available!'
    : user?.name; // name of user
  let date = user?.created_at;
  date = date.substr(0, date.indexOf('T'));
  document.querySelector('.joined').innerText = `Joined at ${date}`; // a/c creation date
  document.querySelector('.username').innerText = `@${user?.login}`; // username of user
  document.querySelector(
    '.username'
  ).href = `https://github.com/${user?.login}`; // username of user
  document.querySelector('.bio').innerText = !user?.bio
    ? '404 not found!'
    : user?.bio; // bio of user
  document.querySelector('.r-numbers').innerText = user?.public_repos; // repo of user
  document.querySelector('.fo-numbers').innerText = user?.followers; // followers of user
  document.querySelector('.fn-numbers').innerText = user?.following; // following of user
  document.querySelector('.loc-links').innerText = !user?.location
    ? 'not available!'
    : user?.location; // location of user
  document.querySelector('.twi-links').innerText = !user?.twitter_username
    ? 'not available!'
    : `@${user?.twitter_username}`; // twitter of user
  document.querySelector('.twi-links').href = !user?.twitter_username
    ? 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    : `https://twitter.com/${user?.twitter_username}`;
  document.querySelector('.blg-links').innerText = !user?.blog
    ? 'not available!'
    : user?.blog; // blog link of user
  document.querySelector('.blg-links').href = !user?.blog
    ? 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    : document.querySelector('.blg-links').innerText;
  document.querySelector('.org-links').innerText = !user?.company
    ? 'not available!'
    : user?.company; // company of user
  document.querySelector('.org-links').href =
    !user?.company || user?.company[0] !== '@'
      ? 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      : `https://github.com/${user?.company?.substr(1)}`;
}

// modal
document.querySelector('.popup').addEventListener('submit', (e) => {
  e.preventDefault();
});
document.querySelector('.login').addEventListener('click', () => {
  document.querySelector('.modal').classList.toggle('hide');
});
document.querySelector('.close').addEventListener('click', () => {
  document.querySelector('.modal').classList.toggle('hide');
});

searchform.addEventListener('submit', (e) => {
  e.preventDefault();
  let id = searchBar.value;
  let url = `https://api.github.com/users/${id}`;
  if (window.navigator.onLine) {
    getUserData(url);
  }
});
