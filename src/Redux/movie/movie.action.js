import { movieType } from "./movie.type";

export const selectedMovie = (movie) => ({
  type: movieType.SELECTED_MOVIE,
  payload: movie,
});
