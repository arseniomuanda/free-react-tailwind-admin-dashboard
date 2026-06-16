import { useState } from "react";
import { PlusIcon } from "../../icons";

interface Group {
  title: string;
  items: string[];
}

const groups: Group[] = [
  {
    title: "Starred",
    items: ["Landing page copy", "Product descriptions"],
  },
  {
    title: "Recent",
    items: [
      "Welcome email sequence",
      "Blog intro about AI",
      "Tweet thread ideas",
    ],
  },
  {
    title: "Last Week",
    items: ["Cold outreach draft", "Release notes v2.0"],
  },
];

export default function ConversationList() {
  const [active, setActive] = useState("Welcome email sequence");

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="border-b border-gray-100 p-4 dark:border-gray-800">
        <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-theme-sm font-medium text-white transition-colors hover:bg-brand-600">
          <PlusIcon className="size-5" />
          New Chat
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
        {groups.map((group) => (
          <div key={group.title} className="mb-5 last:mb-0">
            <h4 className="mb-2 px-2 text-theme-xs font-medium uppercase tracking-wide text-gray-400 dark:text-gray-500">
              {group.title}
            </h4>
            <ul className="flex flex-col gap-1">
              {group.items.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => setActive(item)}
                    className={`block w-full truncate rounded-lg px-3 py-2 text-left text-theme-sm transition-colors ${
                      active === item
                        ? "bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400"
                        : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/[0.03]"
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
