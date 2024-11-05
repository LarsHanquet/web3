import React from "react";
import { useOutletContext } from "react-router-dom";


const MovieListPage = () => {
const {movies} = useOutletContext();
  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>Genre: {movie.genre}</p>
            <p>Release Date: {movie.releaseDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieListPage;
