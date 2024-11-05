import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

const MoviePage = () => {
  const { movies } = useOutletContext(); // Récupérez la liste des films depuis le contexte
  const { id } = useParams(); // Récupérez l'id du film depuis l'URL

  // Trouver le film correspondant à l'id
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <p>Film non trouvé.</p>; // Gérer le cas où le film n'est pas trouvé
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Date de sortie:</strong> {movie.releaseDate}</p>
      <p><strong>Description:</strong> {movie.description}</p>
    </div>
  );
};

export default MoviePage;
