function getAllBreeds() {
  return fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then((res) => Object.keys(res.message));
}

function getRandomDog() {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((res) => res.message);
}

function getAllImagesByBreed(breed) {
  return fetch("https://dog.ceo/api/breed/komondor/images")
    .then((res) => res.json())
    .then((res) => res.message);
}

function getAllImagesByBreed2(breed) {
  return fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then((res) => res.json())
    .then((res) => res.message);
}

function getGitHubUserProfile(username) {
  return fetch(`https://api.github.com/users/${username}`).then((res) =>
    res.json()
  );
}

//6
function printGithubUserProfile(username) {
  return fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((res) => {
      let img = res.avatar_url;
      let name = res.name;
      let imagen = document.createElement("img");
      let usuario = document.createElement("p");
      document.body.appendChild(imagen);
      document.body.appendChild(usuario);
      imagen.src = img;
      usuario.innerHTML = name;
      let objeto = { img: { src: img }, name: name };
      return objeto;
    });
}

function getAndPrintGitHubUserProfile(username) {
  return fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((res) => {
      let img = res.avatar_url;
      let name = res.name || res.login;
      let repos = res.public_repos;

      return `<section>
                    <img src="${img}" alt="${name}">
                    <h1>${name}</h1>
                    <p>Public repos: ${repos}</p>
              </section>`;
    });
}
//8
let form = document.getElementById("usernameSearchForm");
form.innerHTML = `<label for="username">Usuario de Github</label>
                  <input type="text" id="username" name="username">
                  <input type="submit">`;
form.addEventListener("submit", function (event) {
  event.preventDefault();
  getAndPrintGitHubUserProfile(event.target[0].value);
});

//9
function fetchGithubUsers(userNames) {
  let userNamesArray = userNames.map(function (username) {
    return fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((res) => res.name || res.login);
  });
  Promise.all(userNamesArray).then((userNames) => console.log(userNames));

  let urlsArray = userNames.map(function (username) {
    return fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((res) => res.url);
  });
  Promise.all(urlsArray).then((urls) => console.log(urls));
}
