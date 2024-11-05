import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AddMoviePage = () => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [description, setDescription] = useState("");
  
  const { addMovie } = useOutletContext(); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new movie object
    const newMovie = {
      title,
      genre,
      releaseDate,
      description,
    };

    // Call addMovie function with the new movie object
    addMovie(newMovie);
    
    // Log the movie details (optional)
    console.log(newMovie);

    // Reset form fields after submission
    setTitle("");
    setGenre("");
    setReleaseDate("");
    setDescription("");
    navigate("/movie-list");
  };

  return (
    <div>
      <h1>Add a Movie</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Genre:
            <input
              type="text"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Release Date:
            <input
              type="date"
              value={releaseDate}
              onChange={(e) => setReleaseDate(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMoviePage;
