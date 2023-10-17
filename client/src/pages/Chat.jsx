import { useState, useEffect } from "react";
import { ChatMessage, ChatNav } from "../components";

const Chat = () => {
  useEffect(() => {
    getEngines();
  }, []);

  const [input, setInput] = useState("");
  const [models, setModels] = useState([]);
  const [currentModel, setCurrentModel] = useState("text-davinci-003");
  const [wait, setWait] = useState("Ask GPT");
  const [chatLog, setChatLog] = useState([
    {
      user: "gpt",
      message: "Hello, How can I help you?",
    },
  ]);

  const getEngines = () => {
    fetch("http://localhost:8080/api/v1/models")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.models);
        setModels(data.models);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let chatLogNew = [...chatLog, { user: "me", message: `${input}` }];
    setInput("");
    setWait("please wait...");
    setChatLog(chatLogNew);
    const messages = chatLogNew.map((message) => message.message).join("\n");

    // fetch request from api
    const response = await fetch("http://localhost:8080/api/v1/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: messages,
        currentModel,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      setChatLog([...chatLogNew, { user: "gpt", message: `${data.message}` }]);
      setWait("Ask GPT");
    }
  };
  return (
    <div className="realtive overflow-hidden rounded-lg w-full h-[80vh] inset-0 bg-[#282c34] flex">
      <ChatNav
        wait={wait}
        setChatLog={setChatLog}
        models={models}
        setCurrentModel={setCurrentModel}
      />
      {/* chat area */}
      <div className="h-[80%] w-[70%] absolute right-[5%] p-5 text-left flex overflow-auto flex-col gap-10 text-gray-100">
        {chatLog.map((message, i) => (
          <ChatMessage message={message} key={i} />
        ))}
      </div>
      {/* text area */}
      <form
        onSubmit={handleSubmit}
        className="w-[100vh] h-[100vh] flex justify-center"
      >
        <input
          placeholder="Ask GPT..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="resize-none w-6/12 h-[50px] rounded-lg focus:outline-none  bg-[#40414f] absolute top-[92%] z-10 left-[30%] text-white p-2 shadow-lg shadow-black/50"
          rows="2"
        ></input>
      </form>
    </div>
  );
};

export default Chat;
