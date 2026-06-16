import { useState } from "react";
import { Modal } from "../ui/modal";
import { PaperPlaneIcon } from "../../icons";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ComposeModal({ isOpen, onClose }: Props) {
  const [showCc, setShowCc] = useState(false);

  const inputClass =
    "h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-theme-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90";

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="mx-4 max-w-[600px]"
      showCloseButton={false}
    >
      <div className="flex items-center justify-between rounded-t-3xl border-b border-gray-100 px-6 py-4 dark:border-gray-800">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          New Message
        </h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="space-y-4 px-6 py-5">
        <div className="flex items-center gap-3">
          <label className="w-12 shrink-0 text-theme-sm text-gray-500 dark:text-gray-400">
            To
          </label>
          <input type="email" placeholder="recipient@email.com" className={inputClass} />
          {!showCc && (
            <button
              onClick={() => setShowCc(true)}
              className="shrink-0 text-theme-sm font-medium text-brand-500 hover:text-brand-600"
            >
              Cc/Bcc
            </button>
          )}
        </div>

        {showCc && (
          <>
            <div className="flex items-center gap-3">
              <label className="w-12 shrink-0 text-theme-sm text-gray-500 dark:text-gray-400">
                Cc
              </label>
              <input type="email" placeholder="cc@email.com" className={inputClass} />
            </div>
            <div className="flex items-center gap-3">
              <label className="w-12 shrink-0 text-theme-sm text-gray-500 dark:text-gray-400">
                Bcc
              </label>
              <input type="email" placeholder="bcc@email.com" className={inputClass} />
            </div>
          </>
        )}

        <div className="flex items-center gap-3">
          <label className="w-12 shrink-0 text-theme-sm text-gray-500 dark:text-gray-400">
            Subject
          </label>
          <input type="text" placeholder="Subject" className={inputClass} />
        </div>

        <textarea
          rows={8}
          placeholder="Write your message…"
          className="w-full resize-none rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-theme-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90"
        ></textarea>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-gray-100 px-6 py-4 dark:border-gray-800">
        <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-white/[0.03]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M21.44 11.05l-9.19 9.19a5 5 0 01-7.07-7.07l9.19-9.19a3.33 3.33 0 014.71 4.71l-9.2 9.19a1.67 1.67 0 01-2.36-2.36l8.49-8.48" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Attach
        </button>
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="rounded-lg px-4 py-2.5 text-theme-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Discard
          </button>
          <button
            onClick={onClose}
            className="flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-2.5 text-theme-sm font-medium text-white transition-colors hover:bg-brand-600"
          >
            <PaperPlaneIcon className="size-4" />
            Send
          </button>
        </div>
      </div>
    </Modal>
  );
}
