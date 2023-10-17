import React from 'react'
import OpenAi from '../assets/openai.png'

const ChatMessage = ({ message }) => {
  return (
    <div className='relative'>
          <div 
          className={`${message.user === "me" ? "flex flex-col bg-transparent w-full gap-10 ml-auto mr-auto rounded-xl p-5 pl-10" : "p-5 pl-10 pr-10 flex flex-col bg-gray-500 w-full gap-10 ml-auto mr-auto rounded-xl"}`}>
            {/* AI */}
            <div className={`${message.user === "me" ? "bg-[#fcfcfc] rounded-full w-[40px] h-[40px]" :
             "bg-[#10A37F] rounded-full w-[40px] h-[40px]"}`}>
              <img src={OpenAi} width={25} className="mx-auto my-auto mt-2" alt="Img" />
              <p className='ml-12 relative bottom-6 text-gray-400'>{`${message.user === "me" ? "User" : "GPT" }`}</p>
             </div>
            <p>
            {message.message}
            </p>
          </div>
    </div>
  )
}

export default ChatMessage