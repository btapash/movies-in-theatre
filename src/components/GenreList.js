import React, {useState, useEffect } from 'react'
import GenreMovieList from './GenreMovieList';


const GenreList = (props) => {
    
    const [movies, setMovies]=useState([]);

    const getMovieRequest = async () => {
		const url = `https://api.themoviedb.org/3/movie/now_playing?with_genres=${props.num}&api_key=721c5889c7db7d13bcf51921ee8ca384`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.results) {
            console.log("movies set");
			setMovies(responseJson.results.slice(0,5));
		}
        
	};
    useEffect(() => {
		getMovieRequest();
	}, []);
    

    

    return (
            <div className='row'>
				<GenreMovieList
					movies={movies}
				/>
			</div>
            
        
    )
}

export default GenreList;
