import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Home, CreatePost, Chat } from "./pages";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

const App = () => (
  <BrowserRouter>
    <header className="w-full z-10 relative flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] bg-gray-300">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>
      <div className="flex gap-5">
        <Link
          className="font-inter flex items-center justify-center gap-2 font-bold bg-[#000] text-white px-4 py-2 rounded-md"
          to="/chat"
        >
          <BsFillChatLeftDotsFill /> Use Chat GPT
        </Link>
        <Link
          to="/create"
          className="font-inter flex items-center justify-center gap-2 font-bold bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          <AiOutlinePlus /> Create Images
        </Link>
      </div>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
