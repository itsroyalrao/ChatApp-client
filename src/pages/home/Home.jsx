import { useEffect, useState } from "react";
import FriendsArea from "../../components/home/FriendsArea";
import Chats from "../../components/home/Chats";
import { useNavigate } from "react-router-dom";
import { isAuthorized } from "../../helper/auth";

function Homepage() {
  window.onresize = function () {
    setWindowWidth(window.innerWidth);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [email, setEmail] = useState(null);
  const [friends, setFriends] = useState(null);
  const [userChats, setUserChats] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    isAuthorized(navigate, setEmail, setFriends);
  }, [navigate]);

  return (
    <>
      {email ? (
        <>
          {windowWidth >= 640 ? (
            <div className="w-full h-[100svh] flex text-white">
              <FriendsArea
                email={email}
                friends={friends}
                setUserChats={setUserChats}
              />
              {userChats ? (
                <Chats
                  email={email}
                  userChats={userChats}
                  setUserChats={setUserChats}
                />
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
                  <Chats
                    email={email}
                    userChats={userChats}
                    setUserChats={setUserChats}
                  />
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
      ) : (
        <div className="flex justify-center items-center h-[100svh] bg-[#242424] text-white text-xl">
          Loading...
        </div>
      )}
    </>
  );
}

export default Homepage;
