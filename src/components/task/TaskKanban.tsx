import { useState } from "react";

type Status = "To Do" | "In Progress" | "Completed";

interface Task {
  id: number;
  title: string;
  tag: string;
  tagColor: string;
  due: string;
  assignees: string[];
  comments: number;
  links: number;
  status: Status;
}

const initialTasks: Task[] = [
  { id: 1, title: "Finish user onboarding flow", tag: "Dev", tagColor: "bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400", due: "Tomorrow", assignees: ["/images/user/user-01.jpg", "/images/user/user-02.jpg"], comments: 3, links: 2, status: "To Do" },
  { id: 2, title: "Design new landing page hero", tag: "Marketing", tagColor: "bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500", due: "Mar 18", assignees: ["/images/user/user-03.jpg"], comments: 1, links: 0, status: "To Do" },
  { id: 3, title: "Write release notes v2.4", tag: "Template", tagColor: "bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-orange-400", due: "Mar 20", assignees: ["/images/user/user-04.jpg", "/images/user/user-05.jpg"], comments: 0, links: 1, status: "To Do" },
  { id: 4, title: "Refactor auth middleware", tag: "Dev", tagColor: "bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400", due: "Today", assignees: ["/images/user/user-06.jpg"], comments: 5, links: 3, status: "In Progress" },
  { id: 5, title: "Email campaign for launch", tag: "Marketing", tagColor: "bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500", due: "Mar 19", assignees: ["/images/user/user-07.jpg", "/images/user/user-08.jpg"], comments: 2, links: 1, status: "In Progress" },
  { id: 6, title: "Fix dark mode chart colors", tag: "Dev", tagColor: "bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400", due: "Mar 21", assignees: ["/images/user/user-09.jpg"], comments: 4, links: 0, status: "In Progress" },
  { id: 7, title: "Update pricing page copy", tag: "Marketing", tagColor: "bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500", due: "Mar 10", assignees: ["/images/user/user-10.jpg"], comments: 1, links: 2, status: "Completed" },
  { id: 8, title: "Ship invoice PDF export", tag: "Dev", tagColor: "bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400", due: "Mar 09", assignees: ["/images/user/user-11.jpg", "/images/user/user-12.jpg"], comments: 6, links: 4, status: "Completed" },
];

const columns: Status[] = ["To Do", "In Progress", "Completed"];

const dotColor: Record<Status, string> = {
  "To Do": "bg-gray-400",
  "In Progress": "bg-brand-500",
  Completed: "bg-success-500",
};

function MetaIcon({ kind }: { kind: "comment" | "link" }) {
  return kind === "comment" ? (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M10 13a5 5 0 007.07 0l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.07 0l-3 3a5 5 0 007.07 7.07l1.71-1.71" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function TaskKanban() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [dragId, setDragId] = useState<number | null>(null);
  const [overCol, setOverCol] = useState<Status | null>(null);

  const drop = (status: Status) => {
    if (dragId !== null) {
      setTasks((prev) =>
        prev.map((t) => (t.id === dragId ? { ...t, status } : t))
      );
    }
    setDragId(null);
    setOverCol(null);
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-3">
      {columns.map((col) => {
        const colTasks = tasks.filter((t) => t.status === col);
        return (
          <div
            key={col}
            onDragOver={(e) => {
              e.preventDefault();
              setOverCol(col);
            }}
            onDragLeave={() => setOverCol((c) => (c === col ? null : c))}
            onDrop={() => drop(col)}
            className={`flex flex-col rounded-2xl border bg-gray-50 p-4 transition-colors dark:bg-white/[0.02] ${
              overCol === col
                ? "border-brand-400 bg-brand-50/40 dark:border-brand-500/40"
                : "border-gray-200 dark:border-gray-800"
            }`}
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`h-2.5 w-2.5 rounded-full ${dotColor[col]}`}></span>
                <h3 className="font-semibold text-gray-800 text-theme-sm dark:text-white/90">
                  {col}
                </h3>
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-gray-200 px-1.5 text-theme-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                  {colTasks.length}
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

            <div className="flex flex-1 flex-col gap-3">
              {colTasks.map((task) => (
                <div
                  key={task.id}
                  draggable
                  onDragStart={() => setDragId(task.id)}
                  onDragEnd={() => {
                    setDragId(null);
                    setOverCol(null);
                  }}
                  className="cursor-grab rounded-xl border border-gray-200 bg-white p-4 shadow-theme-xs active:cursor-grabbing dark:border-gray-800 dark:bg-white/[0.03]"
                >
                  <span className={`inline-flex rounded-full px-2.5 py-0.5 text-theme-xs font-medium ${task.tagColor}`}>
                    {task.tag}
                  </span>
                  <p className="mt-2 font-medium text-gray-800 text-theme-sm dark:text-white/90">
                    {task.title}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="flex items-center gap-1 text-theme-xs text-gray-500 dark:text-gray-400">
                      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
                      </svg>
                      {task.due}
                    </span>
                    <div className="flex items-center gap-3 text-gray-400">
                      {task.comments > 0 && (
                        <span className="flex items-center gap-1 text-theme-xs">
                          <MetaIcon kind="comment" />
                          {task.comments}
                        </span>
                      )}
                      {task.links > 0 && (
                        <span className="flex items-center gap-1 text-theme-xs">
                          <MetaIcon kind="link" />
                          {task.links}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mt-3 flex -space-x-2">
                    {task.assignees.map((a, i) => (
                      <img
                        key={i}
                        src={a}
                        alt="assignee"
                        className="h-7 w-7 rounded-full border-2 border-white object-cover dark:border-gray-900"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
