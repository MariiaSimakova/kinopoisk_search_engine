import { observer, inject } from "mobx-react";
import { useEffect } from "react";
import "../Home/home.scss";
import MovieList from "../MovieList/MovieList";

function Home({ topMovies, isLoaded }) {
  return (
    <>
      <div className="container">
        {isLoaded ? (
          topMovies.map((movie) => {
            return <MovieList key={movie.filmId} {...movie} />;
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default inject(({ movieStore }) => {
  const { moviesList, loadData, isLoaded, urlSearch, urlTopMoviesSearch } =
    movieStore;
  const topMovies = JSON.parse(JSON.stringify(moviesList)).films;
  const topMoviesSerch = `${urlSearch}${urlTopMoviesSearch}`;
  useEffect(() => {
    loadData(topMoviesSerch);
  }, []);

  return {
    topMovies,
    isLoaded,
  };
})(observer(Home));
