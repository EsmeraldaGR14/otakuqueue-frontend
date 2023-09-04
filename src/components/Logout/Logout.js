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

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title text-center">Logout</h3>
            </div>
            <div className="card-body">
              <p className="text-center">Are you sure you want to logout?</p>
              <div className="text-center">
                <button className="btn btn-danger" onClick={logoutUser}>
                  LOGOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logout;
