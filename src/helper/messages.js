import axios from "axios";

async function postMessage(message, roomID, setUserMessages) {
  const response = await axios.post(
    "http://localhost:3000/chats",
    // "https://chatapp-4ixl.onrender.com/chats",
    {
      message: message,
      roomID,
    }
  );
  console.log(response);
  getMessages(roomID, setUserMessages);
}

async function getMessages(roomID, setUserMessages) {
  const response = await axios.get(
    `http://localhost:3000/chats?roomID=${roomID}`
    // `https://chatapp-4ixl.onrender.com/chats?roomID=${roomID}`
  );
  if (response.data.success) {
    setUserMessages(response.data.chats);
  }
}

async function getRoomID(email, friend, setRoomID) {
  const response = await axios.post(
    `http://localhost:3000/chats/room`,
    // `https://chatapp-4ixl.onrender.com/chats/room`,
    {
      email,
      friend,
    }
  );
  if (response.data.success) setRoomID(response.data.roomID);
}

const sendMessage = (roomID, inputMessage, setUserMessages, socket) => {
  if (inputMessage) {
    socket.emit("send_message", [inputMessage, roomID]);
    postMessage(inputMessage, roomID, setUserMessages);
  }
};

export { postMessage, getMessages, getRoomID, sendMessage };
