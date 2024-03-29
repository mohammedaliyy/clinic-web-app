import React from "react";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#fc3041" }}
      className="d-flex flex-column align-items-center  mt-3 p-4 text-white gap-3 "
    >
      <div>
        <h2 className="">Online Clinic</h2>
      </div>
      <div className="d-flex flex-column flex-md-row align-items-center gap-3 gap-md-5">
        <span>Contact: +998973005568</span>
        <span>Email: shamshod@gmail.com</span>
        <span>Address: 123 Fake Street, Faketown, Fakeland, 12345</span>
      </div>
      <div className="pt-3">
        <span>© 2024 Online Clinic. All rights reserved.</span>
      </div>
    </footer>
  );
}
