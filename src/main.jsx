import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import ChangePassword from "./pages/ChangePassword.jsx";
import Homepage from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Chat from "./pages/Chat.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/changePassword" element={<ChangePassword />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/chat/:email/:id" element={<Chat />} />
    </Routes>
  </Router>
);
