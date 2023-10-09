function getAllBreeds() {
  return fetch("https://dog.ceo/api/breeds/list/all").then((res) => res.json());
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
function printGithubUserProfile(username) {
  return fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((res) => {
      let img = res.avatar_url;
      let name = res.name;

      console.log(img);
      console.log();
      let objeto = { img: { src: img }, name: name };
      let imagen = document.createElement("img");
      let usuario = document.createElement("p");
      document.body.appendChild(imagen);
      document.body.appendChild(usuario);
      imagen.src = img;
      usuario.innerHTML = name;
      return objeto;
    });
}

function getAndPrintGitHubUserProfile(username) {

 return fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((res) => {
     let img = res.avatar_url;
     let name = res.name;
     let repos = res.public_repos;
      console.log(img, name, repos);


      return `<section>
      <img src="${img}" alt="${name}">
      <h1>${name}</h1>
      <p>Public repos: ${repos}</p>
  </section>`;
    });
  }



