import React from "react";
import "./Header.styles.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/" className="logo">
        HackerNews Clone
      </Link>
      <nav className="menu">
        <Link to="/">New</Link>
        <Link to="/topstories">Top</Link>
        <Link to="/beststories">Best</Link>
        <Link to="/job">Jobs</Link>
        <Link to="/ask">Ask</Link>
        <Link to="/show">Show</Link>
      </nav>
    </header>
  );
};

export default Header;
