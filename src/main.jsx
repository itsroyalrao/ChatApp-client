import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import Login from "./pages/auth/Login.jsx";
import Signup from "./pages/auth/Signup.jsx";
import ResetPassword from "./pages/auth/ResetPassword.jsx";
import ChangePassword from "./pages/auth/ChangePassword.jsx";
import Homepage from "./pages/home/Home.jsx";
import Profile from "./pages/home/Profile.jsx";
import axios from "axios";

axios.defaults.withCredentials = true

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/changePassword" element={<ChangePassword />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>
);
