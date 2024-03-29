import React from "react";
import homepageimage from "../../../images/homepage.png";

export default function HomePage() {
  return (
    <div className="row">
      <div className="col-12 col-lg-6 ">
        <img
          className="img-fluid "
          src={homepageimage}
          alt="illustration for home page"
        />
      </div>
      <div className="col-12 col-lg-6 d-flex flex-column  gap-4">
        <h2>About Us</h2>
        <p style={{ textAlign: "justify" }}>
          Welcome to our online clinic, where we provide accessible and
          convenient healthcare services to patients in the comfort of their own
          homes. Our platform connects patients with experienced doctors and
          healthcare professionals, offering virtual consultations, appointment
          scheduling, and secure medical records management. <br /> <br /> With
          a user-friendly interface and a dedicated team of healthcare
          providers, we prioritize delivering high-quality care, personalized
          attention, and peace of mind to every patient. Embracing technology
          advancements, we bring expert medical care right to your fingertips,
          placing your health and well-being as our top priority.
        </p>
      </div>
    </div>
  );
}
