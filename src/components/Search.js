import React, { useState } from "react";
import { ResultCard } from "./ResultCard";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=721c5889c7db7d13bcf51921ee8ca384&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="">
      <div className="container">
        <div className="add-content">
          <div className="">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
              className="w-full px-4 py-2 rounded"
            />
          </div>
          <br />

          {results.length > 0 && (
            <div className="movie-grid">
              {results.map((movie) => (
                
                  <ResultCard movie={movie} />
                
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;