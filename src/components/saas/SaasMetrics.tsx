import {
  ArrowDownIcon,
  ArrowUpIcon,
  BoxIconLine,
  DollarLineIcon,
  GroupIcon,
  ShootingStarIcon,
} from "../../icons";
import Badge from "../ui/badge/Badge";

interface Metric {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: string;
  direction: "up" | "down";
}

const metrics: Metric[] = [
  {
    icon: <DollarLineIcon className="text-gray-800 size-6 dark:text-white/90" />,
    label: "Total Revenue",
    value: "$200,450.87",
    change: "2.5%",
    direction: "up",
  },
  {
    icon: <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />,
    label: "Active Users",
    value: "9,528",
    change: "9.5%",
    direction: "up",
  },
  {
    icon: <ShootingStarIcon className="text-gray-800 size-6 dark:text-white/90" />,
    label: "Customer Lifetime Value",
    value: "$849.54",
    change: "1.6%",
    direction: "down",
  },
  {
    icon: <BoxIconLine className="text-gray-800 size-6 dark:text-white/90" />,
    label: "Customer Acquisition Cost",
    value: "$349.21",
    change: "3.5%",
    direction: "up",
  },
];

export default function SaasMetrics() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-4">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
            {metric.icon}
          </div>

          <div className="flex items-end justify-between mt-5">
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {metric.label}
              </span>
              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                {metric.value}
              </h4>
            </div>
            <Badge color={metric.direction === "up" ? "success" : "error"}>
              {metric.direction === "up" ? <ArrowUpIcon /> : <ArrowDownIcon />}
              {metric.change}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  );
}
