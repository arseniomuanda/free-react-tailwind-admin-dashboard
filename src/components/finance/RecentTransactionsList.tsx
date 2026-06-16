import {
  ArrowDownIcon,
  ArrowUpIcon,
  DollarLineIcon,
  PaperPlaneIcon,
} from "../../icons";

interface Transaction {
  title: string;
  subtitle: string;
  amount: string;
  direction: "in" | "out";
}

const transactions: Transaction[] = [
  {
    title: "Payment Received",
    subtitle: "From Lindsey Curtis",
    amount: "+$1,093.00",
    direction: "in",
  },
  {
    title: "Netflix Subscription",
    subtitle: "Entertainment",
    amount: "-$36.24",
    direction: "out",
  },
  {
    title: "PayPal Transfer",
    subtitle: "To Kaiya George",
    amount: "-$420.00",
    direction: "out",
  },
  {
    title: "Google Ads",
    subtitle: "Marketing",
    amount: "-$210.50",
    direction: "out",
  },
];

export default function RecentTransactionsList() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 pb-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Recent Transactions
        </h3>
        <button className="text-theme-sm font-medium text-brand-500 hover:text-brand-600 dark:text-brand-400">
          See all
        </button>
      </div>

      <div className="flex flex-col">
        {transactions.map((tx, index) => (
          <div
            key={index}
            className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-b-0 dark:border-gray-800"
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                tx.direction === "in"
                  ? "bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500"
                  : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
              }`}
            >
              {tx.direction === "in" ? (
                <DollarLineIcon className="size-5" />
              ) : (
                <PaperPlaneIcon className="size-5" />
              )}
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                {tx.title}
              </p>
              <span className="text-theme-xs text-gray-500 dark:text-gray-400">
                {tx.subtitle}
              </span>
            </div>
            <span
              className={`flex items-center gap-0.5 text-theme-sm font-medium ${
                tx.direction === "in"
                  ? "text-success-600 dark:text-success-500"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {tx.direction === "in" ? (
                <ArrowUpIcon className="size-4" />
              ) : (
                <ArrowDownIcon className="size-4" />
              )}
              {tx.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
