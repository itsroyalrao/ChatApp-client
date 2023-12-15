import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Login() {
  useEffect(() => {
    document.title = "Login | Onemate";
  }, []);
  return (
    <>
      {/* <div className="bg-[rgb(39,39,39)] min-h-screen flex flex-col items-center justify-center"> */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-400 min-h-screen flex flex-col items-center justify-center">
        <div
          id="login-block"
          className="w-[270px] h-48 bg-blue-900 flex flex-col items-center rounded-3xl shadow-md shadow-white"
        >
          <img
            className="w-20 h-20 -my-10 rounded-full"
            src="https://img.freepik.com/premium-vector/man-character_665280-46970.jpg?w=740"
            alt="This is an image"
          />
          <div className="flex flex-col items-center py-16 space-y-2">
            <input
              type="email"
              id="email"
              className="rounded-lg px-3 py-1 placeholder:italic focus:outline-none focus:outline-blue-600"
              placeholder="Email ID"
              autoComplete="email"
            />
            <input
              type="password"
              id="password"
              className="rounded-lg px-3 py-1 placeholder:italic focus:outline-none focus:outline-blue-600"
              placeholder="Password"
            />
            <div id="error-message" hidden></div>
            <div className="flex text-sm w-full justify-between py-2 px-2 text-white">
              <Link className="sm:hover:scale-110" to={"/resetPassword"}>
                Forgot password?
              </Link>
              <Link className="sm:hover:scale-110" to={"/signup"}>
                Signup
              </Link>
            </div>
          </div>
        </div>
        <div
          className="bg-blue-900 w-40 rounded-b-xl flex items-center justify-center text-white p-2 cursor-pointer shadow-inner sm:hover:bg-white sm:hover:text-blue-900 sm:hover:font-bold shadow-md shadow-white hover:shadow-none"
          onClick={(e) => loginDetails(e)}
        >
          Login
        </div>
      </div>
    </>
  );
}

async function loginDetails(e) {
  e.preventDefault();

  try {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email) displayMessage("Please enter your email");
    else if (!password) displayMessage("Password is required");
    else {
      const result = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });
      if (result.data.success) {
        window.location.href = `/home?email=${email}`;
      } else {
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        displayMessage(result.data.message);
      }
    }
  } catch (e) {
    console.log(e.message);
  }
}

function displayMessage(message) {
  const msg = document.getElementById("error-message");
  msg.innerHTML = "";
  msg.style.display = "block";
  msg.className = "text-red-400";
  msg.appendChild(document.createTextNode(message));

  const loginBlock = document.getElementById("login-block");
  loginBlock.className =
    "w-64 h-[13.5rem] bg-blue-900 flex flex-col items-center rounded-3xl shadow-lg shadow-blue-800";
}

export default Login;
