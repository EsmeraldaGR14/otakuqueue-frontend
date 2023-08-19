import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleOnChange } from "../../utilities/helpers/onChangeHandler";

function Register() {
  const [userData, setUserData] = useState({
    username: "",
  });

  let navigate = useNavigate();

  function goToLogin() {
    navigate("/login");
  }

  return (
    <div>
      <h2>Register</h2>
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
      <p>Already a user?</p>
      <button onClick={goToLogin}>LOGIN</button>
    </div>
  );
}

export default Register;
