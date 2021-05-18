import React from 'react';
import AlternativeImage from "./AlternativeImage";
import { Link } from "react-router-dom";
import "./MovieList.css";

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
            <div className="movie-grid">
			{props.movies.map((movie) => (

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
                    <div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay '
					>
						<FavouriteComponent />
					</div>
                
                </div>  
			))}
            </div>
		</>
	);
};

export default MovieList;
