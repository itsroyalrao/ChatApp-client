import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FriendsArea from "../components/home/FriendsArea";
import { getUsers } from "../helper/home";
import Chats from "../components/home/Chats";

function Homepage() {
  const location = useLocation();
  const email = new URLSearchParams(location.search).get("email");

  window.onresize = function () {
    setWindowWidth(window.innerWidth);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [friends, setFriends] = useState(null);
  const [userChats, setUserChats] = useState(null);

  useEffect(() => {
    getUsers(email, setFriends);
  }, [email]);

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
            <Chats email={email} userChats={userChats} />
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
              <Chats userChats={userChats} />
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
