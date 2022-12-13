import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { Links } from "../../constants";

const NavBar = React.memo(() => {
  return (
    <div className="navbar-container">
      <header className="header">
        <h3 className="header__title">BUILDER</h3>
      </header>
      <nav className="navigation">
        <ul className="navigation__links">
          {Links.map((link) => (
            <Link to={link.to}>
              <li key={link.id} className="navigation__link">
                {link.label}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
});

export default NavBar;
