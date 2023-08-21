import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/anime-list">Animes</NavLink>
      </div>
      <div>
        <NavLink to="/:user-id/watchlist">Watchlist</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
