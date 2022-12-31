// Créer un tableau d'objet contenant les informations sur les films à afficher
const movies = [
  {
    title: "Avatar",
    actors: [
      "Sam Worthington",
      "Zoe Saldana",
      "Sigourney Weaver"
    ],
    genre: "science-fiction",
    poster: "./assets/avatar.jpg"
  },
  {
    title: "Avengers",
    actors: [
      "Robert Downey J",
      "Chris Evans",
      "Mark Ruffalo",
      "Chris Hemsworth",
      "Scarlett Johannson"
    ],
    genre: "fantastique",
    poster: "./assets/avengers.jpeg"
  },
  {
    title: "Elvis",
    actors: [
      "Austin Butler",
      "Tom Hanks"
    ],
    genre: "biographie",
    poster: "./assets/elvis.jpeg"
  },
  {
    title: "Harry Potter",
    actors: [
      "Daniel Radcliffe",
      "Emma Watson",
      "Rupert Grint"
    ],
    genre: "fantastique",
    poster: "./assets/harry-potter.jpg"
  },
  {
    title: "Harry Potter suite",
    actors: [
      "Daniel Radcliffe",
      "Emma Watson",
      "Rupert Grint"
    ],
    genre: "fantastique",
    poster: "./assets/harry-potter-2.jpeg"
  },
  {
    title: "Harry Potter Final",
    actors: [
      "Daniel Radcliffe",
      "Emma Watson",
      "Rupert Grint"
    ],
    genre: "fantastique",
    poster: "./assets/harry-potter-final.jpeg"
  },
  {
    title: "Joker",
    actors: [
      "Joaquin Phoenix",
    ],
    genre: "thriller",
    poster: "./assets/joker.jpeg"
  },
  {
    title: "Matrix",
    actors: [
      "Keanu Reeves",
      "Laurence Fishburne",
    ],
    genre: "science-fiction",
    poster: "./assets/matrix.jpeg"
  },
  {
    title: "The Notebook",
    actors: [
      "Ryan Gosling",
      "Rachel McAdams",
    ],
    genre: "romance",
    poster: "./assets/notebook.jpeg"
  },
  {
    title: "Titanic",
    actors: [
      "Leonardo DiCaprio",
      "Kate Winslet",
    ],
    genre: "romance",
    poster: "./assets/titanic.jpg"
  },
];

const moviesContainer = document.querySelector('#movies-container')

// Créer la fonction qui affichera les films
function displayMovies(moviesArray) {
  moviesArray.map((movie) => {
    //Je crée le conteneur de la fiche du film
    const newDiv = document.createElement('div');
    newDiv.classList.add('movie-container');
    moviesContainer.appendChild(newDiv);
    //Je crée le conteneur du titre du film
    const newP = document.createElement('p');
    newP.innerText = movie.title;
    newDiv.appendChild(newP);
    //Je crée le conteneur de l'affiche du film
    const newImg = document.createElement('img');
    newImg.src = movie.poster;
    newDiv.appendChild(newImg);
    //Je crée le conteneur de la liste des acteurs du film
    const newUl = document.createElement('ul');
    newDiv.appendChild(newUl);
    for (let i = 0; i < movie.actors.length; i++) {
      const newLi = document.createElement('li');
      newLi.innerText = movie.actors[i];
      newUl.appendChild(newLi);
    }
  });
}

//J'appelle la fonction
displayMovies(movies);


// GESTION DU FORMULAIRE

// Je crée l'écouteur d'évènement à la soumission du formulaire
const btnSubmit = document.querySelector('input[type=submit]');

// Je réinitialise l'affichage en supprimant les films déjà affichés
btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  const movieContainer = document.querySelectorAll('.movie-container');
  for (let i = 0; i < movieContainer.length; i++) {
    movieContainer[i].remove();
  }

  //Je crée un tableau ne contenant que les films répondant au critère défini (titre)
  const search = document.querySelector('#search-input').value;
  const searchArray = movies.filter((item) => item.title.toLowerCase().includes(search));

  // J'appelle la fonction d'affichage
  displayMovies(searchArray);
});