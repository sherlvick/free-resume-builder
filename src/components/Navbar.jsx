import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { Links } from "../constants";

const NavBar = React.memo(() => {
  return (
    <div className="navbar-container">
      <header className="header">
        <h3 className="header__title">CV BUILDER</h3>
      </header>
      <nav className="navigation">
        <ul className="navigation__links">
          {Links.map((link) => (
            <li key={link.id} className="navigation__link">
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
});

export default NavBar;