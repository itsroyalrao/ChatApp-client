import axios from "axios";

const setCookies = async (email, navigate) => {
  const response = await axios.get(
    // `http://localhost:3000/auth/cookies?email=${email}`
    `https://chatapp-4ixl.onrender.com/auth/cookies?email=${email}`
  );
  if (response.data.success) {
    document.cookie = `accessToken=${response.data.tokens.accessToken}`;
    document.cookie = `refreshToken=${response.data.tokens.refreshToken}`;
    navigate("/");
  }
};

const isAuthorized = async (navigate, setEmail, setFriends) => {
  const cookies = {};
  document.cookie.split("; ").forEach((cookie) => {
    const temp = cookie.split("=");
    cookies[temp[0]] = temp[1];
  });

  const response = await axios.post(
    // "http://localhost:3000/home/cookies",
    "https://chatapp-4ixl.onrender.com/home/cookies",
    cookies
  );
  if (response.data.success) {
    setEmail(response.data.email);
    getUsers(response.data.email, setFriends);
  } else {
    navigate("/login");
  }
};

async function signupDetails(
  name,
  email,
  password,
  confirmPassword,
  setMessage
) {
  try {
    if (!name) setMessage("Please provide name");
    else if (!email) setMessage("Please provide email");
    else if (!password) setMessage("Password is required");
    else if (password === confirmPassword) {
      const userDetails = {
        name,
        email,
        password,
      };
      const result = await axios.post(
        // "http://localhost:3000/auth/signup",
        "https://chatapp-4ixl.onrender.com/auth/signup",
        userDetails
      );
      if (result.data.success) window.location.href = "/";
      else {
        setMessage(result.data.message);
      }
    } else {
      setMessage("Password do not match!");
    }
  } catch (e) {
    console.log(e.message);
  }
}

async function loginDetails(email, password, setMessage, navigate) {
  try {
    if (!email) setMessage("Please enter your email");
    else if (!password) setMessage("Password is required");
    else {
      const result = await axios.post(
        // "http://localhost:3000/auth/login",
        "https://chatapp-4ixl.onrender.com/auth/login",
        {
          email,
          password,
        }
      );
      if (result.data.success) {
        await setCookies(email, navigate);
      } else {
        setMessage(result.data.message);
      }
    }
  } catch (e) {
    console.log(e.message);
  }
}

const resetPassword = async (email, setMessage) => {
  try {
    if (email === "") setMessage("Please provide email");
    else {
      const response = await axios.post(
        // "http://localhost:3000/auth/resetPassword",
        "https://chatapp-4ixl.onrender.com/resetPassword",
        { email }
      );

      if (response.data.success) setMessage(response.data.msg, true);
      else setMessage(response.data.msg, false);

      document.getElementById("email").value = "";
    }
  } catch (e) {
    console.log(e.message);
  }
};

const changePassword = async (
  email,
  newPassword,
  confirmNewPassword,
  setMessage
) => {
  try {
    if (newPassword === "") setMessage("Password is required");
    else if (newPassword !== confirmNewPassword)
      setMessage("Password do not match");
    else {
      const response = await axios.post(
        // "http://localhost:3000/auth/changePassword",
        "https://chatapp-4ixl.onrender.com/changePassword",
        {
          email,
          newPassword,
        }
      );
      if (response.data.success) {
        setMessage(response.data.msg, true);
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }
    }
  } catch (e) {
    console.log(e.message);
  }
};

const getUsers = async (email, setFriends) => {
  try {
    const response = await axios.get(
      // `http://localhost:3000/home?email=${email}`
      `https://chatapp-4ixl.onrender.com/home?email=${email}`
    );
    if (response.data.success) setFriends(response.data.users);
  } catch (e) {
    console.log(e);
  }
};

export {
  setCookies,
  isAuthorized,
  signupDetails,
  loginDetails,
  resetPassword,
  changePassword,
};
