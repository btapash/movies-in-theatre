import React, { useContext } from "react";
import AlternativeImage from "./AlternativeImage";

export const ResultCard = ({ movie }) => {

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path?
        (<img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
            
          />)
          :(<AlternativeImage></AlternativeImage>)
        }
       
      </div>

      
    </div>
  );
};
