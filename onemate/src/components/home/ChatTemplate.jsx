import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import MessageTemplate from "./MessageTemplate";

const ChatTemplate = ({
  email,
  profilebtnEnter,
  profilebtnLeave,
  loading,
  friends,
  friendName,
  setFriendName,
  sendMessage,
  loadingMessages,
  setMessage,
  userMessages,
}) => {
  return (
    <>
      <div className="w-full min-h-screen flex">
        <div className="flex-col w-full sm:min-w-[250px] sm:w-[300px] lg:min-w-[25%] bg-[rgb(39,39,39)] hidden sm:flex">
          <div className="flex items-center justify-between p-2 font-bold text-2xl text-white bg-blue-900 shadow-sm shadow-indigo-100 sticky top-0">
            <Link to={`/home?email=${email}`} className="px-3">
              Onemate
            </Link>
            <Link to={`/profile?email=${email}`}>
              <img
                id="profilebtn"
                className="w-10 hover:bg-white rounded-xl p-1"
                src="/images/profile.png"
                alt="Profile"
                title="Profile"
                onMouseEnter={() => profilebtnEnter()}
                onMouseLeave={() => profilebtnLeave()}
              />
            </Link>
          </div>
          <div id="friends" className="mt-2">
            {loading ? (
              <p className="w-full text-white flex justify-center">
                Loading...
              </p>
            ) : friends.length ? (
              friends.map((friend) => (
                <Link
                  key={friend._id}
                  to={`/chat/${email}/${friend._id}`}
                  className="flex justify-center text-white py-5 font-bold text-lg bg-[rgb(48,48,48)] hover:bg-blue-900 mx-2 my-1 tracking-wide capitalize rounded-lg"
                  onClick={() => {
                    setFriendName(friend.name);
                  }}
                >
                  {friend.name}
                </Link>
              ))
            ) : (
              <p className="h-full flex items-center justify-center font-bold text-white text-xl">
                Chats are empty
              </p>
            )}
          </div>
        </div>
        <div className="w-full bg-black text-white block">
          <MessageTemplate
            friendName={friendName}
            sendMessage={sendMessage}
            loadingMessages={loadingMessages}
            setMessage={setMessage}
            userMessages={userMessages}
          />
        </div>
      </div>
    </>
  );
};

ChatTemplate.propTypes = {
  email: PropTypes.string,
  profilebtnEnter: PropTypes.func,
  profilebtnLeave: PropTypes.func,
  loading: PropTypes.bool,
  friends: PropTypes.array,
  friendName: PropTypes.string,
  setFriendName: PropTypes.func,
  sendMessage: PropTypes.func,
  loadingMessages: PropTypes.bool,
  setMessage: PropTypes.func,
  userMessages: PropTypes.array,
};

export default ChatTemplate;
