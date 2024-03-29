import React, { useEffect, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import Loader from "../../common/Loader";
const users = {
  doctor: { password: "123", username: "doctor" },
  admin: { password: "admin", username: "admin" },
  patient: { password: "123", username: "patient" },
  lab: { password: "123", username: "lab" },
  nurse: { password: "123", username: "nurse" },
};

export default function SignIn() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  // toggling password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisibility((prev) => !prev);
  };

  //   visibility icon
  const passwordVisibilityIconStyle = {
    position: "absolute",
    top: "50%",
    right: "10px",
    cursor: "pointer",
    transform: "translateY(-50%)",
  };

  //   handlechange role
  const handleChangeRole = (e) => {
    setRole(e.target.value);
  };

  // notify user
  const notify = (message, type) =>
    toast[type](message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  //   submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      users[role] &&
      users[role].username === username &&
      users[role].password === password
    ) {
      // notifying success then navigating
      notify("Successfully signed in!", "success");
      setTimeout(() => {
        navigate(`/dashboard/${role}/${username}`);
      }, 2000);
    } else {
      // notifying error
      notify("Invalid input!", "error");
    }

    // clearing inputs
    setPassword("");
    setRole("");
    setUsername("");
  };

  // loader
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1800);
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="d-flex flex-column  justify-content-center align-items-center  p-5 gap-5 ">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h2 className="text-danger ">Sign In</h2>
      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center row gap-3"
      >
        <div className="d-flex flex-column gap-2 col-12 col-md-6">
          <label htmlFor="username">Username:</label>
          <input
            className="form-control"
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="d-flex flex-column gap-2 col-12 col-md-6">
          <label htmlFor="password">Password:</label>

          <div style={{ position: "relative" }}>
            <input
              className="form-control"
              id="password"
              type={passwordVisibility ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!passwordVisibility ? (
              <FaRegEye
                style={passwordVisibilityIconStyle}
                onClick={togglePasswordVisibility}
              />
            ) : (
              <FaRegEyeSlash
                style={passwordVisibilityIconStyle}
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
        </div>

        <div className="d-flex flex-column gap-2 col-12 col-md-6">
          <label>Role:</label>
          <select
            className="form-select"
            value={role}
            onChange={handleChangeRole}
          >
            <option disabled value="">
              Choose...
            </option>
            <option value="admin">Admin</option>

            <option value="doctor">Doctor</option>

            <option value="patient">Patient</option>

            <option value="lab">Lab Tech</option>

            <option value="nurse">Nurse</option>
          </select>
        </div>

        <button className="col-12 col-md-6 btn btn-danger  mt-5" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}
