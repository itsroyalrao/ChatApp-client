import { useEffect } from "react";

export default function MsgInput({ friendName }) {
  useEffect(() => {
    const input = document.getElementById("message-input");
    if (input) {
      input.value = "";
      input.focus();
    }
  }, [friendName]);
}
