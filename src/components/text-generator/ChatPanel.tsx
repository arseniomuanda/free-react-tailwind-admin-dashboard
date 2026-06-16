import { useState } from "react";
import { ChevronDownIcon, CopyIcon, PaperPlaneIcon } from "../../icons";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";

interface Message {
  role: "user" | "assistant";
  text: string;
}

const models = [
  "Auto",
  "GPT 4.5",
  "GPT 5.5",
  "Claude Sonnet 4.5",
  "Claude Sonnet 4.6",
  "Grok 3",
];

const cannedReply =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Here are a few angles you could take, each tuned to a slightly different audience and tone.";

const initialMessages: Message[] = [
  { role: "user", text: "Write a short, friendly welcome email for new users." },
  {
    role: "assistant",
    text:
      "Subject: Welcome aboard! 🎉\n\nHi there,\n\nThanks for signing up — we're thrilled to have you. You now have everything you need to get started in minutes. If you ever get stuck, just reply to this email and a real human will help out.\n\nCheers,\nThe Team",
  },
];

export default function ChatPanel() {
  const [model, setModel] = useState("Claude Sonnet 4.6");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [webSearch, setWebSearch] = useState(false);
  const [deepSearch, setDeepSearch] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);

  const send = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", text: input.trim() },
      { role: "assistant", text: cannedReply },
    ]);
    setInput("");
  };

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      {/* Header with model selector */}
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-800">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          AI Text Generator
        </h3>
        <div className="relative inline-block">
          <button
            onClick={() => setIsModelOpen((o) => !o)}
            className="dropdown-toggle inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-white/[0.03]"
          >
            {model}
            <ChevronDownIcon className="size-4" />
          </button>
          <Dropdown
            isOpen={isModelOpen}
            onClose={() => setIsModelOpen(false)}
            className="w-48 p-2"
          >
            {models.map((m) => (
              <DropdownItem
                key={m}
                onItemClick={() => {
                  setModel(m);
                  setIsModelOpen(false);
                }}
                className={`flex w-full rounded-lg px-3 py-2 text-left text-theme-sm font-normal hover:bg-gray-100 dark:hover:bg-white/5 ${
                  model === m
                    ? "text-brand-500 dark:text-brand-400"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {m}
              </DropdownItem>
            ))}
          </Dropdown>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-6 overflow-y-auto p-5 custom-scrollbar">
        {messages.map((msg, i) =>
          msg.role === "user" ? (
            <div key={i} className="flex justify-end gap-3">
              <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-brand-500 px-4 py-3 text-theme-sm text-white">
                <p className="whitespace-pre-wrap">{msg.text}</p>
              </div>
              <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full">
                <img
                  src="/images/user/user-01.jpg"
                  alt="You"
                  className="h-9 w-9 object-cover"
                />
              </div>
            </div>
          ) : (
            <div key={i} className="flex gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-500 dark:bg-brand-500/15 dark:text-brand-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.4 6.3L21 9l-5.1 4.2L17.6 21 12 17l-5.6 4 1.7-7.8L3 9l6.6-.7L12 2z" />
                </svg>
              </div>
              <div className="max-w-[80%]">
                <span className="mb-1 block text-theme-xs font-medium text-gray-400 dark:text-gray-500">
                  {model}
                </span>
                <div className="rounded-2xl rounded-tl-sm border border-gray-100 bg-gray-50 px-4 py-3 text-theme-sm text-gray-700 dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-300">
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <button className="inline-flex items-center gap-1 text-theme-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                    <CopyIcon className="size-4" />
                    Copy
                  </button>
                  <button className="text-theme-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                    Regenerate
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {/* Input */}
      <div className="border-t border-gray-100 p-4 dark:border-gray-800">
        <div className="rounded-xl border border-gray-300 bg-white focus-within:border-brand-300 focus-within:ring-2 focus-within:ring-brand-500/20 dark:border-gray-700 dark:bg-gray-900">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
            rows={2}
            placeholder="Ask anything or describe what you want to generate…"
            className="w-full resize-none bg-transparent px-4 py-3 text-theme-sm text-gray-800 placeholder:text-gray-400 focus:outline-none dark:text-white/90"
          />
          <div className="flex items-center justify-between gap-2 px-3 pb-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setWebSearch((v) => !v)}
                className={`rounded-lg border px-3 py-1.5 text-theme-xs font-medium transition-colors ${
                  webSearch
                    ? "border-brand-300 bg-brand-50 text-brand-600 dark:border-brand-500/40 dark:bg-brand-500/15 dark:text-brand-400"
                    : "border-gray-300 text-gray-500 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-white/[0.03]"
                }`}
              >
                Web Search
              </button>
              <button
                onClick={() => setDeepSearch((v) => !v)}
                className={`rounded-lg border px-3 py-1.5 text-theme-xs font-medium transition-colors ${
                  deepSearch
                    ? "border-brand-300 bg-brand-50 text-brand-600 dark:border-brand-500/40 dark:bg-brand-500/15 dark:text-brand-400"
                    : "border-gray-300 text-gray-500 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-white/[0.03]"
                }`}
              >
                Deep Search
              </button>
              <button className="hidden rounded-lg border border-gray-300 px-3 py-1.5 text-theme-xs font-medium text-gray-500 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-white/[0.03] sm:block">
                Upload File
              </button>
            </div>
            <button
              onClick={send}
              disabled={!input.trim()}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-theme-sm font-medium text-white transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <PaperPlaneIcon className="size-4" />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
