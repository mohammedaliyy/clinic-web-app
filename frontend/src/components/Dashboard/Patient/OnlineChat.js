import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";

export default function OnlineChat() {
  const [doctorType, setDoctorType] = useState("");
  const [text, setText] = useState("");
  return (
    <div>
      <label>
        Select Doctor:
        <select
          className="form-select"
          value={doctorType}
          onChange={(e) => setDoctorType(e.target.value)}
        >
          <option disabled value="">
            Select...
          </option>
          <option value="cardiologist">Cardiologist</option>
          <option value="dermatologist">Dermatologist</option>
          <option value="gynecologist">Gynecologist</option>
        </select>
      </label>
      <div>
        <div
          className="bg-body-secondary rounded-2 mt-2 mb-2"
          style={{ minHeight: "500px" }}
        ></div>
        <div className="row d-flex justify-content-around justify-content-md-center    bg-body-secondary p-3 rounded-5 ">
          <div className="col-10 col-md-8">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="form-control rounded-5 "
            />
          </div>
          <div className="col-2 ">
            <IoIosSend color="#fc3041" size={35} />
          </div>
        </div>
      </div>
    </div>
  );
}
