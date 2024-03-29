import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

import Loader from "../../common/Loader";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // loader
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1800);
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="d-flex flex-column  justify-content-center align-items-center   p-5 gap-5 ">
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

      <div className="d-flex flex-column align-items-center gap-3  ">
        <h2 className="text-danger ">Sign Up</h2>
        <div>
          <span className="text-bg-danger">Note:</span>{" "}
          <span> Only Patients can sign up!</span>
        </div>
      </div>
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
          <select className="form-select" value="patient">
            <option value="patient" disabled>
              Patient
            </option>
          </select>
        </div>

        <button className="col-12 col-md-6 btn btn-danger  mt-5" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
