import { GetData } from "../getData.js";

export class Page {
  #movieListContainer;
  #movies;

  constructor() {
    this.#movieListContainer = document.querySelector("#container");

    this.#movies = new GetData();
    // console.log(this.#getData);

    // Que diferencia hay entre load y DOMContentLoaded
    // por que con DOMContentLoaded se ejecuta este evento si instancio un objeto de la clase GetData, pero si instacio un objeto
    // y llamo un metodo de ese objeto ya este evento no se ejecuta
    // window.addEventListener("DOMContentLoaded", this.#showMovies);

    //este siempre se ejcuta
    window.addEventListener("load", this.showMovies);
  }

  showMovies() {
    // const data = await this.getData;
    const data = this.#movies;
    console.log(data);
  }

  get movies() {
    return this.#movies;
  }
}
