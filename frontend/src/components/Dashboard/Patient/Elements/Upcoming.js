import React from "react";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function Upcoming() {
  return (
    <div className="d-flex flex-column pt-4 gap-2">
      <div className="d-flex flex-column flex-sm-row align-items-center justify-content-sm-around  gap-3 gap-sm-0  p-2 bg-success-subtle    rounded-2">
        <span>To: Cardiologist</span>
        <span>On: 12/01/2024</span>
        <span>At: 12:00 - 13:00</span>
        <div className="d-flex gap-4 ">
          <MdModeEdit size={20} />
          <MdDelete size={20} />
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row align-items-center justify-content-sm-around  gap-3 gap-sm-0  p-2 bg-success-subtle    rounded-2">
        <span>To: Cardiologist</span>
        <span>On: 12/01/2024</span>
        <span>At: 12:00 - 13:00</span>
        <div className="d-flex gap-4 ">
          <MdModeEdit size={20} />
          <MdDelete size={20} />
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row align-items-center justify-content-sm-around  gap-3 gap-sm-0  p-2 bg-success-subtle    rounded-2">
        <span>To: Cardiologist</span>
        <span>On: 12/01/2024</span>
        <span>At: 12:00 - 13:00</span>
        <div className="d-flex gap-4 ">
          <MdModeEdit size={20} />
          <MdDelete size={20} />
        </div>
      </div>
    </div>
  );
}
