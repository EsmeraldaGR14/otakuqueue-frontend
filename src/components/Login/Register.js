import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { handleOnChange } from "../../utilities/helpers/onChangeHandler";
import { createYourUserAPI } from "../../utilities/API/UsersAPI";
import { useUserContext } from "../../utilities/Context/UserContext";

function Register() {
  const [userInfo, setUserInfo] = useState({
    username: "",
  });

  const { usersData } = useUserContext();
  console.log(usersData);

  let navigate = useNavigate();

  function goToLogin() {
    navigate("/login");
  }

  async function createNewUser(e, username) {
    e.preventDefault();

    try {
      await createYourUserAPI(username);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {usersData ? (
        <div>
          <h2>You are already logged in! Please logout to register.</h2>
          <NavLink to="/logout">Logout</NavLink>
        </div>
      ) : (
        <>
          <h2>Register</h2>
          <form onSubmit={(e) => createNewUser(e, userInfo)}>
            <label>Username</label>
            <input
              required
              type="text"
              id="username"
              name="username"
              onChange={(e) =>
                handleOnChange(
                  e.target.id,
                  e.target.value,
                  userInfo,
                  setUserInfo
                )
              }
              value={userInfo.username}
            ></input>
            <button>SUBMIT</button>
          </form>
          <p>Already a user?</p>
          <button onClick={goToLogin}>LOGIN</button>
        </>
      )}
    </div>
  );
}

export default Register;
