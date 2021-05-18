import { GET_MOVIE_INFO } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_MOVIE_INFO:
      return {
        ...state,
        movieInfo: action.payload,
      };

    default:
      return state;
  }
};
