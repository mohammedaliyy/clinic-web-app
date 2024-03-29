import React from "react";
import { MdDelete } from "react-icons/md";

export default function AllAppointments() {
  return (
    <div style={{ overflow: "scroll", maxHeight: "500px" }}>
      <div className="row d-flex flex-column p-3" style={{ minWidth: "700px" }}>
        <div className="col-10 d-flex justify-content-around pt-2 pb-2 border-top  border-bottom ">
          <span>From</span>
          <span>To</span>
          <span>Profession</span>
          <span>Date</span>
          <span>Time</span>
        </div>
        <div className="row d-flex flex-column gap-3 mt-3">
          <div className="col-12 d-flex justify-content-around bg-success-subtle     p-2 rounded-3">
            <span>Shamshod</span>
            <span>Mr. D</span>
            <span>Cardiologist</span>
            <span>12/01/2024</span>
            <span>12:00 - 13:00</span>
            <MdDelete size={20} />
          </div>
          <div className="col-12 d-flex justify-content-around bg-success-subtle     p-2 rounded-3">
            <span>Shamshod</span>
            <span>Mr. D</span>
            <span>Cardiologist</span>
            <span>12/01/2024</span>
            <span>12:00 - 13:00</span>
            <MdDelete size={20} />
          </div>
          <div className="col-12 d-flex justify-content-around bg-success-subtle     p-2 rounded-3">
            <span>Shamshod</span>
            <span>Mr. D</span>
            <span>Cardiologist</span>
            <span>12/01/2024</span>
            <span>12:00 - 13:00</span>
            <MdDelete size={20} />
          </div>
          <div className="col-12 d-flex justify-content-around bg-success-subtle     p-2 rounded-3">
            <span>Shamshod</span>
            <span>Mr. D</span>
            <span>Cardiologist</span>
            <span>12/01/2024</span>
            <span>12:00 - 13:00</span>
            <MdDelete size={20} />
          </div>
          <div className="col-12 d-flex justify-content-around bg-success-subtle     p-2 rounded-3">
            <span>Shamshod</span>
            <span>Mr. D</span>
            <span>Cardiologist</span>
            <span>12/01/2024</span>
            <span>12:00 - 13:00</span>
            <MdDelete size={20} />
          </div>
          <div className="col-12 d-flex justify-content-around bg-success-subtle     p-2 rounded-3">
            <span>Shamshod</span>
            <span>Mr. D</span>
            <span>Cardiologist</span>
            <span>12/01/2024</span>
            <span>12:00 - 13:00</span>
            <MdDelete size={20} />
          </div>
          <div className="col-12 d-flex justify-content-around bg-success-subtle     p-2 rounded-3">
            <span>Shamshod</span>
            <span>Mr. D</span>
            <span>Cardiologist</span>
            <span>12/01/2024</span>
            <span>12:00 - 13:00</span>
            <MdDelete size={20} />
          </div>
          <div className="col-12 d-flex justify-content-around bg-success-subtle     p-2 rounded-3">
            <span>Shamshod</span>
            <span>Mr. D</span>
            <span>Cardiologist</span>
            <span>12/01/2024</span>
            <span>12:00 - 13:00</span>
            <MdDelete size={20} />
          </div>
          <div className="col-12 d-flex justify-content-around bg-success-subtle     p-2 rounded-3">
            <span>Shamshod</span>
            <span>Mr. D</span>
            <span>Cardiologist</span>
            <span>12/01/2024</span>
            <span>12:00 - 13:00</span>
            <MdDelete size={20} />
          </div>
          <div className="col-12 d-flex justify-content-around bg-success-subtle     p-2 rounded-3">
            <span>Shamshod</span>
            <span>Mr. D</span>
            <span>Cardiologist</span>
            <span>12/01/2024</span>
            <span>12:00 - 13:00</span>
            <MdDelete size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
