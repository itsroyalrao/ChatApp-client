import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signupDetails } from "../helper/auth";

function Signup() {
  const [message, setMessage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    document.title = "Signup | ChatApp";
  }, []);

  return (
    <>
      <div className="bg-[#242424] min-h-[100svh] flex flex-col items-center justify-center">
        <div className="bg-blue-900 flex flex-col items-center px-4 rounded">
          <img
            className="w-20 h-20 -my-10 rounded-full"
            src="https://img.freepik.com/premium-vector/man-character_665280-46970.jpg?w=740"
            alt="This is an image"
          />
          <div className="flex flex-col items-center pt-16 space-y-2">
            <input
              type="text"
              className="px-3 py-1 placeholder:italic focus:outline-none focus:outline-blue-600"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              id="email"
              className="px-3 py-1 placeholder:italic focus:outline-none focus:outline-blue-600"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              id="password"
              className="px-3 py-1 placeholder:italic focus:outline-none focus:outline-blue-600"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              id="confirmPassword"
              className="px-3 py-1 placeholder:italic focus:outline-none focus:outline-blue-600"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {message && <div className="text-red-400"> {message} </div>}
          </div>
          <div className="flex w-full py-3 text-sm text-white justify-center">
            <span className="">Already have an account? </span>
            <Link className="px-2 underline sm:hover:scale-110" to={"/login"}>
              Login
            </Link>
          </div>
        </div>
        <div
          className="bg-blue-900 w-40 rounded-b flex items-center justify-center text-white p-2 cursor-pointer  sm:hover:bg-white sm:hover:text-blue-900 sm:hover:font-bold"
          onClick={() =>
            signupDetails(name, email, password, confirmPassword, setMessage)
          }
        >
          Sign up
        </div>
      </div>
    </>
  );
}

export default Signup;
