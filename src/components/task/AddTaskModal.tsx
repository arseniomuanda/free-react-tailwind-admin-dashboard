import { useState } from "react";
import { Modal } from "../ui/modal";

export interface NewTaskData {
  title: string;
  tag: string;
  tagColor: string;
  assignee: { name: string; avatar: string };
  description: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onCreate?: (data: NewTaskData) => void;
}

const TAGS: { name: string; color: string }[] = [
  { name: "Marketing", color: "bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400" },
  { name: "Template", color: "bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500" },
  { name: "Development", color: "bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-orange-400" },
  { name: "Design", color: "bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400" },
];

const ASSIGNEES = [
  { name: "Mayad Ahmed", avatar: "/images/user/user-01.jpg" },
  { name: "Lindsey Curtis", avatar: "/images/user/user-02.jpg" },
  { name: "Kaiya George", avatar: "/images/user/user-03.jpg" },
  { name: "Zain Geidt", avatar: "/images/user/user-04.jpg" },
];

const attachments = [
  { name: "Guidelines.pdf", type: "PDF", color: "bg-error-50 text-error-600 dark:bg-error-500/15" },
  { name: "Branding Assets", type: "Media", color: "bg-success-50 text-success-600 dark:bg-success-500/15" },
];

const viewers = [
  "/images/user/user-05.jpg",
  "/images/user/user-06.jpg",
  "/images/user/user-07.jpg",
];

const selectClass =
  "h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 pr-10 text-theme-sm text-gray-800 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90";

function Chevron() {
  return (
    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function AddTaskModal({ isOpen, onClose, onCreate }: Props) {
  const [tag, setTag] = useState(TAGS[0].name);
  const [assignee, setAssignee] = useState(ASSIGNEES[0].name);
  const [description, setDescription] = useState("");

  const reset = () => {
    setTag(TAGS[0].name);
    setAssignee(ASSIGNEES[0].name);
    setDescription("");
  };

  const create = () => {
    const tagObj = TAGS.find((t) => t.name === tag) ?? TAGS[0];
    const assigneeObj = ASSIGNEES.find((a) => a.name === assignee) ?? ASSIGNEES[0];
    const title = description.trim().split("\n")[0].slice(0, 80) || "New task";
    onCreate?.({
      title,
      tag: tagObj.name,
      tagColor: tagObj.color,
      assignee: assigneeObj,
      description: description.trim(),
    });
    reset();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="mx-4 max-w-[600px]"
      showCloseButton={false}
    >
      <div className="flex max-h-[88vh] flex-col rounded-3xl bg-white dark:bg-gray-900">
        {/* Header */}
        <div className="flex shrink-0 items-start justify-between gap-3 px-6 pt-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white/90">
              Add a new task
            </h3>
            <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">
              Effortlessly manage your to-do list: add a new task
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 space-y-5 overflow-y-auto px-6 py-5 custom-scrollbar">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-400">
                Tags
              </label>
              <div className="relative">
                <select value={tag} onChange={(e) => setTag(e.target.value)} className={selectClass}>
                  {TAGS.map((t) => (
                    <option key={t.name}>{t.name}</option>
                  ))}
                </select>
                <Chevron />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-400">
                Assignees
              </label>
              <div className="relative">
                <select value={assignee} onChange={(e) => setAssignee(e.target.value)} className={selectClass}>
                  {ASSIGNEES.map((a) => (
                    <option key={a.name}>{a.name}</option>
                  ))}
                </select>
                <Chevron />
              </div>
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-400">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              placeholder="Type your description here..."
              className="w-full resize-y rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-theme-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90"
            ></textarea>
          </div>

          {/* Attachments */}
          <div className="rounded-2xl border border-gray-200 p-4 dark:border-gray-800">
            <div className="mb-3 flex items-center gap-3">
              <h4 className="text-theme-sm font-semibold text-gray-800 dark:text-white/90">
                Attachments
              </h4>
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <button className="text-theme-sm font-medium text-brand-500 hover:text-brand-600">
                Upload file
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {attachments.map((file) => (
                <div
                  key={file.name}
                  className="flex items-center gap-2.5 rounded-lg border border-gray-200 px-3 py-2.5 dark:border-gray-800"
                >
                  <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${file.color}`}>
                    {file.type === "PDF" ? (
                      <span className="text-[10px] font-bold">PDF</span>
                    ) : (
                      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <rect x="3" y="4" width="18" height="14" rx="2" />
                        <path d="M3 14l4-4 4 4 3-3 7 6" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="8.5" cy="8.5" r="1.2" />
                      </svg>
                    )}
                  </span>
                  <div>
                    <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                      {file.name}
                    </p>
                    <span className="text-theme-xs text-gray-400">
                      {file.type} &middot; Download
                    </span>
                  </div>
                </div>
              ))}
              <button className="flex h-[52px] w-12 items-center justify-center rounded-lg border border-dashed border-gray-300 text-gray-400 hover:border-brand-300 hover:text-brand-500 dark:border-gray-700">
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex shrink-0 flex-col gap-4 px-6 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="text-theme-sm text-gray-500 dark:text-gray-400">
              Viewers:
            </span>
            <div className="flex -space-x-2">
              {viewers.map((v) => (
                <img
                  key={v}
                  src={v}
                  alt="viewer"
                  className="h-7 w-7 rounded-full border-2 border-white object-cover dark:border-gray-900"
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-white/[0.03]"
            >
              Cancel
            </button>
            <button
              onClick={create}
              className="rounded-lg bg-brand-500 px-5 py-2.5 text-theme-sm font-medium text-white transition-colors hover:bg-brand-600"
            >
              Create Task
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
