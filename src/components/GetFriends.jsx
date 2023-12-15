import axios from "axios";
import { useEffect } from "react";

export default function GetFriends({ setFriends, setLoading, email }) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/home?email=${email}`
        );
        setFriends(response.data.users);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
}
