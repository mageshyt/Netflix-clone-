import { movieType } from "./movie.type";

const INITIAL_STATE = {
  movie: null,
};
const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case movieType.SELECTED_MOVIE:
      return {
        ...state,
        movie: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
