import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function FriendsArea({ friends, setUserChats }) {
  return (
    <div className="flex flex-col w-full sm:min-w-[250px] sm:w-[300px] lg:min-w-[25%] bg-[#242424]">
      <div className="flex items-center justify-between p-2 font-bold text-2xl text-white bg-blue-700 sticky top-0">
        <div className="px-3 cursor-default">Onemate</div>
        <div className="flex items-center">
          <Link
            to={`/profile`}
            className="fas fa-user px-1"
            title="Profile"
          ></Link>
        </div>
      </div>
      {friends ? (
        <div className="px-1 py-2 space-y-1">
          {friends.map((friend) => (
            <div key={friend.email}>
              <div
                className="flex justify-center bg-[rgb(50,50,50)] p-3 text-xl cursor-pointer hover:bg-[#393939] capitalize"
                onClick={() => {
                  setUserChats({ username: friend.name, email: friend.email });
                }}
              >
                {friend.name}
              </div>
            </div>
          ))}
        </div>
      ) : friends === null ? (
        <div className="grow flex items-center justify-center text-2xl">
          Loading...
        </div>
      ) : (
        <div className="grow flex items-center justify-center text-2xl">
          <i
            className="fa-sharp fa-solid fa-folder-open text-6xl"
            title="Friend list is empty"
          ></i>
        </div>
      )}
    </div>
  );
}

FriendsArea.propTypes = {
  friends: PropTypes.any,
  setUserChats: PropTypes.func,
};

export default FriendsArea;
