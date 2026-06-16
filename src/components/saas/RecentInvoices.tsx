import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";

interface Invoice {
  id: string;
  closeDate: string;
  user: string;
  avatar: string;
  amount: string;
  status: "Paid" | "Pending" | "Overdue";
}

const tableData: Invoice[] = [
  {
    id: "#INV-2025",
    closeDate: "Mar 12, 2025",
    user: "Lindsey Curtis",
    avatar: "/images/user/user-01.jpg",
    amount: "$1,200.00",
    status: "Paid",
  },
  {
    id: "#INV-2026",
    closeDate: "Mar 14, 2025",
    user: "Kaiya George",
    avatar: "/images/user/user-02.jpg",
    amount: "$890.00",
    status: "Pending",
  },
  {
    id: "#INV-2027",
    closeDate: "Mar 16, 2025",
    user: "Zain Geidt",
    avatar: "/images/user/user-03.jpg",
    amount: "$2,400.00",
    status: "Paid",
  },
  {
    id: "#INV-2028",
    closeDate: "Mar 18, 2025",
    user: "Abram Schleifer",
    avatar: "/images/user/user-04.jpg",
    amount: "$540.00",
    status: "Overdue",
  },
  {
    id: "#INV-2029",
    closeDate: "Mar 20, 2025",
    user: "Carla George",
    avatar: "/images/user/user-05.jpg",
    amount: "$1,750.00",
    status: "Paid",
  },
];

export default function RecentInvoices() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Recent Invoices
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            See all
          </button>
        </div>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Serial No
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Close Date
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                User
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Amount
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Status
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {tableData.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="py-3 font-medium text-gray-800 text-theme-sm dark:text-white/90">
                  {invoice.id}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {invoice.closeDate}
                </TableCell>
                <TableCell className="py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 overflow-hidden rounded-full">
                      <img
                        src={invoice.avatar}
                        className="h-8 w-8 object-cover"
                        alt={invoice.user}
                      />
                    </div>
                    <span className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                      {invoice.user}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {invoice.amount}
                </TableCell>
                <TableCell className="py-3">
                  <Badge
                    size="sm"
                    color={
                      invoice.status === "Paid"
                        ? "success"
                        : invoice.status === "Pending"
                        ? "warning"
                        : "error"
                    }
                  >
                    {invoice.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
