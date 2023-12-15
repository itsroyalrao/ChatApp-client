import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  useEffect(() => {
    document.title = "Signup | Onemate";
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-blue-600 to-blue-400 min-h-screen flex flex-col items-center justify-center">
        <div
          id="signup-block"
          className="w-[270px] h-[17rem] bg-blue-900 flex flex-col items-center rounded-3xl shadow-md shadow-white"
        >
          <img
            className="w-20 h-20 -my-10 rounded-full"
            src="https://img.freepik.com/premium-vector/man-character_665280-46970.jpg?w=740"
            alt="This is an image"
          />
          <div className="flex flex-col items-center py-16 space-y-2">
            <input
              type="text"
              id="name"
              className="rounded-lg px-3 py-1 placeholder:italic focus:outline-none focus:outline-blue-600"
              placeholder="Name"
              autoComplete="name"
            />
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
            <input
              type="password"
              id="confirmPassword"
              className="rounded-lg px-3 py-1 placeholder:italic focus:outline-none focus:outline-blue-600"
              placeholder="Confirm password"
            />
            <div id="error-message" hidden></div>
            <div className="flex w-full py-2 text-sm text-white justify-center">
              <span className="">Already have an account? </span>
              <Link className="px-2 underline sm:hover:scale-110" to={"/"}>
                Login
              </Link>
            </div>
          </div>
        </div>
        <div
          className="bg-blue-900 w-40 rounded-b-xl flex items-center justify-center text-white p-2 cursor-pointer shadow-inner sm:hover:bg-white sm:hover:text-blue-900 sm:hover:font-bold shadow-md shadow-white hover:shadow-none"
          onClick={(e) => signupDetails(e)}
        >
          Sign up
        </div>
      </div>
    </>
  );
}

async function signupDetails(e) {
  e.preventDefault();

  try {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const userDetails = {
      name,
      email,
      password,
    };
    if (!name) displayMessage("Please provide name");
    else if (!email) displayMessage("Please provide email");
    else if (!password) displayMessage("Password is required");
    else if (password === confirmPassword) {
      const result = await axios.post(
        "http://localhost:3000/auth/signup",
        userDetails
      );
      if (result.data.success) window.location.href = "/";
      else {
        displayMessage(result.data.message);
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("confirmPassword").value = "";
      }
    } else {
      displayMessage("Password do not match!");
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

  const signupBlock = document.getElementById("signup-block");
  signupBlock.className =
    "w-64 h-[18.5rem] bg-blue-900 flex flex-col items-center rounded-3xl shadow-lg shadow-blue-800";
}

export default Signup;
