import React from "react";
import { useOutletContext, Link } from "react-router-dom";

const HomePage = () => {
  const { movies } = useOutletContext(); // Récupérez la liste des films depuis le contexte

  return (
    <div>
      <h1>Mes Films Favoris</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link> {/* Lien vers la MoviePage */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
