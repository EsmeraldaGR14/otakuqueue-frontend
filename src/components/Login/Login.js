import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleOnChange } from "../../utilities/helpers/onChangeHandler";

function Login() {
  const [userData, setUserData] = useState({
    username: "",
  });

  let navigate = useNavigate();

  function goToRegister() {
    navigate(`/register`);
  }

  return (
    <div>
      <h3>Login</h3>
      <label>Username</label>
      <input
        required
        type="text"
        id="username"
        name="username"
        onChange={(e) =>
          handleOnChange(e.target.id, e.target.value, userData, setUserData)
        }
        value={userData.username}
      ></input>
      <p>Not a user?</p>
      <button onClick={goToRegister}>REGISTER</button>
    </div>
  );
}

export default Login;
