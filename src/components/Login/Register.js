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
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              {usersData ? (
                <h3 className="card-title text-center">
                  You are already logged in! Please logout to register.
                </h3>
              ) : (
                <h3 className="card-title text-center">Register</h3>
              )}
            </div>
            <div className="card-body">
              {usersData ? (
                <div className="text-center">
                  <NavLink to="/logout" className="btn btn-danger">
                    Logout
                  </NavLink>
                </div>
              ) : (
                <form onSubmit={(e) => createNewUser(e, userInfo)}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      required
                      type="text"
                      id="username"
                      name="username"
                      className="form-control"
                      onChange={(e) =>
                        handleOnChange(
                          e.target.id,
                          e.target.value,
                          userInfo,
                          setUserInfo
                        )
                      }
                      value={userInfo.username}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    SUBMIT
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
