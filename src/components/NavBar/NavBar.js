import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "../../utilities/Context/UserContext";

function NavBar() {
  const { usersData } = useUserContext();

  let navigate = useNavigate();

  function navigateUserToLogin() {
    if (!usersData) {
      navigate("/login");
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Otaku Queue
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item" onClick={navigateUserToLogin}>
              <NavLink className="nav-link" to="/anime-list">
                Animes
              </NavLink>
            </li>
            <li className="nav-item" onClick={navigateUserToLogin}>
              <NavLink className="nav-link" to="/watchlist">
                Watchlist
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/anime-list/add-new-anime">
                Add Anime
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              {usersData ? (
                <NavLink className="nav-link" to="/logout">
                  Logout
                </NavLink>
              ) : (
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
