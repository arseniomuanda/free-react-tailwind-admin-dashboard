import { useState } from "react";
import TaskDetailsModal, { TaskDetail } from "./TaskDetailsModal";
import AddTaskModal, { NewTaskData } from "./AddTaskModal";

type Status = "To Do" | "In Progress" | "Completed";

interface Assignee {
  name: string;
  avatar: string;
}

interface Task {
  id: number;
  title: string;
  description?: string;
  image?: string;
  tag?: string;
  tagColor?: string;
  due: string;
  assignees: Assignee[];
  comments?: number;
  links?: number;
  status: Status;
}

const TAG = {
  Marketing: "bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400",
  Template: "bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500",
  Dev: "bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-orange-400",
  Development: "bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-orange-400",
};

const U = (n: string, name: string) => ({ name, avatar: `/images/user/${n}.jpg` });

const initialTasks: Task[] = [
  { id: 1, title: "Finish user onboarding", tag: "Marketing", tagColor: TAG.Marketing, due: "Tomorrow", comments: 1, assignees: [U("user-01", "Lindsey Curtis")], status: "To Do" },
  { id: 2, title: "Solve the Dribbble prioritisation issue with the team", due: "Jan 8, 2027", comments: 2, links: 1, assignees: [U("user-02", "Kaiya George"), U("user-03", "Zain Geidt")], status: "To Do" },
  { id: 3, title: "Change license and remove products", tag: "Dev", tagColor: TAG.Dev, due: "Jan 8, 2027", assignees: [U("user-04", "Abram Schleifer")], status: "To Do" },

  { id: 4, title: "Work In Progress (WIP) Dashboard", due: "Today", comments: 1, assignees: [U("user-05", "Carla George")], status: "In Progress" },
  { id: 5, title: "Kanban Flow Manager", tag: "Template", tagColor: TAG.Template, due: "Feb 12, 2027", comments: 8, links: 2, assignees: [U("user-06", "Wilium Vamos")], status: "In Progress" },
  { id: 6, title: "Product Update - Q4 2024", description: "Dedicated form for a category of users that will perform actions.", image: "/images/grid-image/image-02.png", due: "Feb 12, 2027", comments: 8, assignees: [U("user-07", "Alena Franci")], status: "In Progress" },
  { id: 7, title: "Make figbot send comment when ticket is auto-moved back to inbox", due: "Mar 08, 2027", comments: 1, assignees: [U("user-08", "John Smith")], status: "In Progress" },

  { id: 8, title: "Manage internal feedback", due: "Tomorrow", comments: 1, assignees: [U("user-09", "Hassan Lee")], status: "Completed" },
  { id: 9, title: "Do some projects on React Native with Flutter", tag: "Development", tagColor: TAG.Development, due: "Jan 8, 2027", assignees: [U("user-10", "Mariana Reis")], status: "Completed" },
  { id: 10, title: "Design marketing assets", tag: "Marketing", tagColor: TAG.Marketing, due: "Jan 8, 2027", comments: 2, links: 1, assignees: [U("user-11", "Pedro Alves")], status: "Completed" },
  { id: 11, title: "Kanban Flow Manager", tag: "Template", tagColor: TAG.Template, due: "Feb 12, 2027", comments: 8, assignees: [U("user-12", "Sofia Costa")], status: "Completed" },
];

const columns: Status[] = ["To Do", "In Progress", "Completed"];
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

export default function TaskKanban() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [tab, setTab] = useState<(typeof tabs)[number]>("All Tasks");
  const [dragId, setDragId] = useState<number | null>(null);
  const [overCol, setOverCol] = useState<Status | null>(null);
  const [selected, setSelected] = useState<TaskDetail | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);

  const addTask = (data: NewTaskData) => {
    setTasks((prev) => [
      {
        id: Math.max(0, ...prev.map((t) => t.id)) + 1,
        title: data.title,
        tag: data.tag,
        tagColor: data.tagColor,
        due: "Today",
        assignees: [data.assignee],
        comments: 0,
        status: "To Do",
      },
      ...prev,
    ]);
  };

  const countFor = (s: Status) => tasks.filter((t) => t.status === s).length;
  const visibleColumns =
    tab === "All Tasks" ? columns : columns.filter((c) => c === tab);

  const drop = (status: Status) => {
    if (dragId !== null) {
      setTasks((prev) => prev.map((t) => (t.id === dragId ? { ...t, status } : t)));
    }
    setDragId(null);
    setOverCol(null);
  };

  const openTask = (task: Task) => {
    setSelected({
      title: task.title,
      description: task.description,
      image: task.image,
      tag: task.tag,
      tagColor: task.tagColor,
      due: task.due,
      status: task.status,
      links: task.links,
      assignees: task.assignees,
    });
    setModalOpen(true);
  };

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
          <button
            onClick={() => setAddOpen(true)}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-theme-sm font-medium text-white transition-colors hover:bg-brand-600"
          >
            Add New Task
            <svg className="size-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M10 4v12M4 10h12" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Board */}
      <div className="grid grid-cols-1 gap-5 p-5 lg:grid-cols-3">
        {visibleColumns.map((col) => {
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
              className={`flex flex-col rounded-2xl p-1 transition-colors ${
                overCol === col ? "bg-brand-50/50 dark:bg-brand-500/5" : ""
              }`}
            >
              <div className="mb-4 flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-gray-800 text-theme-sm dark:text-white/90">
                    {col}
                  </h3>
                  <span className={`flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-theme-xs font-medium ${countBadge[col]}`}>
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
                    onClick={() => openTask(task)}
                    className="cursor-pointer rounded-xl border border-gray-200 bg-white p-4 shadow-theme-xs transition-shadow hover:shadow-theme-md dark:border-gray-800 dark:bg-white/[0.03]"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {task.title}
                      </p>
                      <img
                        src={task.assignees[0]?.avatar}
                        alt="assignee"
                        className="h-6 w-6 shrink-0 rounded-full object-cover"
                      />
                    </div>

                    {task.description && (
                      <p className="mt-2 text-theme-xs text-gray-500 dark:text-gray-400">
                        {task.description}
                      </p>
                    )}
                    {task.image && (
                      <img
                        src={task.image}
                        alt={task.title}
                        className="mt-3 w-full rounded-lg object-cover"
                      />
                    )}

                    <div className="mt-3 flex items-center gap-4 text-theme-xs text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1.5">
                        <CalendarIcon />
                        {task.due}
                      </span>
                      {task.comments ? (
                        <span className="flex items-center gap-1">
                          <CommentIcon />
                          {task.comments}
                        </span>
                      ) : null}
                      {task.links ? (
                        <span className="flex items-center gap-1">
                          <LinkIcon />
                          {task.links}
                        </span>
                      ) : null}
                    </div>

                    {task.tag && (
                      <span className={`mt-3 inline-flex rounded-full px-2.5 py-0.5 text-theme-xs font-medium ${task.tagColor}`}>
                        {task.tag}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <TaskDetailsModal
        task={selected}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
      <AddTaskModal
        isOpen={addOpen}
        onClose={() => setAddOpen(false)}
        onCreate={addTask}
      />
    </div>
  );
}
