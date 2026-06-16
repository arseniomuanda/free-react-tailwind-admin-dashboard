import { useState } from "react";
import { Modal } from "../ui/modal";
import { PaperPlaneIcon } from "../../icons";
import RichTextEditor from "./RichTextEditor";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ComposeModal({ isOpen, onClose }: Props) {
  const [showCc, setShowCc] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const inputClass =
    "h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-theme-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90";

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isFullscreen={fullscreen}
      showCloseButton={false}
      className={fullscreen ? "" : "mx-4 max-w-[600px]"}
    >
      <div
        className={`flex flex-col bg-white dark:bg-gray-900 ${
          fullscreen ? "h-screen" : "max-h-[85vh] rounded-3xl"
        }`}
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-gray-100 px-6 py-4 dark:border-gray-800">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            New Message
          </h3>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setFullscreen((f) => !f)}
              title={fullscreen ? "Exit fullscreen" : "Fullscreen"}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-white/[0.05] dark:hover:text-gray-300"
            >
              {fullscreen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M9 3v3a2 2 0 01-2 2H4M15 3v3a2 2 0 002 2h3M9 21v-3a2 2 0 00-2-2H4M15 21v-3a2 2 0 012-2h3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M8 3H5a2 2 0 00-2 2v3M16 3h3a2 2 0 012 2v3M8 21H5a2 2 0 01-2-2v-3M16 21h3a2 2 0 002-2v-3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
            <button
              onClick={onClose}
              title="Close"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-white/[0.05] dark:hover:text-gray-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Body (scrolls; textarea grows to fill) */}
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-6 py-5 custom-scrollbar">
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

          <RichTextEditor className="min-h-[200px] flex-1" />
        </div>

        {/* Footer */}
        <div className="flex shrink-0 items-center justify-between gap-3 border-t border-gray-100 px-6 py-4 dark:border-gray-800">
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
      </div>
    </Modal>
  );
}
