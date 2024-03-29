import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div
      className="d-flex justify-content-between rounded-3 p-3 m-3"
      style={{ backgroundColor: "#ffff" }}
    >
      <h2>Online Clinic</h2>
      <Link to="/" className="btn btn-danger  align-self-center ">
        Log Out
      </Link>
    </div>
  );
}
