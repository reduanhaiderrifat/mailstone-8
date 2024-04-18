import "./Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <h2>this is navbar</h2>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/user">users</NavLink>

        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/todols">Todols</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact us</NavLink>
      </nav>
    </div>
  );
};

export default Header;
