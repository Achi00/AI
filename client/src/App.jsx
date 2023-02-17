
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './pages';
import Chat from './pages/Chat';

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] relative">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>
      <Link to="/chat">
        {/* <img src={logo} alt="logo" className="w-28 object-contain" /> */}
        <p className='font-bold font-md tracking-wide'>ChatGPT</p>
      </Link>

      <Link to="/create" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
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