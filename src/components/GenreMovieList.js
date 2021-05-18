import React from 'react';
import AlternativeImage from "./AlternativeImage";
import { Link } from "react-router-dom";
import "./MovieList.css";

const GenreMovieList = (props) => {
    const { movies }=props;
    

	return (
		<>
            <div className="movie-grid">
			{movies.map((movie) => (

                <div className="image-container">
                    {/* <div className="overlay"></div> */}
                    {movie.poster_path ? (
                        <Link to={`/movie/${movie.id}`}>
                        <img
                        src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path}
                        alt=""
                        className="my-2 px-2"
                        />
                        </Link>
                    ) : (
                        <Link to={`/movie/${movie.id}`}>
                        <AlternativeImage></AlternativeImage>
                        </Link>
                    )}
                </div>  
			))}
            </div>
		</>
	);
};

export default GenreMovieList;
