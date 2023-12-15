import axios from "axios";

async function postMessage(message, email) {
  await axios.post("http://localhost:3000/chats", {
    message: message,
    email: email,
  });
}

export default postMessage