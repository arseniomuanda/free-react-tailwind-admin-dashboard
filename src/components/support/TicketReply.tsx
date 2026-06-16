import { useState } from "react";
import { Link } from "react-router";
import { PaperPlaneIcon } from "../../icons";
import Badge from "../ui/badge/Badge";

interface Message {
  id: number;
  from: "agent" | "customer";
  name: string;
  avatar: string;
  text: string;
  time: string;
}

const initialThread: Message[] = [
  {
    id: 1,
    from: "customer",
    name: "Lindsey Curtis",
    avatar: "/images/user/user-01.jpg",
    text: "Hi, I'm trying to reset my password but the reset email never arrives. I've checked my spam folder too. Can you help?",
    time: "Mar 12, 09:14 AM",
  },
  {
    id: 2,
    from: "agent",
    name: "Support Agent",
    avatar: "/images/user/user-07.jpg",
    text: "Hi Lindsey, thanks for reaching out! I've triggered a manual reset link to your email. Could you also confirm the email address on your account ends in @company.com?",
    time: "Mar 12, 09:32 AM",
  },
  {
    id: 3,
    from: "customer",
    name: "Lindsey Curtis",
    avatar: "/images/user/user-01.jpg",
    text: "Yes, that's correct. I just received the new link — it works now. Thank you so much!",
    time: "Mar 12, 09:40 AM",
  },
];

export default function TicketReply() {
  const [thread, setThread] = useState<Message[]>(initialThread);
  const [reply, setReply] = useState("");

  const send = () => {
    if (!reply.trim()) return;
    setThread((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        from: "agent",
        name: "Support Agent",
        avatar: "/images/user/user-07.jpg",
        text: reply.trim(),
        time: "Just now",
      },
    ]);
    setReply("");
  };

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <Link
            to="/support-tickets"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/[0.03]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                Unable to reset my password
              </h3>
              <Badge size="sm" color="primary">
                Open
              </Badge>
            </div>
            <span className="text-theme-xs text-gray-400">
              #TC-4821 · Account · High priority
            </span>
          </div>
        </div>
      </div>

      {/* Thread */}
      <div className="flex-1 space-y-5 overflow-y-auto p-5 custom-scrollbar">
        {thread.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 ${msg.from === "agent" ? "flex-row-reverse" : ""}`}
          >
            <img
              src={msg.avatar}
              alt={msg.name}
              className="h-9 w-9 shrink-0 rounded-full object-cover"
            />
            <div className={`max-w-[80%] ${msg.from === "agent" ? "items-end text-right" : ""}`}>
              <div className={`mb-1 flex items-center gap-2 ${msg.from === "agent" ? "justify-end" : ""}`}>
                <span className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                  {msg.name}
                </span>
                <span className="text-theme-xs text-gray-400">{msg.time}</span>
              </div>
              <div
                className={`rounded-2xl px-4 py-3 text-theme-sm ${
                  msg.from === "agent"
                    ? "rounded-tr-sm bg-brand-500 text-white"
                    : "rounded-tl-sm bg-gray-100 text-gray-700 dark:bg-white/[0.05] dark:text-gray-300"
                }`}
              >
                <p className="whitespace-pre-wrap text-left">{msg.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reply */}
      <div className="border-t border-gray-100 p-4 dark:border-gray-800">
        <textarea
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          rows={3}
          placeholder="Write a reply…"
          className="w-full resize-none rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-theme-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90"
        ></textarea>
        <div className="mt-3 flex items-center justify-between">
          <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-white/[0.03]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M21.44 11.05l-9.19 9.19a5 5 0 01-7.07-7.07l9.19-9.19a3.33 3.33 0 014.71 4.71l-9.2 9.19a1.67 1.67 0 01-2.36-2.36l8.49-8.48" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Attach
          </button>
          <button
            onClick={send}
            disabled={!reply.trim()}
            className="flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-2 text-theme-sm font-medium text-white transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <PaperPlaneIcon className="size-4" />
            Send Reply
          </button>
        </div>
      </div>
    </div>
  );
}
