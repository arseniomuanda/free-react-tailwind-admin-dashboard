import { AudioIcon, DocsIcon, DownloadIcon, PlusIcon, VideoIcon } from "../../icons";

interface Media {
  name: string;
  files: string;
  used: string;
  size: string;
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

const media: Media[] = [
  { name: "Image", files: "245 files", used: "17% Used", size: "26.40 GB", color: "#039855", icon: <ImageGlyph /> },
  { name: "Videos", files: "245 files", used: "22% Used", size: "26.40 GB", color: "#F63D68", icon: <VideoIcon className="size-5" /> },
  { name: "Audio", files: "245 files", used: "24% Used", size: "26.40 GB", color: "#6172F3", icon: <AudioIcon className="size-5" /> },
  { name: "Apps", files: "245 files", used: "46% Used", size: "26.40 GB", color: "#FD853A", icon: <AppsGlyph /> },
  { name: "Docs", files: "245 files", used: "18% Used", size: "26.40 GB", color: "#F79009", icon: <DocsIcon className="size-5" /> },
  { name: "Downloads", files: "245 files", used: "16% Used", size: "26.40 GB", color: "#7A5AF8", icon: <DownloadIcon className="size-5" /> },
];

export default function AllMedia() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          All Media
        </h3>
        <div className="flex items-center gap-3">
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.16 3.33a5.83 5.83 0 104.13 9.96l3.21 3.21a.83.83 0 101.18-1.18l-3.21-3.21A5.83 5.83 0 009.16 3.33z" />
              </svg>
            </span>
            <input
              placeholder="Search..."
              className="h-10 w-full rounded-lg border border-gray-300 bg-transparent pl-9 pr-3 text-theme-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 sm:w-56"
            />
          </div>
          <button className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-theme-sm font-medium text-white transition-colors hover:bg-brand-600">
            <PlusIcon className="size-5" />
            Upload File
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {media.map((m) => (
          <div
            key={m.name}
            className="flex items-center justify-between rounded-xl border border-gray-200 p-4 dark:border-gray-800"
          >
            <div className="flex items-center gap-3">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${m.color}1A`, color: m.color }}
              >
                {m.icon}
              </span>
              <div>
                <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                  {m.name}
                </p>
                <span className="text-theme-xs text-gray-400">{m.used}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-theme-sm font-medium text-gray-700 dark:text-gray-300">
                {m.files}
              </p>
              <span className="text-theme-xs text-gray-400">{m.size}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
