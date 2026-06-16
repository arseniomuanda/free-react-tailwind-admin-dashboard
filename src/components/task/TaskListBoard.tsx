import { useState } from "react";

type Status = "To Do" | "In Progress" | "Completed";

interface Task {
  id: number;
  title: string;
  tag?: string;
  tagColor?: string;
  due: string;
  comments?: number;
  links?: number;
  assignee: string;
  status: Status;
  done?: boolean;
}

const TAG = {
  Marketing: "bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400",
  Template: "bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500",
  Development: "bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-orange-400",
};

const initialTasks: Task[] = [
  { id: 1, title: "Finish user onboarding", tag: "Marketing", tagColor: TAG.Marketing, due: "Tomorrow", comments: 1, assignee: "/images/user/user-01.jpg", status: "To Do" },
  { id: 2, title: "Solve the Dribbble prioritisation issue with the team", due: "Jan 8, 2027", comments: 2, links: 1, assignee: "/images/user/user-02.jpg", status: "To Do", done: true },
  { id: 3, title: "Change license and remove products", tag: "Marketing", tagColor: TAG.Marketing, due: "Feb 12, 2027", links: 1, assignee: "/images/user/user-03.jpg", status: "To Do", done: true },

  { id: 4, title: "Work In Progress (WIP) Dashboard", due: "Today", comments: 1, assignee: "/images/user/user-04.jpg", status: "In Progress" },
  { id: 5, title: "Kanban Flow Manager", tag: "Template", tagColor: TAG.Template, due: "Feb 12, 2027", comments: 8, links: 2, assignee: "/images/user/user-05.jpg", status: "In Progress" },
  { id: 6, title: "Product Update - Q4 2024", due: "Feb 12, 2027", comments: 8, assignee: "/images/user/user-06.jpg", status: "In Progress" },
  { id: 7, title: "Make figbot send comment when ticket is auto-moved back to inbox", due: "Mar 08, 2027", comments: 1, assignee: "/images/user/user-07.jpg", status: "In Progress" },

  { id: 8, title: "Manage internal feedback", due: "Tomorrow", comments: 1, assignee: "/images/user/user-08.jpg", status: "Completed" },
  { id: 9, title: "Do some projects on React Native with Flutter", tag: "Development", tagColor: TAG.Development, due: "Jan 8, 2027", assignee: "/images/user/user-09.jpg", status: "Completed" },
  { id: 10, title: "Design marketing assets", tag: "Marketing", tagColor: TAG.Marketing, due: "Jan 8, 2027", comments: 2, links: 1, assignee: "/images/user/user-10.jpg", status: "Completed" },
  { id: 11, title: "Kanban Flow Manager", tag: "Template", tagColor: TAG.Template, due: "Feb 12, 2027", comments: 8, assignee: "/images/user/user-11.jpg", status: "Completed" },
];

const sections: Status[] = ["To Do", "In Progress", "Completed"];
const tabs = ["All Tasks", "To Do", "In Progress", "Completed"] as const;

const countBadge: Record<Status, string> = {
  "To Do": "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
  "In Progress": "bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-orange-400",
  Completed: "bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500",
};

const CalendarIcon = () => (
  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
  </svg>
);
const CommentIcon = () => (
  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" strokeLinejoin="round" />
  </svg>
);
const LinkIcon = () => (
  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M10 13a5 5 0 007.07 0l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.07 0l-3 3a5 5 0 007.07 7.07l1.71-1.71" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function TaskListBoard() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [tab, setTab] = useState<(typeof tabs)[number]>("All Tasks");
  const [dragId, setDragId] = useState<number | null>(null);

  const toggle = (id: number) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const countFor = (s: Status) => tasks.filter((t) => t.status === s).length;

  const drop = (status: Status) => {
    if (dragId !== null) {
      setTasks((prev) => prev.map((t) => (t.id === dragId ? { ...t, status } : t)));
    }
    setDragId(null);
  };

  const visibleSections =
    tab === "All Tasks" ? sections : sections.filter((s) => s === tab);

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-gray-100 px-5 py-4 dark:border-gray-800 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          {tabs.map((t) => {
            const count = t === "All Tasks" ? tasks.length : countFor(t);
            const active = tab === t;
            return (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-theme-sm font-medium transition-colors ${
                  active
                    ? "bg-white text-gray-900 shadow-theme-xs ring-1 ring-gray-200 dark:bg-gray-800 dark:text-white dark:ring-gray-700"
                    : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                {t}
                <span
                  className={`flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-theme-xs font-medium ${
                    active
                      ? "bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400"
                      : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03]">
            <svg className="size-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 5h14M6 10h8M8.5 15h3" strokeLinecap="round" />
            </svg>
            Filter &amp; Short
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-theme-sm font-medium text-white transition-colors hover:bg-brand-600">
            Add New Task
            <svg className="size-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M10 4v12M4 10h12" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-8 p-5">
        {visibleSections.map((section) => {
          const items = tasks.filter((t) => t.status === section);
          return (
            <div
              key={section}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => drop(section)}
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-gray-800 text-theme-sm dark:text-white/90">
                    {section}
                  </h3>
                  <span
                    className={`flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-theme-xs font-medium ${countBadge[section]}`}
                  >
                    {items.length}
                  </span>
                </div>
                <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                  <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="5" cy="12" r="1.6" />
                    <circle cx="12" cy="12" r="1.6" />
                    <circle cx="19" cy="12" r="1.6" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col gap-3">
                {items.map((task) => (
                  <div
                    key={task.id}
                    draggable
                    onDragStart={() => setDragId(task.id)}
                    onDragEnd={() => setDragId(null)}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3.5 shadow-theme-xs dark:border-gray-800 dark:bg-white/[0.02]"
                  >
                    <span className="cursor-grab text-gray-400 active:cursor-grabbing">
                      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M4 8h16M4 16h16" strokeLinecap="round" />
                      </svg>
                    </span>
                    <input
                      type="checkbox"
                      checked={!!task.done}
                      onChange={() => toggle(task.id)}
                      className="h-5 w-5 shrink-0 rounded-md border-gray-300 text-brand-500 focus:ring-brand-500/20 dark:border-gray-700"
                    />
                    <span
                      className={`flex-1 truncate text-theme-sm ${
                        task.done
                          ? "text-gray-400 line-through dark:text-gray-500"
                          : "font-medium text-gray-800 dark:text-white/90"
                      }`}
                    >
                      {task.title}
                    </span>

                    <div className="flex shrink-0 items-center gap-3">
                      {task.tag && (
                        <span className={`hidden rounded-full px-2.5 py-0.5 text-theme-xs font-medium sm:inline-flex ${task.tagColor}`}>
                          {task.tag}
                        </span>
                      )}
                      <span className="hidden items-center gap-1.5 text-theme-xs text-gray-500 dark:text-gray-400 sm:flex">
                        <CalendarIcon />
                        {task.due}
                      </span>
                      {task.comments ? (
                        <span className="hidden items-center gap-1 text-theme-xs text-gray-400 sm:flex">
                          <CommentIcon />
                          {task.comments}
                        </span>
                      ) : null}
                      {task.links ? (
                        <span className="hidden items-center gap-1 text-theme-xs text-gray-400 sm:flex">
                          <LinkIcon />
                          {task.links}
                        </span>
                      ) : null}
                      <img
                        src={task.assignee}
                        alt="assignee"
                        className="h-7 w-7 rounded-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
