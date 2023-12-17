import { useEffect, useState } from "react";
import FriendsArea from "../components/home/FriendsArea";
import { getUsers } from "../helper/home";
import Chats from "../components/home/Chats";

function Homepage() {
  window.onresize = function () {
    setWindowWidth(window.innerWidth);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [email, setEmail] = useState(null);
  const [friends, setFriends] = useState(null);
  const [userChats, setUserChats] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setEmail(email);
      getUsers(email, setFriends);
    } else window.location.href = "/login";
  }, []);

  return (
    <>
      {windowWidth >= 640 ? (
        <div className="w-full h-[100svh] flex text-white">
          <FriendsArea
            email={email}
            friends={friends}
            setUserChats={setUserChats}
          />
          {userChats ? (
            <Chats userChats={userChats} setUserChats={setUserChats} />
          ) : (
            <div className="grow flex flex-col items-center justify-center bg-[#0F0F0F]">
              <div className="p-4 pt-0 rounded-lg text-2xl">
                Click on a chat to start messaging
              </div>
            </div>
          )}
        </div>
      ) : (
        <>
          {userChats ? (
            <div className="w-full h-[100svh] flex text-white">
              <Chats userChats={userChats} setUserChats={setUserChats} />
            </div>
          ) : (
            <div className="w-full min-h-[100svh] flex text-white">
              <FriendsArea
                email={email}
                friends={friends}
                setUserChats={setUserChats}
              />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Homepage;
