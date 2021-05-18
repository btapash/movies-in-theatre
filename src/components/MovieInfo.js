import React, { useContext, useEffect } from "react";
import MovieContext from "../context/movie/movieContext";
import AlternativeImage from "./AlternativeImage";

import { Link } from "react-router-dom";

const MovieInfo = ({ match }) => {
  const movieContext = useContext(MovieContext);
  const { movieInfo, getMovieInfo } = movieContext;

  useEffect(() => {
    getMovieInfo(match.params.id);
    //eslint-disable-next-line,
  }, []);

  const {
    poster_path,
    backdrop_path,
    title,
    genres = [],
    release_date,
    vote_average,
    credits = { cast: [], crew: [] },
    overview,
    runtime,
  } = movieInfo;
  // const year=release_date.slice(0,4);
  //Get genres
  const genresArr = [];

  genres.forEach((genre) => {
    if (genre.name) {
      genresArr.push(genre.name);
    }
  });
 
  const genre2 = genresArr.slice(0, -1);
  const genrename = genre2.join(", ");

  //Get director

  const directorArr = [];
  credits.crew.forEach((entry) => {
    if (entry.job === "Director") {
      directorArr.push(entry.name);
    }
  });

  const getDirector = directorArr.length ? directorArr.slice(0, 1) : "";
  const director = getDirector.toString();

  //Get actors
  const actors = credits.cast.length
    ? credits.cast
        .slice(0, Math.min(credits.cast.length, 3))
        .map((c) => c.name)
        .join(", ")
    : "";

  return (
    <>
        <div className="row" >
          <img
                src={"https://image.tmdb.org/t/p/w400/" + poster_path}
                alt=""
                className="col-3 p-4"
          />
          
          <div className="col-8 p-4"  >
            <h3>{title} ({vote_average})</h3>
            <p className="">
                {release_date} | {runtime} mins | {director}
              </p>
            
              <p className="">
                Cast: {actors}
              </p>
              <p className="">Movie description: {overview}</p>
          </div>
          
        </div>         
  </>
  );
};

export default MovieInfo;
