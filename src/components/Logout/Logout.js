import React from "react";
import { useUserContext } from "../../utilities/Context/UserContext";
import { useNavigate } from "react-router-dom";

function Logout() {
  const { setUsersData } = useUserContext();

  let navigate = useNavigate();
  function logoutUser() {
    setUsersData(null);
    alert("You are being logged out!");
    navigate("/");
  }

  return <button onClick={logoutUser}>Logout</button>;
}

export default Logout;
