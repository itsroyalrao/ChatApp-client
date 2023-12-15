import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetName from "./GetName";
import GetFriends from "./GetFriends";
import MsgInput from "./MsgInput";
import io from "socket.io-client";
import ChatTemplate from "./ChatTemplate";
import postMessage from "./utils/postMessage";
import getMessages from "./utils/getMessages";

const socket = io.connect("http://localhost:3000");

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
    getMessages(setLoadingMessages, setUserMessages)
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
        profilebtnEnter={profilebtnEnter}
        profilebtnLeave={profilebtnLeave}
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

const profilebtnEnter = () => {
  const profilebtn = document.getElementById("profilebtn");
  profilebtn.src = "/images/profileonhover.png";
};

const profilebtnLeave = () => {
  const profilebtn = document.getElementById("profilebtn");
  profilebtn.src = "/images/profile.png";
};

export default Chat;
