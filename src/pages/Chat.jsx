import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";

import GetName from "../components/GetName";
import MsgInput from "../components/MsgInput";
import ChatTemplate from "../components/ChatTemplate";
import { getMessages } from "../helper/messages";

const socket = io.connect("https://chatapp-4ixl.onrender.com");

function Chat() {
  const { id, email } = useParams();

  const [friendName, setFriendName] = useState("");
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [loadingMessages, setLoadingMessages] = useState(true);
  const [userMessages, setUserMessages] = useState([]);

  const sendMessage = () => {
    document.getElementById("message-input").value = "";
    if (message) {
      socket.emit("send_message", message);
    }
    postMessage(message, email);
    setMessage("");
    getMessages(setLoadingMessages, setUserMessages);
  };

  useEffect(() => {
    getMessages(setLoadingMessages, setUserMessages);
    socket.on("receive_message", () => {});
  }, []);

  return (
    <>
      <GetFriends
        setFriends={setFriends}
        setLoading={setLoading}
        email={email}
      />
      <GetName setFriendName={setFriendName} id={id} />
      {friendName && <MsgInput friendName={friendName} />}
      <ChatTemplate
        email={email}
        loading={loading}
        friends={friends}
        friendName={friendName}
        setFriendName={setFriendName}
        sendMessage={sendMessage}
        loadingMessages={loadingMessages}
        setMessage={setMessage}
        userMessages={userMessages}
      />
    </>
  );
}

export default Chat;
