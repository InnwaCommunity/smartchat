import { ArrowLeft, MoreVertical, Search, Send, Smile } from "lucide-react"
import React from "react"

export default function Chat() {
  return (
    <div className="flex h-screen max-w-6xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
      {/* Left Sidebar */}
      <div className="w-80 border-r flex flex-col">
        <div className="p-4 border-b flex items-center justify-between bg-[#5B7BC9] text-white">
          <div className="flex items-center gap-2">
            {/* <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </button> */}
            <span className="font-semibold">Louie Barletta</span>
          </div>
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <Search className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <div key={chat.id} className="flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer border-b">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <img src={chat.avatar || "/logo192.png"} alt={chat.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-sm">{chat.name}</p>
                  <span className="text-xs text-gray-500">{chat.time}</span>
                </div>
                <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Chat Panel */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              <img src="/logo192.png" alt="Mark Appleyard" className="w-full h-full object-cover" />
            </div>
            <span className="font-semibold">Mark Appleyard</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <MoreVertical className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex items-end gap-2 ${message.sent ? "justify-end" : "justify-start"}`}>
                {!message.sent && (
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                    <img src="/logo192.png" alt="User avatar" className="w-full h-full object-cover" />
                  </div>
                )}
                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                    message.sent ? "bg-[#5B7BC9] text-white" : "bg-gray-100"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
                {message.sent && (
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                    <img src="/logo192.png" alt="Your avatar" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border-t">
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Smile className="h-5 w-5" />
            </button>
            <input
              type="text"
              placeholder="Send a message"
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5B7BC9] focus:border-transparent"
            />
            <button className="p-2 rounded-full bg-[#5B7BC9] text-white hover:bg-[#4A69B2] transition-colors">
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const chats = [
  {
    id: 1,
    name: "Annie Carpenter",
    avatar: "/logo192.png",
    lastMessage: "Did you talk to Mark? 👋",
    time: "10:51 AM",
  },
  {
    id: 2,
    name: "Mark Appleyard",
    avatar: "/logo192.png",
    lastMessage: "Lunch tomorrow. I'll call you",
    time: "9:15 AM",
  },
  {
    id: 3,
    name: "Bradley Stokes",
    avatar: "/logo192.png",
    lastMessage: "Sent a photo.",
    time: "3:45 PM",
  },
  {
    id: 4,
    name: "Emilie Wagner",
    avatar: "/logo192.png",
    lastMessage: "You: I'm here in 30 min",
    time: "3:45 PM",
  },
  {
    id: 5,
    name: "Lewis Butler",
    avatar: "/logo192.png",
    lastMessage: "👍",
    time: "3:45 PM",
  },
]

const messages = [
  {
    text: "Yes. Should we move it to next week?",
    sent: false,
  },
  {
    text: "Sure, whatever suits you. 😊 I'm free whenever 😊",
    sent: true,
  },
  {
    text: "And I'll update the calendar. I thought I already updated it.",
    sent: false,
  },
  {
    text: "It's all good fam.",
    sent: true,
  },
  {
    text: "I rescheduled it to every first wednesday in the month. But we can do it next week whenever you want?",
    sent: false,
  },
  {
    text: "Cool bro 👋 Next thursday at about 13:00?",
    sent: true,
  },
  {
    text: "Ok, I'll let you know.",
    sent: false,
  },
  {
    text: "👋",
    sent: true,
  },
]

