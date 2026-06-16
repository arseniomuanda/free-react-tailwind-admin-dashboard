import { Link } from "react-router";
import { ShootingStarIcon, TrashBinIcon } from "../../icons";

const attachments = [
  { name: "project-brief.pdf", size: "2.4 MB" },
  { name: "timeline.xlsx", size: "865 KB" },
];

export default function MailDetails() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <Link
            to="/inbox"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/[0.03]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Project kickoff next week
          </h3>
        </div>
        <div className="flex items-center gap-1">
          <button className="flex h-9 w-9 items-center justify-center rounded-lg text-warning-500 hover:bg-gray-50 dark:hover:bg-white/[0.03]">
            <ShootingStarIcon className="size-5" />
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-50 hover:text-error-500 dark:hover:bg-white/[0.03]">
            <TrashBinIcon className="size-5" />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto p-5 custom-scrollbar">
        <div className="flex items-start gap-3">
          <img
            src="/images/user/user-01.jpg"
            alt="Lindsey Curtis"
            className="h-11 w-11 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-between gap-1">
              <div>
                <span className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                  Lindsey Curtis
                </span>
                <span className="ml-2 text-theme-xs text-gray-400">
                  &lt;lindsey@company.com&gt;
                </span>
              </div>
              <span className="text-theme-xs text-gray-400">9:34 AM · Today</span>
            </div>
            <span className="text-theme-xs text-gray-500 dark:text-gray-400">
              to me
            </span>
          </div>
        </div>

        <div className="mt-5 space-y-4 text-theme-sm leading-relaxed text-gray-700 dark:text-gray-300">
          <p>Hi team,</p>
          <p>
            I wanted to confirm the kickoff meeting for the new project next
            Tuesday at 10:00 AM. We'll go over the scope, timeline, and assign
            the first set of tasks. I've attached the brief and a draft timeline
            for your review beforehand.
          </p>
          <p>
            Please take a look and come with any questions. Excited to get
            started with everyone!
          </p>
          <p>
            Best regards,
            <br />
            Lindsey
          </p>
        </div>

        {/* Attachments */}
        <div className="mt-6">
          <h4 className="mb-3 text-theme-xs font-medium uppercase tracking-wide text-gray-400">
            Attachments ({attachments.length})
          </h4>
          <div className="flex flex-wrap gap-3">
            {attachments.map((file) => (
              <div
                key={file.name}
                className="flex items-center gap-3 rounded-lg border border-gray-200 px-3 py-2.5 dark:border-gray-800"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-500 dark:bg-brand-500/15">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" strokeLinejoin="round" />
                    <path d="M14 2v6h6" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                    {file.name}
                  </p>
                  <span className="text-theme-xs text-gray-400">{file.size}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reply actions */}
      <div className="border-t border-gray-100 p-4 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-white/[0.03]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M9 17l-5-5 5-5M4 12h11a5 5 0 015 5v1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Reply
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-white/[0.03]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M15 17l5-5-5-5M20 12H9a5 5 0 00-5 5v1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Forward
          </button>
        </div>
      </div>
    </div>
  );
}
