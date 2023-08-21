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

  function getUser() {}

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={getUser(userData.username)}>
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
        <button>SUBMIT</button>
      </form>
      <p>Already a user?</p>
      <button onClick={goToLogin}>LOGIN</button>
    </div>
  );
}

export default Register;
