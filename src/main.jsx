import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import Login from "./pages/auth/Login.jsx";
import Signup from "./pages/auth/Signup.jsx";
import ResetPassword from "./pages/auth/ResetPassword";
import ChangePassword from "./pages/auth/ChangePassword.jsx";
import Homepage from "./pages/home/Homepage.jsx";
import Profile from "./pages/home/Profile.jsx";
import Chat from "./pages/home/chat";

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
