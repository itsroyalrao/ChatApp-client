import axios from "axios";

const getUsers = async (email, setFriends) => {
  try {
    const response = await axios.get(
      // `http://localhost:3000/home?email=${email}`
      `https://chatapp-4ixl.onrender.com/home?email=${email}`
    );
    if (response.data.success) setFriends(response.data.users);
  } catch (e) {
    console.log(e);
  }
};

export { getUsers };
