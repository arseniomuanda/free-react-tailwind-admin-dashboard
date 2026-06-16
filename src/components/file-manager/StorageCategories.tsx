import { AudioIcon, DocsIcon, DownloadIcon, PlusIcon, VideoIcon } from "../../icons";

interface Category {
  name: string;
  files: string;
  size: string;
  percent: number;
  color: string;
  icon: React.ReactNode;
}

const ImageGlyph = () => (
  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 15l5-5 4 4 3-3 6 6" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="8.5" cy="9" r="1.3" />
  </svg>
);
const AppsGlyph = () => (
  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>
);

const categories: Category[] = [
  { name: "Image", files: "245 Files", size: "26.40 GB", percent: 17, color: "#465FFF", icon: <ImageGlyph /> },
  { name: "Videos", files: "245 Files", size: "26.40 GB", percent: 22, color: "#7592FF", icon: <VideoIcon className="size-5" /> },
  { name: "Audio", files: "245 Files", size: "26.40 GB", percent: 24, color: "#F670C7", icon: <AudioIcon className="size-5" /> },
  { name: "Apps", files: "245 Files", size: "26.40 GB", percent: 46, color: "#FD853A", icon: <AppsGlyph /> },
  { name: "Docs", files: "245 Files", size: "26.40 GB", percent: 18, color: "#12B76A", icon: <DocsIcon className="size-5" /> },
  { name: "Downloads", files: "245 Files", size: "26.40 GB", percent: 16, color: "#36BFFA", icon: <DownloadIcon className="size-5" /> },
];

export default function StorageCategories() {
  return (
    <div className="flex h-full flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
      <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-3 text-theme-sm font-medium text-white transition-colors hover:bg-brand-600">
        <PlusIcon className="size-5" />
        Upload File
      </button>

      <div className="flex flex-col gap-4">
        {categories.map((cat) => (
          <div key={cat.name} className="flex items-center gap-3">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
              style={{ backgroundColor: `${cat.color}1A`, color: cat.color }}
            >
              {cat.icon}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                  {cat.name}
                </span>
                <span className="text-theme-xs text-gray-400">{cat.percent}%</span>
              </div>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${cat.percent}%`, backgroundColor: cat.color }}
                ></div>
              </div>
              <span className="mt-1 block text-theme-xs text-gray-400">
                {cat.files} · {cat.size}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto rounded-xl border border-gray-100 bg-gray-50 p-4 text-center dark:border-gray-800 dark:bg-white/[0.02]">
        <div className="mx-auto mb-3 h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
          <div className="h-full rounded-full bg-brand-500" style={{ width: "42%" }}></div>
        </div>
        <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
          585 GB free space left
        </p>
        <p className="mt-0.5 text-theme-xs text-gray-400">of 1 TB total storage</p>
        <button className="mt-3 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-theme-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-white/[0.03]">
          Upgrade Storage
        </button>
      </div>
    </div>
  );
}
