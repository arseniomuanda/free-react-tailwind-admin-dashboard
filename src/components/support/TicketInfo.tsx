import Badge from "../ui/badge/Badge";

const properties = [
  { label: "Status", value: "Open", badge: "primary" as const },
  { label: "Priority", value: "High", badge: "error" as const },
  { label: "Category", value: "Account" },
  { label: "Created", value: "Mar 12, 2025" },
  { label: "Ticket ID", value: "#TC-4821" },
];

const tags = ["password", "login", "urgent"];

export default function TicketInfo() {
  return (
    <div className="space-y-4 md:space-y-6">
      {/* Requester */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
        <h4 className="mb-4 text-theme-xs font-medium uppercase tracking-wide text-gray-400">
          Requester
        </h4>
        <div className="flex items-center gap-3">
          <img
            src="/images/user/user-01.jpg"
            alt="Lindsey Curtis"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
              Lindsey Curtis
            </p>
            <span className="text-theme-xs text-gray-500 dark:text-gray-400">
              lindsey@company.com
            </span>
          </div>
        </div>
        <dl className="mt-4 space-y-2 border-t border-gray-100 pt-4 dark:border-gray-800">
          <div className="flex justify-between text-theme-sm">
            <dt className="text-gray-500 dark:text-gray-400">Plan</dt>
            <dd className="font-medium text-gray-800 dark:text-white/90">Pro</dd>
          </div>
          <div className="flex justify-between text-theme-sm">
            <dt className="text-gray-500 dark:text-gray-400">Tickets</dt>
            <dd className="font-medium text-gray-800 dark:text-white/90">8</dd>
          </div>
        </dl>
      </div>

      {/* Properties */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
        <h4 className="mb-4 text-theme-xs font-medium uppercase tracking-wide text-gray-400">
          Details
        </h4>
        <dl className="space-y-3">
          {properties.map((p) => (
            <div key={p.label} className="flex items-center justify-between">
              <dt className="text-theme-sm text-gray-500 dark:text-gray-400">
                {p.label}
              </dt>
              <dd>
                {p.badge ? (
                  <Badge size="sm" color={p.badge}>
                    {p.value}
                  </Badge>
                ) : (
                  <span className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                    {p.value}
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-4 border-t border-gray-100 pt-4 dark:border-gray-800">
          <span className="mb-2 block text-theme-sm text-gray-500 dark:text-gray-400">
            Tags
          </span>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-2.5 py-1 text-theme-xs text-gray-600 dark:bg-white/[0.05] dark:text-gray-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
