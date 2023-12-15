import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loginDetails } from "../helper/auth";

function Login() {
  const [message, setMessage] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.title = "Login | ChatApp";
  }, []);
  return (
    <>
      <div className="bg-[#242424] min-h-screen flex flex-col items-center justify-center">
        <div
          id="login-block"
          className="bg-blue-900 flex flex-col items-center px-4 rounded"
        >
          <img
            className="w-20 h-20 -my-10 rounded-full"
            src="https://img.freepik.com/premium-vector/man-character_665280-46970.jpg?w=740"
            alt="This is an image"
          />
          <div className="flex flex-col items-center pt-16 space-y-2">
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
            {message && <div className="text-red-400"> {message} </div>}
          </div>
          <div className="flex text-sm w-full justify-between py-3 px-2 text-white">
            <Link className="sm:hover:scale-110" to={"/resetPassword"}>
              Forgot password?
            </Link>
            <Link className="sm:hover:scale-110" to={"/signup"}>
              Signup
            </Link>
          </div>
        </div>
        <div
          className="bg-blue-900 w-40 rounded-b flex items-center justify-center text-white p-2 cursor-pointer sm:hover:bg-white sm:hover:text-blue-900 sm:hover:font-bold"
          onClick={() => loginDetails(email, password, setMessage)}
        >
          Login
        </div>
      </div>
    </>
  );
}

export default Login;
