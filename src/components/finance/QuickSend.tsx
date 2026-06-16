import { useState } from "react";
import { PaperPlaneIcon, PlusIcon } from "../../icons";

const contacts = [
  { name: "Lindsey", avatar: "/images/user/user-10.jpg" },
  { name: "Kaiya", avatar: "/images/user/user-11.jpg" },
  { name: "Zain", avatar: "/images/user/user-12.jpg" },
  { name: "Abram", avatar: "/images/user/user-13.jpg" },
];

export default function QuickSend() {
  const [amount, setAmount] = useState("250");
  const [selected, setSelected] = useState(0);

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 pb-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
        Quick Send
      </h3>
      <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
        Send money to your recent contacts
      </p>

      <div className="flex items-center gap-4 mt-5">
        {contacts.map((contact, i) => (
          <button
            key={contact.name}
            onClick={() => setSelected(i)}
            className="flex flex-col items-center gap-1.5"
          >
            <span
              className={`h-12 w-12 overflow-hidden rounded-full ring-2 transition-all ${
                selected === i
                  ? "ring-brand-500"
                  : "ring-transparent hover:ring-gray-200 dark:hover:ring-gray-700"
              }`}
            >
              <img
                src={contact.avatar}
                className="h-12 w-12 object-cover"
                alt={contact.name}
              />
            </span>
            <span className="text-theme-xs text-gray-500 dark:text-gray-400">
              {contact.name}
            </span>
          </button>
        ))}
        <button className="flex flex-col items-center gap-1.5">
          <span className="flex items-center justify-center w-12 h-12 text-gray-400 border border-gray-200 border-dashed rounded-full dark:border-gray-700">
            <PlusIcon className="size-5" />
          </span>
          <span className="text-theme-xs text-gray-500 dark:text-gray-400">
            Add
          </span>
        </button>
      </div>

      <div className="mt-6">
        <label className="block mb-1.5 text-theme-sm font-medium text-gray-700 dark:text-gray-400">
          Amount
        </label>
        <div className="flex items-stretch gap-2">
          <div className="relative flex-1">
            <span className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
              $
            </span>
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="h-11 w-full rounded-lg border border-gray-300 bg-transparent pl-8 pr-4 text-theme-sm text-gray-800 shadow-theme-xs focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90"
            />
          </div>
          <select className="h-11 rounded-lg border border-gray-300 bg-transparent px-3 text-theme-sm text-gray-800 shadow-theme-xs focus:border-brand-300 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white/90">
            <option>USD</option>
            <option>EUR</option>
            <option>AOA</option>
          </select>
        </div>
      </div>

      <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-3 text-theme-sm font-medium text-white transition-colors hover:bg-brand-600">
        <PaperPlaneIcon className="size-5" />
        Send Money
      </button>
    </div>
  );
}
