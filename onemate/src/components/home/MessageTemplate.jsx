import PropTypes from "prop-types";

const MessageTemplate = ({
  friendName,
  sendMessage,
  loadingMessages,
  setMessage,
  userMessages,
}) => {
  
  return (
    <>
      {friendName && (
        <div className="w-full min-h-screen flex items-center flex-col relative">
          <div className="w-full bg-[rgb(39,39,39)] py-3 flex justify-center text-2xl capitalize  sticky top-0">
            {friendName}
          </div>
          <div className="px-2 py-1 w-full">
            {loadingMessages ? (
              <div className="flex justify-center text-gray-300 text-lg">
                Chats are empty
              </div>
            ) : (
              <div className="w-full mb-7">
                {userMessages && userMessages.map((message) => {
                  return <div className="md:max-w-[600px] lg:max-w-[800px] xl:max-w-[80%] bg-[rgb(48,48,48)] px-2 py-1 my-1 rounded-ss-lg rounded-ee-lg tracking-wide font-bold text-gray-200 break-words" key={message._id}> {message.msg} </div>;
                })}
              </div>
            )}
          </div>
          <form
            className="w-full absolute bottom-4 flex justify-center px-2"
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
          >
            <input
              id="message-input"
              className="w-full sm:w-[75%] bg-[rgb(39,39,39)] px-5 py-2 tracking-wide rounded-full outline-none text-gray-300 text-lg"
              type="text"
              placeholder="Type a message..."
              onChange={(e) => setMessage(e.target.value)}
              autoComplete="off"
            />
            <img
              className="w-12 h-12 p-4 ml-1 bg-[rgb(39,39,39)] rounded-full cursor-pointer"
              src="/images/message.png"
              alt=""
              onClick={() => sendMessage()}
            />
          </form>
        </div>
      )}
    </>
  );
};

MessageTemplate.propTypes = {
  friendName: PropTypes.string,
  sendMessage: PropTypes.func,
  loadingMessages: PropTypes.bool,
  setMessage: PropTypes.func,
  userMessages: PropTypes.array,
};

export default MessageTemplate;
