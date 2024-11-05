import React, { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "components/Navbar/Navbar.jsx";
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import defaultMovies from "/src/assets/data/defaultMovies";

const HomePage = () => <p>Home Page</p>;
const AboutPage = () => <p>About Page</p>;
const ContactPage = () => <p>Contact Page</p>;

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

const App = () => {
  const [movies, setMovies] = useState(defaultMovies);

    // Function to add a new movie
    const addMovie = (newMovie) => {
      const movieAdded = { ...newMovie, id: nextMovieId(movies) };
      setMovies([...movies, movieAdded]);
    };

    const fullMovieContext = {
      addMovie,
      movies,
      setMovies,
    };

    const nextMovieId = (movies) => {
    const maxId = movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) : 0;
    return maxId + 1;
  };

  return (
  <div>
    <Header /> {/* Add the Header here */}
    <NavBar />
    <Outlet context={fullMovieContext}/> {/* This will render the child routes */}
    <Footer />   {/* Add the Footer here */}
  </div>
)};

export default App;
export { HomePage, AboutPage, ContactPage };
