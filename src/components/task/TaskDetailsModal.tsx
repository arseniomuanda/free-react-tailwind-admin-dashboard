import { useState } from "react";
import { Modal } from "../ui/modal";
import { PaperPlaneIcon } from "../../icons";
import Badge from "../ui/badge/Badge";

export interface Assignee {
  name: string;
  avatar: string;
}

export interface TaskDetail {
  title: string;
  description?: string;
  image?: string;
  tag?: string;
  tagColor?: string;
  due: string;
  status: string;
  links?: number;
  assignees: Assignee[];
}

interface Message {
  id: number;
  name: string;
  avatar: string;
  text: string;
  time: string;
}

interface Props {
  task: TaskDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

const statusColor: Record<string, "primary" | "warning" | "success" | "light"> = {
  "To Do": "light",
  "In Progress": "warning",
  Completed: "success",
};

export default function TaskDetailsModal({ task, isOpen, onClose }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");

  // Seed a small thread per open (keyed off task title via render).
  const seed: Message[] = task
    ? [
        {
          id: 1,
          name: task.assignees[0]?.name ?? "Lindsey Curtis",
          avatar: task.assignees[0]?.avatar ?? "/images/user/user-01.jpg",
          text: "Started working on this — will share a first draft by end of day.",
          time: "2 hours ago",
        },
        {
          id: 2,
          name: "Support Agent",
          avatar: "/images/user/user-07.jpg",
          text: "Thanks! Let me know if you get blocked on anything.",
          time: "1 hour ago",
        },
      ]
    : [];

  const thread = messages.length ? messages : seed;

  const send = () => {
    if (!text.trim()) return;
    setMessages([
      ...thread,
      {
        id: thread.length + 1,
        name: "You",
        avatar: "/images/user/user-02.jpg",
        text: text.trim(),
        time: "Just now",
      },
    ]);
    setText("");
  };

  if (!task) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="mx-4 max-w-[800px]"
      showCloseButton={false}
    >
      <div className="flex max-h-[88vh] flex-col rounded-3xl bg-white dark:bg-gray-900">
        {/* Header */}
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-gray-100 px-6 py-4 dark:border-gray-800">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                {task.title}
              </h3>
              <Badge size="sm" color={statusColor[task.status] ?? "light"}>
                {task.status}
              </Badge>
            </div>
            {task.tag && (
              <span className={`mt-2 inline-flex rounded-full px-2.5 py-0.5 text-theme-xs font-medium ${task.tagColor}`}>
                {task.tag}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-white/[0.05]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="grid flex-1 grid-cols-1 gap-6 overflow-y-auto p-6 custom-scrollbar lg:grid-cols-3">
          {/* Main */}
          <div className="lg:col-span-2">
            <h4 className="mb-2 text-theme-xs font-medium uppercase tracking-wide text-gray-400">
              Description
            </h4>
            <p className="text-theme-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {task.description ??
                "No description provided for this task yet. Add notes, context and acceptance criteria here."}
            </p>

            {task.image && (
              <img
                src={task.image}
                alt={task.title}
                className="mt-4 w-full rounded-xl border border-gray-100 object-cover dark:border-gray-800"
              />
            )}

            {/* Messages */}
            <h4 className="mb-3 mt-6 text-theme-xs font-medium uppercase tracking-wide text-gray-400">
              Messages
            </h4>
            <div className="flex flex-col gap-4">
              {thread.map((m) => (
                <div key={m.id} className="flex gap-3">
                  <img src={m.avatar} alt={m.name} className="h-8 w-8 shrink-0 rounded-full object-cover" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {m.name}
                      </span>
                      <span className="text-theme-xs text-gray-400">{m.time}</span>
                    </div>
                    <p className="mt-0.5 text-theme-sm text-gray-600 dark:text-gray-300">
                      {m.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Write a comment..."
                className="h-11 flex-1 rounded-lg border border-gray-300 bg-transparent px-4 text-theme-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90"
              />
              <button
                onClick={send}
                disabled={!text.trim()}
                className="flex h-11 items-center gap-2 rounded-lg bg-brand-500 px-4 text-theme-sm font-medium text-white hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <PaperPlaneIcon className="size-4" />
              </button>
            </div>
          </div>

          {/* Side details */}
          <div className="space-y-5 lg:border-l lg:border-gray-100 lg:pl-6 lg:dark:border-gray-800">
            <div>
              <h4 className="mb-2 text-theme-xs font-medium uppercase tracking-wide text-gray-400">
                Due date
              </h4>
              <p className="flex items-center gap-2 text-theme-sm font-medium text-gray-800 dark:text-white/90">
                <svg className="size-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
                </svg>
                {task.due}
              </p>
            </div>

            <div>
              <h4 className="mb-3 text-theme-xs font-medium uppercase tracking-wide text-gray-400">
                Assignees
              </h4>
              <div className="flex flex-col gap-3">
                {task.assignees.map((a) => (
                  <div key={a.name} className="flex items-center gap-2.5">
                    <img src={a.avatar} alt={a.name} className="h-8 w-8 rounded-full object-cover" />
                    <span className="text-theme-sm text-gray-700 dark:text-gray-300">
                      {a.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {task.links ? (
              <div>
                <h4 className="mb-2 text-theme-xs font-medium uppercase tracking-wide text-gray-400">
                  Links
                </h4>
                <p className="text-theme-sm text-gray-600 dark:text-gray-300">
                  {task.links} linked item{task.links > 1 ? "s" : ""}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Modal>
  );
}
