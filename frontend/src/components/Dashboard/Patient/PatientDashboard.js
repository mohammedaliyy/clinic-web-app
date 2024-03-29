import React, { useEffect, useState } from "react";

import Header from "../../Layout/Header";
import Loader from "../../../common/Loader";
import Footer from "../../Layout/Footer";

import HomePage from "./HomePage";
import MyAppointments from "./MyAppointments";
import TakeAppointment from "./TakeAppointment";
import HealthEducation from "./HealthEducation";
import DoctorsResponse from "./DoctorsResponse";
import OnlineChat from "./OnlineChat";
import Nurse from "./Nurse";
import Laboratory from "./Laboratory";

export default function PatientDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeButton, setActiveButton] = useState("Home Page");

  // button clicks
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  // loader
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1800);
  }, []);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="dashboard">
      <Header />
      <div className="d-flex justify-content-around flex-column  flex-md-row gap-2 me-3 ms-3 me-md-0 ms-md-0">
        <aside
          style={{ backgroundColor: "#ffff", height: "min-content" }}
          className="col-12 col-md-3  p-0 rounded-2"
        >
          <ul className="list-unstyled d-flex flex-column m-2 mb-0">
            <li
              className={`p-4 mt-1 ${
                activeButton === "Home Page" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Home Page")}
            >
              <h5>Home Page</h5>
            </li>
            <li
              className={`p-4 mt-2 ${
                activeButton === "Take An Appointment" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Take An Appointment")}
            >
              <h5>Take An Appointment</h5>
            </li>
            <li
              className={`p-4 mt-2 ${
                activeButton === "My Appointments" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("My Appointments")}
            >
              <h5>My Appointments</h5>
            </li>
            <li
              className={`p-4 mt-2 ${
                activeButton === "Health Education" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Health Education")}
            >
              <h5>Health Education</h5>
            </li>
            <li
              className={`p-4 mt-2 ${
                activeButton === "Doctor's Response" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Doctor's Response")}
            >
              <h5>Doctor's Response</h5>
            </li>
            <li
              className={`p-4 mt-2 ${
                activeButton === "Online Chat" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Online Chat")}
            >
              <h5>Online Chat</h5>
            </li>
            <li
              className={`p-4 mt-2 ${activeButton === "Nurse" ? "active" : ""}`}
              onClick={() => handleButtonClick("Nurse")}
            >
              <h5>Nurse</h5>
            </li>
            <li
              className={`p-4 mt-2 ${
                activeButton === "Laboratory" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Laboratory")}
            >
              <h5>Laboratory</h5>
            </li>
          </ul>
        </aside>
        <main
          className="col-12 col-md-8 rounded-2 p-3 p-sm-5"
          style={{ backgroundColor: "#ffff", height: "fit-content" }}
        >
          {activeButton === "Home Page" && <HomePage />}
          {activeButton === "Take An Appointment" && <TakeAppointment />}
          {activeButton === "My Appointments" && <MyAppointments />}
          {activeButton === "Health Education" && <HealthEducation />}
          {activeButton === "Doctor's Response" && <DoctorsResponse />}
          {activeButton === "Online Chat" && <OnlineChat />}
          {activeButton === "Nurse" && <Nurse />}
          {activeButton === "Laboratory" && <Laboratory />}
        </main>
      </div>
      <Footer />
    </div>
  );
}
