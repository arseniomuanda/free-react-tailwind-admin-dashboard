import {
  EnvelopeIcon,
  FolderIcon,
  MailIcon,
  PaperPlaneIcon,
  PlusIcon,
  ShootingStarIcon,
  TrashBinIcon,
} from "../../icons";

interface Folder {
  name: string;
  icon: React.ReactNode;
  count?: number;
}

const folders: Folder[] = [
  { name: "Inbox", icon: <MailIcon className="size-5" />, count: 24 },
  { name: "Starred", icon: <ShootingStarIcon className="size-5" />, count: 6 },
  { name: "Sent", icon: <PaperPlaneIcon className="size-5" /> },
  { name: "Drafts", icon: <EnvelopeIcon className="size-5" />, count: 2 },
  { name: "Spam", icon: <FolderIcon className="size-5" /> },
  { name: "Trash", icon: <TrashBinIcon className="size-5" /> },
];

const labels = [
  { name: "Personal", color: "bg-brand-500" },
  { name: "Work", color: "bg-success-500" },
  { name: "Payments", color: "bg-warning-500" },
  { name: "Invoices", color: "bg-error-500" },
];

interface Props {
  active?: string;
  onCompose: () => void;
}

export default function MailSidebar({ active = "Inbox", onCompose }: Props) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="p-4">
        <button
          onClick={onCompose}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-theme-sm font-medium text-white transition-colors hover:bg-brand-600"
        >
          <PlusIcon className="size-5" />
          Compose
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-3 pb-4 custom-scrollbar">
        <ul className="flex flex-col gap-1">
          {folders.map((folder) => (
            <li key={folder.name}>
              <a
                href="/inbox"
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-theme-sm transition-colors ${
                  active === folder.name
                    ? "bg-brand-50 font-medium text-brand-600 dark:bg-brand-500/15 dark:text-brand-400"
                    : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/[0.03]"
                }`}
              >
                <span
                  className={
                    active === folder.name
                      ? "text-brand-500 dark:text-brand-400"
                      : "text-gray-400"
                  }
                >
                  {folder.icon}
                </span>
                <span className="flex-1">{folder.name}</span>
                {folder.count !== undefined && (
                  <span
                    className={`text-theme-xs font-medium ${
                      active === folder.name
                        ? "text-brand-500 dark:text-brand-400"
                        : "text-gray-400"
                    }`}
                  >
                    {folder.count}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-6 px-3">
          <h4 className="mb-3 text-theme-xs font-medium uppercase tracking-wide text-gray-400 dark:text-gray-500">
            Labels
          </h4>
          <ul className="flex flex-col gap-2.5">
            {labels.map((label) => (
              <li key={label.name}>
                <a
                  href="/inbox"
                  className="flex items-center gap-3 text-theme-sm text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
                >
                  <span className={`h-2.5 w-2.5 rounded-full ${label.color}`}></span>
                  {label.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
