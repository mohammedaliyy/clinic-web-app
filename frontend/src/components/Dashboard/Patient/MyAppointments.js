import React, { useState } from "react";
import Upcoming from "./Elements/Upcoming";
import History from "./Elements/History";
export default function MyAppointments() {
  const [recordType, setRecordType] = useState("upcoming");
  return (
    <div>
      <label>
        Patient Record:
        <select
          className="form-select mt-1"
          value={recordType}
          onChange={(e) => {
            setRecordType(e.target.value);
          }}
        >
          <option value="upcoming">Upcoming</option>
          <option value="history">History</option>
        </select>
      </label>

      <div>
        {recordType === "upcoming" && <Upcoming />}
        {recordType === "history" && <History />}
      </div>
    </div>
  );
}
