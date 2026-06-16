import { FolderIcon, MoreDotIcon } from "../../icons";

interface Folder {
  name: string;
  files: string;
  size: string;
  color: string;
}

const folders: Folder[] = [
  { name: "Images", files: "345 Files", size: "26.40 GB", color: "#465FFF" },
  { name: "Documents", files: "130 Files", size: "26.40 GB", color: "#12B76A" },
  { name: "Apps", files: "130 Files", size: "26.40 GB", color: "#FD853A" },
  { name: "Downloads", files: "345 Files", size: "26.40 GB", color: "#36BFFA" },
];

export default function FolderGrid() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          All Folders
        </h3>
        <button className="text-theme-sm font-medium text-brand-500 hover:text-brand-600 dark:text-brand-400">
          See all
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {folders.map((folder) => (
          <div
            key={folder.name}
            className="rounded-xl border border-gray-200 p-4 transition-shadow hover:shadow-theme-md dark:border-gray-800"
          >
            <div className="flex items-start justify-between">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${folder.color}1A`, color: folder.color }}
              >
                <FolderIcon className="size-6" />
              </span>
              <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <MoreDotIcon />
              </button>
            </div>
            <p className="mt-4 font-medium text-gray-800 text-theme-sm dark:text-white/90">
              {folder.name}
            </p>
            <div className="mt-1 flex items-center gap-2 text-theme-xs text-gray-400">
              <span>{folder.files}</span>
              <span className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
              <span>{folder.size}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
