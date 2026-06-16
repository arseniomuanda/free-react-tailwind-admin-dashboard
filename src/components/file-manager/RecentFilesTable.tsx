import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

type FileType = "Video" | "Image" | "Document" | "Audio";

interface FileRow {
  name: string;
  type: FileType;
  size: string;
  modified: string;
}

const files: FileRow[] = [
  { name: "Product demo final.mp4", type: "Video", size: "489 MB", modified: "Jan 12, 2027" },
  { name: "Brand guidelines.pdf", type: "Document", size: "12 MB", modified: "Feb 03, 2027" },
  { name: "Hero banner.png", type: "Image", size: "8 MB", modified: "Feb 18, 2027" },
  { name: "Podcast episode 04.mp3", type: "Audio", size: "89 MB", modified: "Mar 22, 2027" },
  { name: "Q2 report.pdf", type: "Document", size: "10 MB", modified: "Apr 09, 2027" },
  { name: "Team offsite.jpg", type: "Image", size: "5 MB", modified: "May 14, 2027" },
  { name: "Launch teaser.mp4", type: "Video", size: "245 MB", modified: "Jul 01, 2027" },
];

const typeStyle: Record<FileType, string> = {
  Video: "bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400",
  Image: "bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500",
  Document: "bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-orange-400",
  Audio: "bg-blue-light-50 text-blue-light-500 dark:bg-blue-light-500/15 dark:text-blue-light-500",
};

function FileGlyph({ type }: { type: FileType }) {
  const common = "size-5";
  if (type === "Video")
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="5" width="14" height="14" rx="2" />
        <path d="M17 9l4-2v10l-4-2" strokeLinejoin="round" />
      </svg>
    );
  if (type === "Image")
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 15l5-5 4 4 3-3 6 6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8.5" cy="9" r="1.3" />
      </svg>
    );
  if (type === "Audio")
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M9 18V6l10-2v12" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="16" cy="16" r="3" />
      </svg>
    );
  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" strokeLinejoin="round" />
      <path d="M14 2v6h6" strokeLinejoin="round" />
    </svg>
  );
}

export default function RecentFilesTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Recent Files
        </h3>
        <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03]">
          See all
        </button>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              {["File Name", "Category", "Size", "Date Modified", "Action"].map((h) => (
                <TableCell
                  key={h}
                  isHeader
                  className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  {h}
                </TableCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {files.map((file) => (
              <TableRow key={file.name}>
                <TableCell className="py-3">
                  <div className="flex items-center gap-3">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-lg ${typeStyle[file.type]}`}>
                      <FileGlyph type={file.type} />
                    </span>
                    <span className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                      {file.name}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {file.type}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {file.size}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {file.modified}
                </TableCell>
                <TableCell className="py-3">
                  <button className="text-gray-400 hover:text-brand-500">
                    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
