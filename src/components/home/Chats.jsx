import PropTypes from "prop-types";
import io from "socket.io-client";
import { useEffect, useRef, useState } from "react";
import { getMessages, getRoomID, sendMessage } from "../../helper/messages";

// const socket = io.connect("http://localhost:3000");
const socket = io.connect("https://chatapp-4ixl.onrender.com");

function Chats({ userChats, setUserChats }) {
  const [inputMessage, setInputMessage] = useState("");
  const [userMessages, setUserMessages] = useState(null);
  const [roomID, setRoomID] = useState(null);

  const refToLastMessage = useRef(null);

  socket.on("receive_message", async () => {
    await getMessages(roomID, setUserMessages);
  });

  useEffect(() => {
    setUserMessages(null);
    getRoomID(userChats.email, setRoomID);
    if (roomID) getMessages(roomID, setUserMessages);
  }, [userChats.email, roomID]);

  useEffect(() => {
    refToLastMessage.current?.scrollIntoView();
  }, [userMessages]);
  return (
    <div className="flex flex-col grow bg-[#0F0F0F] overflow-auto">
      <div className="w-full bg-[#242424] p-2 flex items-center capitalize">
        <i
          className="fas fa-arrow-left text-xl cursor-pointer"
          onClick={() => setUserChats(null)}
        ></i>
        <div className="grow flex justify-center text-2xl">
          {userChats.username}
        </div>
      </div>
      <div className="grow overflow-auto">
        <div className="h-full overflow-auto">
          {userMessages ? (
            <div className="p-2 space-y-1">
              {userMessages.map((message) => (
                <div key={message._id}>
                  <div className="bg-[#242424] px-4 py-2 w-[80%] break-words">
                    {message.msg}
                  </div>
                </div>
              ))}
              <div ref={refToLastMessage}></div>
            </div>
          ) : (
            <div className="h-full flex justify-center items-center text-2xl">
              No message yet!
            </div>
          )}
        </div>
      </div>
      <div className="p-4">
        <input
          type="text"
          className="w-full p-3 bg-[#393939] rounded"
          placeholder="Type your message here..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && roomID) {
              sendMessage(roomID, inputMessage, setUserMessages, socket);
              setInputMessage("");
            }
          }}
        />
      </div>
    </div>
  );
}

Chats.propTypes = {
  userChats: PropTypes.object,
  setUserChats: PropTypes.func,
};

export default Chats;
