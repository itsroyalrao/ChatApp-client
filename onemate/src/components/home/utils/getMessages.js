import axios from "axios";

async function getMessages(setLoadingMessages, setUserMessages) {
  const result = await axios.get("http://localhost:3000/chats");
  if (result.data.chats.length) setLoadingMessages(false);
  setUserMessages(result.data.chats);
  console.log(result.data.chats);
}

export default getMessages;
