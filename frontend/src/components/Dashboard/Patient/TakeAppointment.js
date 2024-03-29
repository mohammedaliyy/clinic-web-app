import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
// const availableHours = [];

// setting minimum date for select date inputs
const TODAY = new Date().toISOString().split("T")[0];

export default function TakeAppointment() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [contact, setContact] = useState("");
  const [doctorType, setDoctorType] = useState("");
  const [date, setDate] = useState("");
  const [chosenHour, setChosenHour] = useState("");

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

  // handle hour
  const handleHour = (e) => {
    setChosenHour(e.target.getAttribute("data-value"));
    console.log(e.target.getAttribute("data-value"));
  };

  // handling form
  const handleSubmit = (e) => {
    e.preventDefault();

    // checking whether input empty or not
    if (
      name.trim() === "" ||
      surname.trim() === "" ||
      contact.trim() === "" ||
      doctorType.trim() === "" ||
      date.trim() === "" ||
      chosenHour.trim() === ""
    ) {
      notify("One of the inputs is empty or select a date/hour", "error");
    } else {
      notify(
        "You took an appointment successfully!. Wait doctors' response",
        "success"
      );
    }

    // clearing inputs after submitting data

    setName("");
    setSurname("");
    setContact("");
    setDoctorType("");
    setDate("");
    setChosenHour("");
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className="d-flex flex-column">
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

      <form
        onSubmit={handleSubmit}
        className="row d-flex flex-column gap-4 align-content-center "
      >
        <label className="col-12 col-lg-8 d-flex flex-column gap-2 ">
          Name:
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control "
            type="text"
          />
        </label>
        <label className="col-12 col-lg-8  d-flex flex-column gap-2">
          Surname:
          <input
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="form-control"
            type="text"
          />
        </label>
        <label className="col-12 col-lg-8  d-flex flex-column gap-2">
          Contact info (phone/email):
          <input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="form-control "
            type="text"
          />
        </label>

        <label className="col-12 col-lg-8  d-flex flex-column gap-2">
          Select Doctor Type:
          <select
            className="form-select"
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

        <label className="col-12 col-lg-8 ">
          Select Date:
          <input
            min={TODAY}
            type="date"
            className="form-control"
            value={date}
            onChange={handleDate}
          />
        </label>

        <div className="col-12 col-lg-8 ">
          <h5>Available Hours (choose one):</h5>
          <div className="d-flex gap-2 flex-wrap ">
            <span
              style={{
                opacity: "0.4",
                backgroundColor: "grey",
                padding: "5px",
                color: "white",
                borderRadius: "10px",
              }}
            >
              00:00
            </span>

            <span
              data-value="12:00/13:00"
              onClick={handleHour}
              style={{
                backgroundColor: "green",
                padding: "5px",
                color: "white",
                borderRadius: "10px",
              }}
            >
              12:00 - 13:00
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary col-12 col-md-3 align-self-center mt-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
