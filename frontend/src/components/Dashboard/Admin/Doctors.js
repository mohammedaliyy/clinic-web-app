import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

export default function Doctors() {
  const [toggle, setToggle] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [doctorType, setDoctorType] = useState("");

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

  // toggle doctor adding from
  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  // submit form (add doctor)
  const handleSubmit = (e) => {
    e.preventDefault();

    notify("Doctor added successfully!.", "success");
    setUsername("");
    setPassword("");
    setDoctorType("");
    setToggle((prev) => !prev);
  };

  return (
    <>
      <div style={{ overflow: "scroll", maxHeight: "500px" }}>
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
        <div
          className="row d-flex flex-column p-3"
          style={{ minWidth: "700px" }}
        >
          <div className="col-9 d-flex justify-content-around pt-2 pb-2 border-top  border-bottom ">
            <span>Username</span>
            <span>Password</span>
            <span>Job title</span>
          </div>

          <div className="row d-flex flex-column gap-3 mt-3">
            <div className="col-12 d-flex justify-content-around bg-primary-subtle  p-2 rounded-3">
              <span>Shamshod</span>
              <span className="align-self-center">1234567</span>
              <span>Cardiologist</span>
              <MdDelete size={20} />
            </div>
            <div className="col-12 d-flex justify-content-around bg-primary-subtle  p-2 rounded-3">
              <span>Shamshod</span>
              <span className="align-self-center">1234567</span>
              <span>Cardiologist</span>
              <MdDelete size={20} />
            </div>
            <div className="col-12 d-flex justify-content-around bg-primary-subtle  p-2 rounded-3">
              <span>Shamshod</span>
              <span className="align-self-center">1234567</span>
              <span>Cardiologist</span>
              <MdDelete size={20} />
            </div>
            <div className="col-12 d-flex justify-content-around bg-primary-subtle  p-2 rounded-3">
              <span>Shamshod</span>
              <span className="align-self-center">1234567</span>
              <span>Cardiologist</span>
              <MdDelete size={20} />
            </div>
            <div className="col-12 d-flex justify-content-around bg-primary-subtle  p-2 rounded-3">
              <span>Shamshod</span>
              <span className="align-self-center">1234567</span>
              <span>Cardiologist</span>
              <MdDelete size={20} />
            </div>
            <div className="col-12 d-flex justify-content-around bg-primary-subtle  p-2 rounded-3">
              <span>Shamshod</span>
              <span className="align-self-center">1234567</span>
              <span>Cardiologist</span>
              <MdDelete size={20} />
            </div>
            <div className="col-12 d-flex justify-content-around bg-primary-subtle  p-2 rounded-3">
              <span>Shamshod</span>
              <span className="align-self-center">1234567</span>
              <span>Cardiologist</span>
              <MdDelete size={20} />
            </div>
            <div className="col-12 d-flex justify-content-around bg-primary-subtle  p-2 rounded-3">
              <span>Shamshod</span>
              <span className="align-self-center">1234567</span>
              <span>Cardiologist</span>
              <MdDelete size={20} />
            </div>
            <div className="col-12 d-flex justify-content-around bg-primary-subtle  p-2 rounded-3">
              <span>Shamshod</span>
              <span className="align-self-center">1234567</span>
              <span>Cardiologist</span>
              <MdDelete size={20} />
            </div>
            <div className="col-12 d-flex justify-content-around bg-primary-subtle  p-2 rounded-3">
              <span>Shamshod</span>
              <span className="align-self-center">1234567</span>
              <span>Cardiologist</span>
              <MdDelete size={20} />
            </div>
            <div className="col-12 d-flex justify-content-around bg-primary-subtle  p-2 rounded-3">
              <span>Shamshod</span>
              <span className="align-self-center">1234567</span>
              <span>Cardiologist</span>
              <MdDelete size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 d-flex  justify-content-end ">
        {!toggle && (
          <button className="btn btn-primary" onClick={handleClick}>
            Add Doctor
          </button>
        )}
      </div>
      {toggle && (
        <div className="pe-3 ps-3 pt-4 pb-4 border rounded-3 bg-body-tertiary  ">
          <form
            className="row d-flex justify-content-center gap-4"
            onSubmit={handleSubmit}
          >
            <label className="col-12 col-lg-8">
              Username:
              <input
                className="form-control "
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                type="text"
              />
            </label>
            <label className="col-12 col-lg-8">
              Password:
              <input
                className="form-control "
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="text"
              />
            </label>

            <label className="col-12 col-lg-8">
              Doctor Type:
              <select
                className="form-select "
                value={doctorType}
                onChange={(e) => {
                  setDoctorType(e.target.value);
                }}
              >
                <option disabled value="">
                  Select...
                </option>
                <option value="cardiologist">Cardiologist</option>
                <option value="dermatologist">Dermatologist</option>
                <option value="gynecologist">Gynecologist</option>
              </select>
            </label>

            <div className="col-12 d-flex  justify-content-center ">
              <button className="btn btn-primary" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
