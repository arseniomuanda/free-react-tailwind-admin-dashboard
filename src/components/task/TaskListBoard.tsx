import { useState } from "react";

type Status = "To Do" | "In Progress" | "Completed";

interface Task {
  id: number;
  title: string;
  tag: string;
  tagColor: string;
  due: string;
  assignees: string[];
  status: Status;
  done?: boolean;
}

const initialTasks: Task[] = [
  { id: 1, title: "Finish user onboarding flow", tag: "Dev", tagColor: "bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400", due: "Tomorrow", assignees: ["/images/user/user-01.jpg", "/images/user/user-02.jpg"], status: "To Do" },
  { id: 2, title: "Design new landing page hero", tag: "Marketing", tagColor: "bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500", due: "Mar 18", assignees: ["/images/user/user-03.jpg"], status: "To Do" },
  { id: 3, title: "Refactor auth middleware", tag: "Dev", tagColor: "bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400", due: "Today", assignees: ["/images/user/user-06.jpg"], status: "In Progress" },
  { id: 4, title: "Email campaign for launch", tag: "Marketing", tagColor: "bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500", due: "Mar 19", assignees: ["/images/user/user-07.jpg", "/images/user/user-08.jpg"], status: "In Progress" },
  { id: 5, title: "Update pricing page copy", tag: "Marketing", tagColor: "bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500", due: "Mar 10", assignees: ["/images/user/user-10.jpg"], status: "Completed", done: true },
  { id: 6, title: "Ship invoice PDF export", tag: "Dev", tagColor: "bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400", due: "Mar 09", assignees: ["/images/user/user-11.jpg", "/images/user/user-12.jpg"], status: "Completed", done: true },
];

const sections: Status[] = ["To Do", "In Progress", "Completed"];
const dotColor: Record<Status, string> = {
  "To Do": "bg-gray-400",
  "In Progress": "bg-brand-500",
  Completed: "bg-success-500",
};

export default function TaskListBoard() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const toggle = (id: number) =>
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );

  return (
    <div className="flex flex-col gap-6">
      {sections.map((section) => {
        const items = tasks.filter((t) => t.status === section);
        return (
          <div
            key={section}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]"
          >
            <div className="flex items-center gap-2 border-b border-gray-100 px-5 py-4 dark:border-gray-800">
              <span className={`h-2.5 w-2.5 rounded-full ${dotColor[section]}`}></span>
              <h3 className="font-semibold text-gray-800 text-theme-sm dark:text-white/90">
                {section}
              </h3>
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-gray-100 px-1.5 text-theme-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                {items.length}
              </span>
            </div>

            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              {items.map((task) => (
                <div key={task.id} className="flex items-center gap-3 px-5 py-3.5">
                  <input
                    type="checkbox"
                    checked={!!task.done}
                    onChange={() => toggle(task.id)}
                    className="h-4.5 w-4.5 shrink-0 rounded border-gray-300 text-brand-500 focus:ring-brand-500/20 dark:border-gray-700"
                  />
                  <span
                    className={`flex-1 text-theme-sm ${
                      task.done
                        ? "text-gray-400 line-through dark:text-gray-500"
                        : "font-medium text-gray-800 dark:text-white/90"
                    }`}
                  >
                    {task.title}
                  </span>
                  <span className={`hidden rounded-full px-2.5 py-0.5 text-theme-xs font-medium sm:inline-flex ${task.tagColor}`}>
                    {task.tag}
                  </span>
                  <span className="hidden w-20 text-theme-xs text-gray-500 dark:text-gray-400 sm:block">
                    {task.due}
                  </span>
                  <div className="flex -space-x-2">
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
