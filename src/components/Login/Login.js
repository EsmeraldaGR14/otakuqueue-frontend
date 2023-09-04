import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleOnChange } from "../../utilities/helpers/onChangeHandler";
import { getUserAPI } from "../../utilities/API/UsersAPI";
import { useUserContext } from "../../utilities/Context/UserContext";

function Login() {
  const [userData, setUserData] = useState({
    username: "",
  });
  const { setUsersData } = useUserContext();

  let navigate = useNavigate();

  function goToRegister() {
    navigate(`/register`);
  }

  async function handleGetUser(e, username) {
    e.preventDefault();
    try {
      let { data } = await getUserAPI(username);
      setUsersData(data);
      navigate("/anime-list");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={(e) => handleGetUser(e, userData.username)}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    onChange={(e) =>
                      handleOnChange(
                        e.target.id,
                        e.target.value,
                        userData,
                        setUserData
                      )
                    }
                    value={userData.username}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  SUBMIT
                </button>
              </form>
              <p className="mt-3">Not a user?</p>
              <button className="btn btn-secondary" onClick={goToRegister}>
                REGISTER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
