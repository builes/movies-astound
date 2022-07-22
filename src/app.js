import { Page } from "./models/ui/page.js";
import { GetData } from "./models/getData.js";

const container = document.querySelector("#container");

// por que aca se puede usar await sin estar en una funcion asincrona
const getData = new GetData();
const data = await getData.getPopularMovies();
const { page, results: movies } = data;
const baseImageUrl = getData.getBaseUrlImage();

let moviesHTML = "";

movies.forEach((movie) => {
  const { id, title, poster_path } = movie;
  moviesHTML += `
  <h3>${title}</h3>
  <div id=${id}>
    <a href="movie.html?id=${id}" target="_blank"><img class="information" src="${baseImageUrl}${poster_path}" alt=""></a>

    <a href="movie.html?id=${id}" target="_blank">Sipnasis</a>

  </div>
  `;
});
container.innerHTML = moviesHTML;

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("information")) {
    const id = e.target.parentElement.id;
    getData.getMovieById(id);
  }
});

// const moviesListingPage = new Page();
