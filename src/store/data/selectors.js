import {createSelector} from "reselect";

import NameSpace from "../name-space";
import {ALL_GENRES, MOVIES_LIKE_THIS_SHOWN, MAX_SHOWN_GENRES} from "../../helpers/const";
import {getCurrentGenre, getCurrentMovie} from "../app/selectors";

export const getMoviePromo = (state) => state[NameSpace.DATA].moviePromo;

export const getMovies = (state) => state[NameSpace.DATA].movies;

export const getMovieReviews = (state) => state[NameSpace.DATA].movieReviews;

export const getMoviesGenres = createSelector(
    getMovies,
    (movies) => {
      const genres = new Set(movies.map((movie) => movie.genre));
      return [ALL_GENRES, ...genres].slice(0, MAX_SHOWN_GENRES);
    }
);

export const getFilteredMoviesByGenre = createSelector(
    getMovies,
    getCurrentGenre,
    (movies, currentGenre) => {
      if (currentGenre === ALL_GENRES) {
        return movies;
      }

      return movies.filter((movie) => movie.genre === currentGenre);
    }
);

export const getFilteredMoviesLikeThis = createSelector(
    getFilteredMoviesByGenre,
    getCurrentMovie,
    (filteredMovies, currentMovie) => filteredMovies
      .filter((movie) => movie.id !== currentMovie.id)
      .slice(0, MOVIES_LIKE_THIS_SHOWN)
);