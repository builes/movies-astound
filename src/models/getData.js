export class GetData {
  #baseUrl = "https://api.themoviedb.org/3/movie/";
  #key = "?api_key=69411c96b258f360f365f6cd31778c19";
  #baseUrlImages = "https://image.tmdb.org/t/p/w500";
  #page = 2;

  //El controlador que maneje los botones prev y next deberian estar aca o en page
  //Con estas dos clases es suficiente o que otras clases me recomedaria hacer

  constructor() {}

  async getPopularMovies() {
    try {
      const response = await axios.get(
        `${this.#baseUrl}popular${this.#key}&page=${this.#page}`
      );
      const data = response.data;
      const { page, results } = data;
      return { page, results };
    } catch (error) {
      console.log(error);
    }
  }

  async getMovieById(id) {
    try {
      const response = await axios.get(`${this.#baseUrl}${id}${this.#key}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  getBaseUrlImage() {
    return this.#baseUrlImages;
  }

  getPage() {
    return this.#page;
  }
}
