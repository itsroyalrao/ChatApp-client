import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getMessages, sendMessage } from "../../helper/messages";

function Chats({ userChats }) {
  const [inputMessage, setInputMessage] = useState("");
  const [userMessages, setUserMessages] = useState(null);

  useEffect(() => {
    setUserMessages(null);
    getMessages(userChats.email, setUserMessages);
  }, [userChats.email]);
  return (
    <div className="flex flex-col grow bg-[#0F0F0F] overflow-auto">
      <div className="w-full bg-[#242424] p-2 flex justify-center text-2xl capitalize">
        {userChats.username}
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
          autoFocus
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter")
              sendMessage(
                userChats.email,
                inputMessage,
                setInputMessage,
                setUserMessages
              );
          }}
        />
      </div>
    </div>
  );
}

Chats.propTypes = {
  userChats: PropTypes.object,
  email: PropTypes.string,
};

export default Chats;
