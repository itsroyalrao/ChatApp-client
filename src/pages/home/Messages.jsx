import axios from "axios";
import { useEffect } from "react";
export default function GetMessages({ receivedMessage }) {
  const messages = ["one", "two", "three", "four"];

  useEffect(() => {
    async function postMessage() {
      console.log(receivedMessage);
      const result = await axios.post("http://localhost:3000/chats", {
        message: receivedMessage,
      });
      console.log(result);
    }
    postMessage();
  }, [receivedMessage]);

  return (
    <>
      {messages.map((msg, index) => (
        <div
          key={index}
          className="w-fit max-w-[80%] flex flex-col bg-[rgb(48,48,48)] px-4 py-2 rounded m-1"
        >
          {msg}
        </div>
      ))}
    </>
  );
}
