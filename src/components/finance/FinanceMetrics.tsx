import {
  ArrowUpIcon,
  ArrowDownIcon,
  DollarLineIcon,
  PaperPlaneIcon,
  BoxIconLine,
  GroupIcon,
  PieChartIcon,
} from "../../icons";
import Badge from "../ui/badge/Badge";

interface Metric {
  icon: React.ReactNode;
  label: string;
  value: string;
  caption?: string;
  change: string;
  direction: "up" | "down";
}

const metrics: Metric[] = [
  {
    icon: <DollarLineIcon className="text-gray-800 size-6 dark:text-white/90" />,
    label: "Total Balance",
    value: "$19,857.00",
    caption: "Primary Account •••• 5332",
    change: "3.2%",
    direction: "up",
  },
  {
    icon: <PaperPlaneIcon className="text-gray-800 size-6 dark:text-white/90" />,
    label: "Transfer Received",
    value: "$24,830",
    caption: "vs. last month",
    change: "3.2%",
    direction: "up",
  },
  {
    icon: <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />,
    label: "Monthly Income",
    value: "$5,200",
    caption: "vs. last month",
    change: "3.2%",
    direction: "up",
  },
  {
    icon: <BoxIconLine className="text-gray-800 size-6 dark:text-white/90" />,
    label: "Total Spent",
    value: "$3,831",
    caption: "vs. last month",
    change: "2.95%",
    direction: "down",
  },
  {
    icon: <PieChartIcon className="text-gray-800 size-6 dark:text-white/90" />,
    label: "Saving Rate",
    value: "26.1%",
    caption: "Goal: 30% · 3.9% to target",
    change: "1.4%",
    direction: "up",
  },
];

export default function FinanceMetrics() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-5">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center w-11 h-11 bg-gray-100 rounded-xl dark:bg-gray-800">
              {metric.icon}
            </div>
            <Badge color={metric.direction === "up" ? "success" : "error"}>
              {metric.direction === "up" ? <ArrowUpIcon /> : <ArrowDownIcon />}
              {metric.change}
            </Badge>
          </div>

          <div className="mt-5">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {metric.label}
            </span>
            <h4 className="mt-1 font-bold text-gray-800 text-title-sm dark:text-white/90">
              {metric.value}
            </h4>
            {metric.caption && (
              <span className="block mt-1 text-theme-xs text-gray-400 dark:text-gray-500">
                {metric.caption}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
