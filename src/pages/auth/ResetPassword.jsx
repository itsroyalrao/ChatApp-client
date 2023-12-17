import { useEffect, useState } from "react";
import { resetPassword } from "../../helper/auth";

function ResetPassword() {
  const [message, setMessage] = useState(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    document.title = "Reset Password | ChatApp";
  }, []);
  return (
    <>
      <div className="bg-[#242424] w-full min-h-[100svh] flex flex-col items-center justify-center">
        <div
          id="reset-password-block"
          className="bg-blue-900 flex flex-col items-center px-4 rounded"
        >
          <img
            className="w-20 h-20 -my-10 rounded-full"
            src="https://img.freepik.com/premium-vector/man-character_665280-46970.jpg?w=740"
            alt="This is an image"
          />
          <div className="text-white text-2xl mt-12">Reset your password</div>
          <div className="flex flex-col items-center py-4 space-y-2">
            <input
              type="email"
              id="email"
              className="px-3 py-1 placeholder:italic focus:outline-none focus:outline-blue-600"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {message && <div className="text-red-400"> {message} </div>}
          </div>
        </div>
        <div
          className="bg-blue-900 w-44 rounded-b flex items-center justify-center text-white p-2 cursor-pointer sm:hover:bg-white sm:hover:text-blue-900 sm:hover:font-bold"
          onClick={() => resetPassword(email, setMessage)}
        >
          Reset Password
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
