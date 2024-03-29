import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/auth/signup");
  };
  return (
    <div className="d-flex flex-column  justify-content-center  align-items-center gap-4">
      <h1 className="text-center">Welcome to Online Clinic</h1>
      <div className="d-flex flex-column gap-2 ">
        <button className="btn btn-danger " onClick={handleSignUp}>
          Sign Up
        </button>
        <span>
          Do you already have an account? Please{" "}
          <Link to="/auth/signin" className="text-danger">
            sign in
          </Link>
        </span>
      </div>
    </div>
  );
}
