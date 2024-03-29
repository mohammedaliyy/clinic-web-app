import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Auth from "./components/Auth/Auth";
import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";
import AdminDashboard from "./components/Dashboard/Admin/AdminDashboard";
import DoctorDashboard from "./components/Dashboard/Doctor/DoctorDashboard";
import PatientDashboard from "./components/Dashboard/Patient/PatientDashboard";
import LaboratoryDashboard from "./components/Dashboard/Laboratory/LaboratoryDashboard";
import NurseDashboard from "./components/Dashboard/Nurse/NurseDashboard";

function App() {
  return (
    <div
      className="container-lg d-flex justify-content-center p-0 "
      style={{ minHeight: "100vh", width: "100%" }}
    >
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/dashboard/admin/:name" element={<AdminDashboard />} />
          <Route path="/dashboard/doctor/:name" element={<DoctorDashboard />} />
          <Route
            path="/dashboard/patient/:name"
            element={<PatientDashboard />}
          />
          <Route path="/dashboard/lab/lab" element={<LaboratoryDashboard />} />
          <Route path="/dashboard/nurse/nurse" element={<NurseDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
