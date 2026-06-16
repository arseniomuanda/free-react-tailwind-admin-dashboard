import { useState } from "react";
import { Link } from "react-router";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";

type Status = "Open" | "Pending" | "Resolved" | "Closed";
type Priority = "High" | "Medium" | "Low";

interface Ticket {
  id: string;
  subject: string;
  requester: string;
  avatar: string;
  category: string;
  priority: Priority;
  status: Status;
  date: string;
}

const tickets: Ticket[] = [
  { id: "#TC-4821", subject: "Unable to reset my password", requester: "Lindsey Curtis", avatar: "/images/user/user-01.jpg", category: "Account", priority: "High", status: "Open", date: "Mar 12, 2025" },
  { id: "#TC-4820", subject: "Invoice not received for March", requester: "Kaiya George", avatar: "/images/user/user-02.jpg", category: "Billing", priority: "Medium", status: "Pending", date: "Mar 12, 2025" },
  { id: "#TC-4819", subject: "Feature request: dark mode export", requester: "Zain Geidt", avatar: "/images/user/user-03.jpg", category: "Feedback", priority: "Low", status: "Open", date: "Mar 11, 2025" },
  { id: "#TC-4818", subject: "App crashes on file upload", requester: "Abram Schleifer", avatar: "/images/user/user-04.jpg", category: "Bug", priority: "High", status: "Resolved", date: "Mar 10, 2025" },
  { id: "#TC-4817", subject: "How to upgrade my plan?", requester: "Carla George", avatar: "/images/user/user-05.jpg", category: "Billing", priority: "Low", status: "Closed", date: "Mar 09, 2025" },
];

const tabs = ["All Tickets", "Open", "Pending", "Resolved", "Closed"] as const;

const statusColor: Record<Status, "primary" | "warning" | "success" | "light"> = {
  Open: "primary",
  Pending: "warning",
  Resolved: "success",
  Closed: "light",
};
const priorityColor: Record<Priority, "error" | "warning" | "success"> = {
  High: "error",
  Medium: "warning",
  Low: "success",
};

export default function TicketList() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All Tickets");
  const filtered =
    tab === "All Tickets" ? tickets : tickets.filter((t) => t.status === tab);

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="flex flex-col gap-4 border-b border-gray-100 px-5 py-4 dark:border-gray-800 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-0.5 rounded-lg bg-gray-100 p-0.5 dark:bg-gray-900">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-md px-3 py-1.5 text-theme-sm font-medium transition-colors ${
                tab === t
                  ? "bg-white text-gray-900 shadow-theme-xs dark:bg-gray-800 dark:text-white"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <Link
          to="/support-ticket-reply"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-theme-sm font-medium text-white transition-colors hover:bg-brand-600"
        >
          New Ticket
        </Link>
      </div>

      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-b border-gray-100 dark:border-gray-800">
            <TableRow>
              {["Ticket", "Requester", "Category", "Priority", "Status", "Date"].map(
                (h) => (
                  <TableCell
                    key={h}
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    {h}
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {filtered.map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell className="px-5 py-4">
                  <Link to="/support-ticket-reply" className="block">
                    <span className="text-theme-xs text-gray-400">{ticket.id}</span>
                    <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                      {ticket.subject}
                    </p>
                  </Link>
                </TableCell>
                <TableCell className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={ticket.avatar}
                      alt={ticket.requester}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <span className="text-gray-700 text-theme-sm dark:text-gray-300">
                      {ticket.requester}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-5 py-4 text-gray-500 text-theme-sm dark:text-gray-400">
                  {ticket.category}
                </TableCell>
                <TableCell className="px-5 py-4">
                  <Badge size="sm" color={priorityColor[ticket.priority]}>
                    {ticket.priority}
                  </Badge>
                </TableCell>
                <TableCell className="px-5 py-4">
                  <Badge size="sm" color={statusColor[ticket.status]}>
                    {ticket.status}
                  </Badge>
                </TableCell>
                <TableCell className="px-5 py-4 text-gray-500 text-theme-sm dark:text-gray-400">
                  {ticket.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
