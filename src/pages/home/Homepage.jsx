import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import GetFriends from "./GetFriends";

function Homepage() {
  const location = useLocation();
  const email = new URLSearchParams(location.search).get("email");

  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <GetFriends
        setFriends={setFriends}
        setLoading={setLoading}
        email={email}
      />

      <div className="w-full min-h-screen flex">
        <div className="flex flex-col w-full sm:min-w-[250px] sm:w-[300px] lg:min-w-[25%] bg-[rgb(39,39,39)]">
          <div className="flex items-center justify-between p-2 font-bold text-2xl text-white bg-blue-900 shadow-sm shadow-indigo-100 sticky top-0">
            <div className="px-3 cursor-default">Onemate</div>
            <div className="flex items-center">
              {/* <div>
                <img
                  className="w-9 mx-2 p-1 rounded-2xl cursor-pointer sm:hidden"
                  src="images/search.png"
                  alt="Search"
                  onClick={() => showInput()}
                />
              </div> */}
              {/* <div>
                <Link>
                  <img
                    id="newchatbtn"
                    className="w-10 p-[2px] mx-2 hidden sm:block hover:bg-white rounded-xl"
                    src="images/newchat.png"
                    alt="New chat"
                    title="New Chat"
                    onMouseEnter={() => newChatbtnEnter()}
                    onMouseLeave={() => newChatbtnLeave()}
                  />
                </Link>
              </div> */}
              <Link to={`/profile?email=${email}`}>
                <img
                  id="profilebtn"
                  className="w-10 hover:bg-white rounded-2xl p-1"
                  src="images/profile.png"
                  alt="Profile"
                  title="Profile"
                  onMouseEnter={() => profilebtnEnter()}
                  onMouseLeave={() => profilebtnLeave()}
                />
              </Link>
            </div>
          </div>
          {/* <div className="w-full flex justify-center">
            <input
              id="search-input"
              className="w-[90%] px-3 py-2 bg-[rgb(72,72,72)] text-white tracking-wide rounded-b-lg hidden sm:block focus:bg-[rgb(39,39,39)]"
              type="text"
              placeholder="Search friends..."
            />
          </div> */}
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
          {/* <div className="w-fit fixed bottom-2 right-0 sm:hidden">
            <Link>
              <img
                id="newchatbtn"
                className="w-10 p-[2px] mx-2"
                src="images/newchat.png"
                alt="New chat"
                onMouseEnter={() => newChatbtnEnter()}
                onMouseLeave={() => newChatbtnLeave()}
              />
            </Link>
          </div> */}
        </div>
        <div className="w-full bg-[#0F0F0F] text-white hidden sm:block">
          <div className="w-full flex flex-col items-center justify-center min-h-screen">
            <div className="p-4 pt-0 rounded-lg text-2xl">
              Click on a chat to start messaging
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// const newChatbtnEnter = () => {
//   const newchatbtn = document.getElementById("newchatbtn");
//   newchatbtn.src = "images/newchatonhover.png";
// };

// const newChatbtnLeave = () => {
//   const newchatbtn = document.getElementById("newchatbtn");
//   newchatbtn.src = "images/newchat.png";
// };

const profilebtnEnter = () => {
  const profilebtn = document.getElementById("profilebtn");
  profilebtn.src = "images/profileonhover.png";
};

const profilebtnLeave = () => {
  const profilebtn = document.getElementById("profilebtn");
  profilebtn.src = "images/profile.png";
};

export default Homepage;
