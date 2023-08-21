import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleOnChange } from "../../utilities/helpers/onChangeHandler";
import { getUserAPI } from "../../utilities/API/API";
import { useUserContext } from "../../utilities/Context/UserContext";

function Login() {
  const [userData, setUserData] = useState({
    username: "",
  });
  const { usersData, setUsersData } = useUserContext();
  console.log("this is context", usersData);

  let navigate = useNavigate();

  function goToRegister() {
    navigate(`/register`);
  }

  async function handleGetUser(e, username) {
    e.preventDefault();
    try {
      console.log(username);

      let { data } = await getUserAPI(username);
      setUsersData(data);
      navigate();

      console.log(data);
    } catch (error) {
      return error;
    }
  }

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={(e) => handleGetUser(e, userData.username)}>
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
      <p>Not a user?</p>
      <button onClick={goToRegister}>REGISTER</button>
    </div>
  );
}

export default Login;
