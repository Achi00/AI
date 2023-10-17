import React from "react";

const ChatNav = ({ setChatLog, wait }) => {
  const clearChatLog = () => {
    setChatLog([
      {
        user: "gpt",
        message: "Hello, How can I help you?",
      },
    ]);
  };
  return (
    <aside className="bg-[#202127] xl:w-[20%] lg:w-[20%] md:w-[25%] sm:w-[30%] xs:w-[30%] h-[80vh] flex flex-col gap-[100px] p-2">
      <button
        onClick={clearChatLog}
        className="outline-none bg-transparent text-gray-400 border border-gray-400 rounded-lg p-4 hover:border-gray-400 mt-10 hover:text-gray-500 ml-auto mr-auto w-full lg:text-lg xs:text-xs text-center"
      >
        + New Chat
      </button>
      <h1 className="text-gray-500 lg:text-2xl xs:text-sm text-center">
        {wait}
      </h1>
      <div
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl relative flex flex-col"
        role="alert"
      >
        <strong class="font-bold">
          This Page uses Chat GPT API, this is just for showcase. the engine is
          not powerful
        </strong>
      </div>
    </aside>
  );
};

export default ChatNav;
