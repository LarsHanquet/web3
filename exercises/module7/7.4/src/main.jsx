import React from "react";
import ReactDOM from "react-dom/client";
import App from "components/App/App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "components/pages/HomePage.jsx";
import AboutPage from "components/pages/AboutPage.jsx";
import ContactPage from "components/pages/ContactPage.jsx";
import AddMoviePage from "components/pages/AddMoviePage.jsx";
import MovieListPage from "components/pages/MovieListPage.jsx";
import MoviePage from "components/pages/MoviePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Use App as the main element
    children: [
      {
        path: "",
        element: <HomePage />, // Render HomePage at the root path
      },
      {
        path: "about",
        element: <AboutPage />, // Render AboutPage
      },
      {
        path: "contact",
        element: <ContactPage />, // Render ContactPage
      },
      {
        path: "add-movie",
        element: <AddMoviePage />,
      },
      {
        path: "movie-list", 
        element: <MovieListPage />, 
      },
      {
      path: "movie/:id", 
      element: <MoviePage />, 
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
