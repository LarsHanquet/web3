import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/about")}>About</button>
      <button onClick={() => navigate("/contact")}> Contact</button>
      <button onClick={() => navigate("/add-movie")}>Add Movie</button>
      <button onClick={() => navigate("/movie-list")}>Movie List</button>

    </nav>
  );
};

export default NavBar;
