import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { changePassword } from "../helper/auth";

function ChangePassword() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");

  const [message, setMessage] = useState(null);
  const [newpassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  useEffect(() => {
    document.title = "Change Password | ChatApp";
  }, []);
  return (
    <>
      <div className="bg-[#242424] w-full min-h-screen flex flex-col items-center justify-center">
        <div className="bg-blue-900 flex flex-col items-center px-4 rounded">
          <img
            className="w-20 h-20 -my-10 rounded-full"
            src="https://img.freepik.com/premium-vector/man-character_665280-46970.jpg?w=740"
            alt="This is an image"
          />
          <div className="text-white text-2xl mt-12">Change your password</div>
          <div className="flex flex-col items-center py-4 space-y-2">
            <input
              type="password"
              className="px-3 py-1 placeholder:italic focus:outline-none focus:outline-blue-600"
              placeholder="New password"
              value={newpassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="password"
              id="confirm-new-password"
              className="px-3 py-1 placeholder:italic focus:outline-none focus:outline-blue-600"
              placeholder="Confirm new password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
            {message && <div className="text-red-400"> {message} </div>}
          </div>
        </div>
        <div
          className="bg-blue-900 w-44 rounded-b flex items-center justify-center text-white p-2 cursor-pointer sm:hover:bg-white sm:hover:text-blue-900 sm:hover:font-bold"
          onClick={() =>
            changePassword(email, newpassword, confirmNewPassword, setMessage)
          }
        >
          Change Password
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
