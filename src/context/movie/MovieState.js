import React, { useReducer } from "react";
import axios from 'axios';
import MovieContext from "./movieContext";
import MovieReducer from "./movieReducer";
import { GET_MOVIE_INFO } from "../types";

const MovieState = (props) => {
  const initialState = {
    movies: [],
    movieInfo: {},
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  //Movie Info

  const getMovieInfo = async (id) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=721c5889c7db7d13bcf51921ee8ca384&append_to_response=credits`
    );
    dispatch({
      type: GET_MOVIE_INFO,
      payload: response.data,
    });
  };

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        movieInfo: state.movieInfo,
        searchMovies,
        getMovieInfo,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
