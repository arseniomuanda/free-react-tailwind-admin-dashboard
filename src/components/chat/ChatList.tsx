import { useState } from "react";

interface Contact {
  id: number;
  name: string;
  role: string;
  avatar: string;
  time: string;
  unread?: number;
  online?: boolean;
}

const contacts: Contact[] = [
  { id: 1, name: "Lindsey Curtis", role: "Designer", avatar: "/images/user/user-01.jpg", time: "15 mins", unread: 2, online: true },
  { id: 2, name: "Kaiya George", role: "Project Manager", avatar: "/images/user/user-02.jpg", time: "30 mins", online: true },
  { id: 3, name: "Zain Geidt", role: "Content Writer", avatar: "/images/user/user-03.jpg", time: "45 mins" },
  { id: 4, name: "Abram Schleifer", role: "Developer", avatar: "/images/user/user-04.jpg", time: "2 days", unread: 1 },
  { id: 5, name: "Carla George", role: "Marketing", avatar: "/images/user/user-05.jpg", time: "1 week", online: true },
  { id: 6, name: "Wilium Vamos", role: "Sales", avatar: "/images/user/user-06.jpg", time: "2 weeks" },
];

interface Props {
  activeId: number;
  onSelect: (id: number) => void;
}

export default function ChatList({ activeId, onSelect }: Props) {
  const [query, setQuery] = useState("");
  const filtered = contacts.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="border-b border-gray-100 p-4 dark:border-gray-800">
        <h3 className="mb-3 text-lg font-semibold text-gray-800 dark:text-white/90">
          Chats
        </h3>
        <div className="relative">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M9.16 3.33a5.83 5.83 0 104.13 9.96l3.21 3.21a.83.83 0 101.18-1.18l-3.21-3.21A5.83 5.83 0 009.16 3.33zM5 9.16a4.16 4.16 0 118.33 0 4.16 4.16 0 01-8.33 0z"
                fill="currentColor"
              />
            </svg>
          </span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="h-10 w-full rounded-lg border border-gray-300 bg-transparent pl-9 pr-3 text-theme-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {filtered.map((contact) => (
          <button
            key={contact.id}
            onClick={() => onSelect(contact.id)}
            className={`flex w-full items-center gap-3 border-b border-gray-100 px-4 py-3 text-left transition-colors last:border-b-0 dark:border-gray-800 ${
              activeId === contact.id
                ? "bg-gray-50 dark:bg-white/[0.03]"
                : "hover:bg-gray-50 dark:hover:bg-white/[0.03]"
            }`}
          >
            <div className="relative shrink-0">
              <img
                src={contact.avatar}
                alt={contact.name}
                className="h-11 w-11 rounded-full object-cover"
              />
              {contact.online && (
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success-500 dark:border-gray-900"></span>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="truncate font-medium text-gray-800 text-theme-sm dark:text-white/90">
                  {contact.name}
                </span>
                <span className="shrink-0 text-theme-xs text-gray-400">
                  {contact.time}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="truncate text-theme-xs text-gray-500 dark:text-gray-400">
                  {contact.role}
                </span>
                {contact.unread && (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-500 px-1.5 text-theme-xs font-medium text-white">
                    {contact.unread}
                  </span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
