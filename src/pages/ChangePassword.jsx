import axios from "axios";
import { useLocation } from "react-router-dom";

function ChangePassword() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");

  const changePass = async () => {
    try {
      const newPassword = document.getElementById("new-password").value;
      const confirmNewPassword = document.getElementById(
        "confirm-new-password"
      ).value;

      if (newPassword === confirmNewPassword) {
        const response = await axios.post(
          "http://localhost:3000/auth/changePassword",
          {
            email,
            newPassword,
          }
        );
        if (response.data.success) {
          displayMessage(response.data.msg, true);
          setTimeout(() => {
            window.location.href = "/";
          }, 2000);
        }
      } else displayMessage("Password do not match!", false);
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <>
      <div className="bg-gradient-to-br from-blue-600 to-blue-400 w-full min-h-screen flex flex-col items-center justify-center">
        <div
          id="change-password-block"
          className="w-[270px] h-48 bg-blue-900 flex flex-col items-center rounded-3xl shadow-md shadow-white"
        >
          <img
            className="w-20 h-20 -my-10 rounded-full"
            src="https://img.freepik.com/premium-vector/man-character_665280-46970.jpg?w=740"
            alt="This is an image"
          />
          <div className="text-white text-2xl mt-12">Change your password</div>
          <div className="flex flex-col items-center py-4 space-y-2">
            <input
              type="password"
              id="new-password"
              className="rounded-lg px-3 py-1 placeholder:italic focus:outline-none focus:outline-blue-600"
              placeholder="New password"
            />
            <input
              type="password"
              id="confirm-new-password"
              className="rounded-lg px-3 py-1 placeholder:italic focus:outline-none focus:outline-blue-600"
              placeholder="Confirm new password"
            />
            <div id="error-message" hidden></div>
          </div>
        </div>
        <div
          className="bg-blue-900 w-44 rounded-b-xl flex items-center justify-center text-white p-2 cursor-pointer shadow-inner sm:hover:bg-white sm:hover:text-blue-900 sm:hover:font-bold shadow-md shadow-white hover:shadow-none"
          onClick={(e) => changePass(e)}
        >
          Change Password
        </div>
      </div>
    </>
  );
}

function displayMessage(message, bool) {
  const msg = document.getElementById("error-message");
  msg.innerHTML = "";
  msg.style.display = "block";
  if (bool) msg.className = "text-green-600";
  else msg.className = "text-red-400";
  msg.appendChild(document.createTextNode(message));

  const block = document.getElementById("change-password-block");
  block.className =
    "w-72 h-[12.5rem] bg-blue-900 flex flex-col items-center rounded-3xl shadow-lg shadow-blue-800";
}

export default ChangePassword;
