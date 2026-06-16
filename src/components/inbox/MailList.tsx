import { useState } from "react";
import { Link } from "react-router";
import { ShootingStarIcon } from "../../icons";

interface Mail {
  id: number;
  sender: string;
  avatar: string;
  subject: string;
  preview: string;
  time: string;
  unread?: boolean;
  starred?: boolean;
  attachment?: boolean;
}

const mails: Mail[] = [
  { id: 1, sender: "Lindsey Curtis", avatar: "/images/user/user-01.jpg", subject: "Project kickoff next week", preview: "Hi team, I wanted to confirm the kickoff meeting for the new project…", time: "9:34 AM", unread: true, starred: true, attachment: true },
  { id: 2, sender: "Kaiya George", avatar: "/images/user/user-02.jpg", subject: "Invoice #INV-2025 is ready", preview: "Please find attached the invoice for last month's services…", time: "8:12 AM", unread: true, attachment: true },
  { id: 3, sender: "Zain Geidt", avatar: "/images/user/user-03.jpg", subject: "Re: Design feedback", preview: "Thanks for the mockups — a couple of small tweaks on the hero…", time: "Yesterday", starred: true },
  { id: 4, sender: "Abram Schleifer", avatar: "/images/user/user-04.jpg", subject: "Your subscription renews soon", preview: "This is a friendly reminder that your Pro plan renews on the 28th…", time: "Yesterday" },
  { id: 5, sender: "Carla George", avatar: "/images/user/user-05.jpg", subject: "Weekly newsletter", preview: "Here's what happened this week across the product and the team…", time: "Mar 12" },
  { id: 6, sender: "Wilium Vamos", avatar: "/images/user/user-06.jpg", subject: "Quick question about the API", preview: "Hey, is there a rate limit on the new endpoints we shipped…", time: "Mar 11", unread: true },
];

export default function MailList() {
  const [selected, setSelected] = useState<number[]>([]);
  const allSelected = selected.length === mails.length;

  const toggle = (id: number) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      {/* Toolbar */}
      <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3 dark:border-gray-800">
        <input
          type="checkbox"
          checked={allSelected}
          onChange={() =>
            setSelected(allSelected ? [] : mails.map((m) => m.id))
          }
          className="h-4 w-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500/20 dark:border-gray-700"
        />
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M3.33 10a6.67 6.67 0 0111.3-4.8M16.67 10a6.67 6.67 0 01-11.3 4.8" strokeLinecap="round" />
            <path d="M14.5 2.5v3h-3M5.5 17.5v-3h3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="relative ml-auto w-full max-w-xs">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.16 3.33a5.83 5.83 0 104.13 9.96l3.21 3.21a.83.83 0 101.18-1.18l-3.21-3.21A5.83 5.83 0 009.16 3.33z" />
            </svg>
          </span>
          <input
            placeholder="Search mail..."
            className="h-9 w-full rounded-lg border border-gray-300 bg-transparent pl-9 pr-3 text-theme-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none dark:border-gray-700 dark:text-white/90"
          />
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {mails.map((mail) => (
          <div
            key={mail.id}
            className={`flex items-center gap-3 border-b border-gray-100 px-4 py-3 transition-colors last:border-b-0 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-white/[0.03] ${
              mail.unread ? "bg-gray-50/60 dark:bg-white/[0.02]" : ""
            }`}
          >
            <input
              type="checkbox"
              checked={selected.includes(mail.id)}
              onChange={() => toggle(mail.id)}
              className="h-4 w-4 shrink-0 rounded border-gray-300 text-brand-500 focus:ring-brand-500/20 dark:border-gray-700"
            />
            <button className={mail.starred ? "text-warning-500" : "text-gray-300 hover:text-gray-400 dark:text-gray-600"}>
              <ShootingStarIcon className="size-4.5" />
            </button>
            <img
              src={mail.avatar}
              alt={mail.sender}
              className="h-9 w-9 shrink-0 rounded-full object-cover"
            />
            <Link to="/inbox-details" className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`truncate text-theme-sm ${
                    mail.unread
                      ? "font-semibold text-gray-800 dark:text-white/90"
                      : "font-medium text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {mail.sender}
                </span>
                <span className="flex shrink-0 items-center gap-2">
                  {mail.attachment && (
                    <svg className="size-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M21.44 11.05l-9.19 9.19a5 5 0 01-7.07-7.07l9.19-9.19a3.33 3.33 0 014.71 4.71l-9.2 9.19a1.67 1.67 0 01-2.36-2.36l8.49-8.48" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  <span className="text-theme-xs text-gray-400">{mail.time}</span>
                </span>
              </div>
              <p className="truncate text-theme-sm text-gray-800 dark:text-white/90">
                {mail.subject}
              </p>
              <p className="truncate text-theme-xs text-gray-500 dark:text-gray-400">
                {mail.preview}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
