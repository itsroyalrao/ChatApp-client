import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import Login from "./components/auth/Login.jsx";
import Signup from "./components/auth/Signup.jsx";
import ResetPassword from "./components/auth/ResetPassword";
import ChangePassword from "./components/auth/ChangePassword.jsx";
import Homepage from "./components/home/Homepage.jsx";
import Profile from "./components/profile/Profile.jsx";
import Chat from "./components/home/chat";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/changePassword" element={<ChangePassword />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/chat/:email/:id" element={<Chat />} />
    </Routes>
  </Router>
);
