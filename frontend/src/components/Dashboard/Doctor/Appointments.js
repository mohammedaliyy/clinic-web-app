import React, { useState } from "react";

import Accepted from "./Elements/Accepted";
import Waiting from "./Elements/Waiting";

export default function Appointments() {
  const [requestType, setRequestType] = useState("waiting");

  return (
    <div>
      <div className="pb-4">
        <label>
          Status:
          <select
            className="form-select mt-1"
            value={requestType}
            onChange={(e) => {
              setRequestType(e.target.value);
            }}
          >
            <option value="waiting">Waiting</option>
            <option value="accepted">Accepted</option>
          </select>
        </label>
      </div>

      <div className="" style={{ overflow: "scroll", maxHeight: "500px" }}>
        <div
          className="row d-flex flex-column p-3"
          style={{ minWidth: "700px" }}
        >
          <div className="col-12 d-flex justify-content-around pt-2 pb-2 border-top  border-bottom ">
            <span>Name</span>
            <span>Phone Number</span>
            <span>Date</span>
            <span>Time</span>
            <span>Status</span>
          </div>

          {requestType === "waiting" && <Waiting />}
          {requestType === "accepted" && <Accepted />}
        </div>
      </div>
    </div>
  );
}
