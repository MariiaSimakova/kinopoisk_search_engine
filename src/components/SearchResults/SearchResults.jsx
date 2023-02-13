import { observer, inject } from "mobx-react";
import { useEffect } from "react";
import MovieList from "../MovieList/MovieList";

function SearchResults({
  input,
  getSearchResults,
  urlSearch,
  urlKeyWordsSearch,
  urlActorsSearch,
  search,
  isResLoaded,
}) {
  const keyWordsSearch = `${urlSearch}${urlKeyWordsSearch}${input}`;
  const actorsSearch = `${urlSearch}${urlActorsSearch}${input}`;

  useEffect(() => {
    getSearchResults(keyWordsSearch);
    getSearchResults(actorsSearch);
  }, [input]);

  return (
    <>
      <div className="container">
        {isResLoaded ? (
          search.map((movie) => {
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
  const {
    urlSearch,
    urlKeyWordsSearch,
    urlActorsSearch,
    getSearchResults,
    keyWords,
    isResLoaded,
  } = movieStore;
  const search = JSON.parse(JSON.stringify(keyWords)).films;
  console.log(search);

  return {
    getSearchResults,
    urlSearch,
    urlKeyWordsSearch,
    urlActorsSearch,
    search,
    isResLoaded,
  };
})(observer(SearchResults));
