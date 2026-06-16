import { useState } from "react";
import { PaperPlaneIcon } from "../../icons";

interface Message {
  id: number;
  from: "me" | "them";
  text?: string;
  image?: string;
  time: string;
}

const initialMessages: Message[] = [
  { id: 1, from: "them", text: "Hi there! I wanted to check on the appointment for next week.", time: "2 hours ago" },
  { id: 2, from: "me", text: "Sure, Tuesday at 10am works great for me.", time: "2 hours ago" },
  { id: 3, from: "them", text: "Perfect. I'll send over the brief beforehand.", time: "1 hour ago" },
  { id: 4, from: "them", image: "/images/grid-image/image-02.png", text: "Please preview the image.", time: "1 hour ago" },
  { id: 5, from: "me", text: "Looks great — let's go with it!", time: "45 mins ago" },
];

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [text, setText] = useState("");

  const send = () => {
    if (!text.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, from: "me", text: text.trim(), time: "Just now" },
    ]);
    setText("");
  };

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src="/images/user/user-01.jpg"
              alt="Lindsey Curtis"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-success-500 dark:border-gray-900"></span>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
              Lindsey Curtis
            </h4>
            <span className="text-theme-xs text-success-500">Online</span>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="5" cy="12" r="1.6" />
            <circle cx="12" cy="12" r="1.6" />
            <circle cx="19" cy="12" r="1.6" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-4 overflow-y-auto p-5 custom-scrollbar">
        {messages.map((msg) =>
          msg.from === "them" ? (
            <div key={msg.id} className="flex max-w-[75%] gap-3">
              <img
                src="/images/user/user-01.jpg"
                alt="them"
                className="h-9 w-9 shrink-0 rounded-full object-cover"
              />
              <div>
                <div className="rounded-2xl rounded-tl-sm bg-gray-100 px-4 py-2.5 text-theme-sm text-gray-800 dark:bg-white/[0.05] dark:text-white/90">
                  {msg.image && (
                    <img
                      src={msg.image}
                      alt="attachment"
                      className="mb-2 max-w-[220px] rounded-lg"
                    />
                  )}
                  {msg.text && <p>{msg.text}</p>}
                </div>
                <span className="mt-1 block text-theme-xs text-gray-400">
                  Lindsey · {msg.time}
                </span>
              </div>
            </div>
          ) : (
            <div key={msg.id} className="ml-auto flex max-w-[75%] flex-col items-end">
              <div className="rounded-2xl rounded-tr-sm bg-brand-500 px-4 py-2.5 text-theme-sm text-white">
                {msg.text && <p>{msg.text}</p>}
              </div>
              <span className="mt-1 block text-theme-xs text-gray-400">
                You · {msg.time}
              </span>
            </div>
          )
        )}
      </div>

      {/* Input */}
      <div className="border-t border-gray-100 p-4 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-white/[0.03]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M21.44 11.05l-9.19 9.19a5 5 0 01-7.07-7.07l9.19-9.19a3.33 3.33 0 014.71 4.71l-9.2 9.19a1.67 1.67 0 01-2.36-2.36l8.49-8.48" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Type a message..."
            className="h-11 flex-1 rounded-lg border border-gray-300 bg-transparent px-4 text-theme-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90"
          />
          <button
            onClick={send}
            disabled={!text.trim()}
            className="flex h-11 items-center gap-2 rounded-lg bg-brand-500 px-4 text-theme-sm font-medium text-white transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <PaperPlaneIcon className="size-4" />
            <span className="hidden sm:inline">Send</span>
          </button>
        </div>
      </div>
    </div>
  );
}
