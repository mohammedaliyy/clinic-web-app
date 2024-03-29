import React from "react";
import { MdDelete } from "react-icons/md";

export default function Patients() {
  return (
    <div style={{ overflow: "scroll", maxHeight: "500px" }}>
      <div className="row d-flex flex-column p-3" style={{ minWidth: "700px" }}>
        <div className="col-8 d-flex justify-content-around pt-2 pb-2 border-top  border-bottom ">
          <span>Username</span>
          <span>Password</span>
        </div>
        <div className="row d-flex flex-column gap-3 mt-3">
          <div className="col-12 d-flex justify-content-around bg-danger-subtle    p-2 rounded-3">
            <span>Shamshod</span>
            <span className="align-self-center">1234567</span>
            <MdDelete size={20} />
          </div>
          <div className="col-12 d-flex justify-content-around bg-danger-subtle    p-2 rounded-3">
            <span>Shamshod</span>
            <span className="align-self-center">1234567</span>
            <MdDelete size={20} />
          </div>
          <div className="col-12 d-flex justify-content-around bg-danger-subtle    p-2 rounded-3">
            <span>Shamshod</span>
            <span className="align-self-center">1234567</span>
            <MdDelete size={20} />
          </div>
          <div className="col-12 d-flex justify-content-around bg-danger-subtle    p-2 rounded-3">
            <span>Shamshod</span>
            <span className="align-self-center">1234567</span>
            <MdDelete size={20} />
          </div>
          <div className="col-12 d-flex justify-content-around bg-danger-subtle    p-2 rounded-3">
            <span>Shamshod</span>
            <span className="align-self-center">1234567</span>
            <MdDelete size={20} />
          </div>
          <div className="col-12 d-flex justify-content-around bg-danger-subtle    p-2 rounded-3">
            <span>Shamshod</span>
            <span className="align-self-center">1234567</span>
            <MdDelete size={20} />
          </div>
          <div className="col-12 d-flex justify-content-around bg-danger-subtle    p-2 rounded-3">
            <span>Shamshod</span>
            <span className="align-self-center">1234567</span>
            <MdDelete size={20} />
          </div>
          <div className="col-12 d-flex justify-content-around bg-danger-subtle    p-2 rounded-3">
            <span>Shamshod</span>
            <span className="align-self-center">1234567</span>
            <MdDelete size={20} />
          </div>
          <div className="col-12 d-flex justify-content-around bg-danger-subtle    p-2 rounded-3">
            <span>Shamshod</span>
            <span className="align-self-center">1234567</span>
            <MdDelete size={20} />
          </div>
          <div className="col-12 d-flex justify-content-around bg-danger-subtle    p-2 rounded-3">
            <span>Shamshod</span>
            <span className="align-self-center">1234567</span>
            <MdDelete size={20} />
          </div>
          <div className="col-12 d-flex justify-content-around bg-danger-subtle    p-2 rounded-3">
            <span>Shamshod</span>
            <span className="align-self-center">1234567</span>
            <MdDelete size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
