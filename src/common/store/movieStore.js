import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";

export default class MovieStore {
  moviesList = [];
  keyWords = {};
  isLoaded = false;
  isResLoaded = false;
  isLoading = false;
  urlSearch = "https://kinopoiskapiunofficial.tech/api/";
  urlKeyWordsSearch = "v2.1/films/search-by-keyword?keyword=";
  urlActorsSearch = "v1/persons?name=";
  urlTopMoviesSearch = "v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";

  constructor() {
    makeAutoObservable(this);
  }

  loadData = async (url) => {
    if (this.isLoaded || this.isLoading) {
      return;
    }

    this.isLoading = true;

    const data = await axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": "a4540bb8-2ff9-4cbd-b0ed-305d55fc4960",
        },
      })
      .then((response) => {
        runInAction(() => {
          this.moviesList = response.data;
        });
      })
      .catch((error) => {
        // console.error(error);
      });

    runInAction(() => {
      this.isLoading = false;
      this.isLoaded = true;
    });
  };
  setLoaded = (value) => {
    this.isLoaded = value;
  };

  getSearchResults = async (url) => {
    if (this.isResLoaded || this.isLoading) {
      return;
    }

    this.isLoading = true;
    const data = await axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": "a4540bb8-2ff9-4cbd-b0ed-305d55fc4960",
        },
      })
      .then((response) => {
        runInAction(() => {
          this.keyWords = response.data;
        });
      })
      .catch((error) => {
        // console.error(error);
      });

    runInAction(() => {
      this.isLoading = false;
      this.isResLoaded = true;
    });
  };
}
