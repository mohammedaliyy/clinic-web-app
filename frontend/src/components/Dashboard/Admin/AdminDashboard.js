import React, { useEffect, useState } from "react";

import Header from "../../Layout/Header";
import Loader from "../../../common/Loader";
import Footer from "../../Layout/Footer";

import Doctors from "./Doctors";
import Patients from "./Patients";
import AllAppointments from "./AllAppointments";

export default function AdminDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeButton, setActiveButton] = useState("Doctors");

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
                activeButton === "Doctors" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Doctors")}
            >
              <h5>Doctors</h5>
            </li>
            <li
              className={`p-4 mt-2 ${
                activeButton === "Patients" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Patients")}
            >
              <h5>Patients</h5>
            </li>
            <li
              className={`p-4 mt-2 ${
                activeButton === "All appointments" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("All appointments")}
            >
              <h5>All appointments</h5>
            </li>
          </ul>
        </aside>
        <main
          className="col-12 col-md-8 rounded-2 p-5"
          style={{ backgroundColor: "#ffff" }}
        >
          {activeButton === "Doctors" && <Doctors />}
          {activeButton === "Patients" && <Patients />}
          {activeButton === "All appointments" && <AllAppointments />}
        </main>
      </div>
      <Footer />
    </div>
  );
}
