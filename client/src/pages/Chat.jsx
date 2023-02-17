import React from 'react'
import ChatNav from '../components/ChatNav'

const Chat = () => {
  return (
    <div className='realtive rounded-lg w-full h-[80vh] inset-0 bg-[#282c34] overflow-hidden flex'>
      <ChatNav />
      {/* chat area */}
        <div className='h-full p-5 text-left  text-gray-100'>
          {/* message */}
          <div className='p-5 pl-10 pr-10 flex max-w-[480px] ml-auto mr-auto'>
            {/* avatar */}
            <div className='bg-white rounded-full w-[40px] h-[40px]'></div>
            {/* message */}
            <div className='pl-10 pr-10'>Hello</div>
          </div>
        </div>
      {/* text area */}
      <div className='w-[100vh] h-[100vh]   flex justify-center'>
        <textarea className='resize-none w-9/12 h-[50px] rounded-lg focus:outline-none  bg-[#40414f] relative top-[70%] text-white p-2 shadow-lg shadow-black/50' rows="2">dsadsa</textarea>
      </div>
    </div>
  )
}

export default Chat