import { useRef, useState } from "react";

interface Props {
  placeholder?: string;
  className?: string;
}

/**
 * Lightweight rich-text editor (no external deps) for the compose form.
 * Uses a contentEditable surface + document.execCommand for basic markup:
 * bold, italic, underline, links and lists.
 */
export default function RichTextEditor({ placeholder = "Write your message…", className = "" }: Props) {
  const editorRef = useRef<HTMLDivElement>(null);
  const savedRange = useRef<Range | null>(null);
  const [showLink, setShowLink] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");

  const exec = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  };

  const openLink = () => {
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) {
      savedRange.current = sel.getRangeAt(0).cloneRange();
    }
    setLinkUrl("");
    setShowLink(true);
  };

  const applyLink = () => {
    const raw = linkUrl.trim();
    if (!raw) {
      setShowLink(false);
      return;
    }
    const url = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;

    editorRef.current?.focus();
    const sel = window.getSelection();
    if (savedRange.current && sel) {
      sel.removeAllRanges();
      sel.addRange(savedRange.current);
    }

    if (savedRange.current && savedRange.current.collapsed) {
      document.execCommand(
        "insertHTML",
        false,
        `<a href="${url}" target="_blank" rel="noopener noreferrer">${raw}</a>`
      );
    } else {
      document.execCommand("createLink", false, url);
    }

    setShowLink(false);
    setLinkUrl("");
  };

  const toolButton =
    "flex h-8 w-8 items-center justify-center rounded-md text-gray-500 hover:bg-white hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white";

  return (
    <div
      className={`flex flex-col overflow-hidden rounded-lg border border-gray-300 focus-within:border-brand-300 focus-within:ring-2 focus-within:ring-brand-500/20 dark:border-gray-700 ${className}`}
    >
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-0.5 border-b border-gray-200 bg-gray-50 px-2 py-1.5 dark:border-gray-800 dark:bg-white/[0.03]">
        <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => exec("bold")} title="Bold" className={toolButton}>
          <span className="text-theme-sm font-bold">B</span>
        </button>
        <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => exec("italic")} title="Italic" className={toolButton}>
          <span className="text-theme-sm italic">I</span>
        </button>
        <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => exec("underline")} title="Underline" className={toolButton}>
          <span className="text-theme-sm underline">U</span>
        </button>

        <span className="mx-1 h-5 w-px bg-gray-200 dark:bg-gray-800"></span>

        <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={openLink} title="Insert link" className={toolButton}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <path d="M10 13a5 5 0 007.07 0l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 11a5 5 0 00-7.07 0l-3 3a5 5 0 007.07 7.07l1.71-1.71" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => exec("insertUnorderedList")} title="Bulleted list" className={toolButton}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <path d="M8 6h13M8 12h13M8 18h13" strokeLinecap="round" />
            <circle cx="3.5" cy="6" r="1.2" fill="currentColor" stroke="none" />
            <circle cx="3.5" cy="12" r="1.2" fill="currentColor" stroke="none" />
            <circle cx="3.5" cy="18" r="1.2" fill="currentColor" stroke="none" />
          </svg>
        </button>
        <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => exec("insertOrderedList")} title="Numbered list" className={toolButton}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <path d="M10 6h11M10 12h11M10 18h11" strokeLinecap="round" />
            <path d="M3 5l1-.5V8M3 16h2v1.5H3.5M3 19h2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Link input */}
      {showLink && (
        <div className="flex items-center gap-2 border-b border-gray-200 bg-white px-2 py-2 dark:border-gray-800 dark:bg-gray-900">
          <input
            autoFocus
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                applyLink();
              }
              if (e.key === "Escape") setShowLink(false);
            }}
            placeholder="https://example.com"
            className="h-8 flex-1 rounded-md border border-gray-300 bg-transparent px-3 text-theme-xs text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none dark:border-gray-700 dark:text-white/90"
          />
          <button
            type="button"
            onClick={applyLink}
            className="rounded-md bg-brand-500 px-3 py-1.5 text-theme-xs font-medium text-white hover:bg-brand-600"
          >
            Add
          </button>
          <button
            type="button"
            onClick={() => setShowLink(false)}
            className="rounded-md px-2 py-1.5 text-theme-xs text-gray-500 hover:text-gray-700 dark:text-gray-400"
          >
            Cancel
          </button>
        </div>
      )}

      {/* Editable surface */}
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        data-placeholder={placeholder}
        className="flex-1 overflow-y-auto px-4 py-3 text-theme-sm leading-relaxed text-gray-800 focus:outline-none dark:text-white/90 custom-scrollbar empty:before:pointer-events-none empty:before:text-gray-400 empty:before:content-[attr(data-placeholder)] [&_a]:text-brand-500 [&_a]:underline [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5"
      ></div>
    </div>
  );
}
