import axios from "axios";
import io from "socket.io-client";

// const socket = io.connect("https://chatapp-4ixl.onrender.com");
const socket = io.connect("http://localhost:3000");

socket.on("receive_message", (data) => {
  console.log("Message received from server", data);
});

async function postMessage(message, email, setUserMessages) {
  await axios.post(
    // "http://localhost:3000/chats",
    "https://chatapp-4ixl.onrender.com/chats",
    {
      message: message,
      email: email,
    }
  );
  getMessages(email, setUserMessages);
}

async function getMessages(email, setUserMessages) {
  const result = await axios.get(
    `http://localhost:3000/chats?email=${email}`
    // `https://chatapp-4ixl.onrender.com/chats?email=${email}`
  );
  if (result.data.success) setUserMessages(result.data.chats);
}

const sendMessage = (email, inputMessage, setInputMessage, setUserMessages) => {
  if (inputMessage) {
    socket.emit("send_message", inputMessage);
  }
  postMessage(inputMessage, email, setUserMessages);
  setInputMessage("");
  getMessages(setUserMessages);
};

export { postMessage, getMessages, sendMessage };
