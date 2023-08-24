import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "../../utilities/Context/UserContext";

function NavBar() {
  const { usersData } = useUserContext();
  console.log(usersData);

  let navigate = useNavigate();

  function navigateUserToLogin() {
    if (!usersData) {
      navigate("/login");
    }
  }

  return (
    <nav>
      <h2>Otaku Queue</h2>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div onClick={navigateUserToLogin}>
        <NavLink to="/anime-list">Animes</NavLink>
      </div>
      <div onClick={navigateUserToLogin}>
        <NavLink to="/watchlist">Watchlist</NavLink>
      </div>

      <div>
        <NavLink to="/register">Register</NavLink>
      </div>
      <div>
        {usersData ? (
          <NavLink to="/logout">Logout</NavLink>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
