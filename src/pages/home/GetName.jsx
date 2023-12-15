import axios from "axios";
import { useState } from "react";

export default function GetName({ setFriendName, id }) {
  const [condition, setCondition] = useState(true);

  if (condition) {
    (async () => {
      try {
        const response = await axios.post("http://localhost:3000/home", { id });
        setFriendName(response.data.name);
      } catch (e) {
        console.log(e);
      }
    })();
    setCondition(false);
  }
}
