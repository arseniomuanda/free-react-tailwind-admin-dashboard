import { MoreDotIcon } from "../../icons";

interface Folder {
  name: string;
  files: string;
  size: string;
}

const folders: Folder[] = [
  { name: "Image", files: "345 Files", size: "26.40 GB" },
  { name: "Documents", files: "130 Files", size: "26.40 GB" },
  { name: "Apps", files: "130 Files", size: "26.40 GB" },
  { name: "Downloads", files: "345 Files", size: "26.40 GB" },
];

const FolderGlyph = () => (
  <svg className="size-7" viewBox="0 0 24 24" fill="#FDB022">
    <path d="M3 6a2 2 0 012-2h4l2 2h8a2 2 0 012 2v1H3V6z" opacity="0.7" />
    <path d="M3 8h18a1 1 0 011 1v8a2 2 0 01-2 2H4a2 2 0 01-2-2V9a1 1 0 011-1z" />
  </svg>
);

export default function FolderGrid() {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          All Folders
        </h3>
        <button className="inline-flex items-center gap-1 text-theme-sm font-medium text-brand-500 hover:text-brand-600 dark:text-brand-400">
          View All
          <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
        {folders.map((folder) => (
          <div
            key={folder.name}
            className="rounded-xl border border-gray-200 bg-gray-50 p-5 transition-shadow hover:shadow-theme-md dark:border-gray-800 dark:bg-white/[0.02]"
          >
            <div className="flex items-start justify-between">
              <FolderGlyph />
              <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <MoreDotIcon />
              </button>
            </div>
            <p className="mt-6 font-medium text-gray-800 text-theme-sm dark:text-white/90">
              {folder.name}
            </p>
            <div className="mt-1 flex items-center justify-between text-theme-xs text-gray-400">
              <span>{folder.files}</span>
              <span>{folder.size}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
