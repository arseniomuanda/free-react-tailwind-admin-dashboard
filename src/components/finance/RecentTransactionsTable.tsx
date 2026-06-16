import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";

interface Transaction {
  orderId: string;
  activity: string;
  price: string;
  date: string;
  status: "Completed" | "In Progress" | "Pending";
}

const tableData: Transaction[] = [
  {
    orderId: "#TX-58112",
    activity: "Subscription Renewal",
    price: "$49.00",
    date: "Mar 12, 2025",
    status: "Completed",
  },
  {
    orderId: "#TX-58113",
    activity: "Payout to Vendor",
    price: "$1,240.00",
    date: "Mar 13, 2025",
    status: "In Progress",
  },
  {
    orderId: "#TX-58114",
    activity: "Refund Issued",
    price: "$120.00",
    date: "Mar 14, 2025",
    status: "Completed",
  },
  {
    orderId: "#TX-58115",
    activity: "Invoice Payment",
    price: "$860.00",
    date: "Mar 16, 2025",
    status: "Pending",
  },
  {
    orderId: "#TX-58116",
    activity: "Card Top-up",
    price: "$300.00",
    date: "Mar 18, 2025",
    status: "Completed",
  },
];

export default function RecentTransactionsTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Recent Transactions
        </h3>
        <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
          See all
        </button>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Order ID
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Activity
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Price
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Date
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
            {tableData.map((tx) => (
              <TableRow key={tx.orderId}>
                <TableCell className="py-3 font-medium text-gray-800 text-theme-sm dark:text-white/90">
                  {tx.orderId}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {tx.activity}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {tx.price}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {tx.date}
                </TableCell>
                <TableCell className="py-3">
                  <Badge
                    size="sm"
                    color={
                      tx.status === "Completed"
                        ? "success"
                        : tx.status === "In Progress"
                        ? "info"
                        : "warning"
                    }
                  >
                    {tx.status}
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
