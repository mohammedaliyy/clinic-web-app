import React, { useEffect, useState } from "react";

import Header from "../../Layout/Header";
import Loader from "../../../common/Loader";
import Footer from "../../Layout/Footer";

import OrderList from "./OrderList";

export default function NurseDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeButton, setActiveButton] = useState("Order List");

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
                activeButton === "Order List" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Order List")}
            >
              <h5>Order List</h5>
            </li>
          </ul>
        </aside>
        <main
          className="col-12 col-md-8 rounded-2 p-3 p-sm-5"
          style={{ backgroundColor: "#ffff" }}
        >
          {activeButton === "Order List" && <OrderList />}
        </main>
      </div>
      <Footer />
    </div>
  );
}
