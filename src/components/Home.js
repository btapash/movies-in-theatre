import React, { useState, useEffect } from 'react';
import AlternativeImage from "./AlternativeImage";
import { Link } from "react-router-dom";
import AddFavourites from './AddFavourites';
import RemoveFavourites from './RemoveFavourites';
import MovieList from './MovieList';
import GenreList from './GenreList';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [favourites, setFavourites] = useState([]);
	

    const getMovieRequest = async () => {
		const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=721c5889c7db7d13bcf51921ee8ca384`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.results) {
			setMovies(responseJson.results);
		}
        
	};
    useEffect(() => {
		getMovieRequest();
	}, []);

    useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.id !== movie.id
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	// for genres 
	const genresId= {28:"Action", 12 : "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Science Fiction", 10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western"}
    let storeId=[];

    // storing genre id
    {movies.map((movie) =>(storeId.push(movie.genre_ids)))};
    let storedId1d = [].concat(...storeId);

    let uniqueId = storedId1d.filter((c, index) => {
        return storedId1d.indexOf(c) === index;
    });

	let check=[18];


    return (
        <>
            <h1 className="text-center p-2">Now Playing in Theatres</h1>
            
            <div className='row'>
				<MovieList
					movies={movies}
					handleFavouritesClick={addFavouriteMovie}
					favouriteComponent={AddFavourites}
				/>
			</div>
			
			<h1 className="text-center pt-4">Genres</h1>

			{uniqueId.map((num) =>(
				<>
					<h1 class="text-center pt-4">Genre: {genresId[num]}</h1>
					<GenreList num={num}  />
					
				</>
				
			))}

			<h1 className="text-center pt-4">Favourites</h1>
			<div className='row'>
				<MovieList
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={RemoveFavourites}
				/>
			</div>        

        </>
    )
}

export default Home
