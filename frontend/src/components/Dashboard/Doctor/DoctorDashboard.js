import React, { useEffect, useState } from "react";

import Header from "../../Layout/Header";
import Loader from "../../../common/Loader";
import Footer from "../../Layout/Footer";

import Appointments from "./Appointments";
import OnlineChat from "./OnlineChat";

export default function DoctorDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeButton, setActiveButton] = useState("Appointments");

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
                activeButton === "Appointments" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Appointments")}
            >
              <h5>Appointments</h5>
            </li>
            <li
              className={`p-4 mt-2 ${
                activeButton === "Online Chat" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Online Chat")}
            >
              <h5>Online Chat</h5>
            </li>
          </ul>
        </aside>
        <main
          className="col-12 col-md-8 rounded-2 p-3 p-sm-5"
          style={{ backgroundColor: "#ffff" }}
        >
          {activeButton === "Appointments" && <Appointments />}
          {activeButton === "Online Chat" && <OnlineChat />}
        </main>
      </div>
      <Footer />
    </div>
  );
}
