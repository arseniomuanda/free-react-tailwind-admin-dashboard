import { useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "../../icons";
import Badge from "../ui/badge/Badge";

const periods = ["Weekly", "Monthly", "Yearly"] as const;
type Period = (typeof periods)[number];

interface Metric {
  label: string;
  value: string;
  change: string;
  direction: "up" | "down";
}

const data: Record<Period, Metric[]> = {
  Weekly: [
    { label: "Total Revenue", value: "$200,45.87", change: "2.5%", direction: "up" },
    { label: "Active Users", value: "9,528", change: "9.5%", direction: "up" },
    { label: "Customer Lifetime Value", value: "$849.54", change: "1.6%", direction: "down" },
    { label: "Customer Acquisition Cost", value: "9,528", change: "3.5%", direction: "up" },
  ],
  Monthly: [
    { label: "Total Revenue", value: "$842,19.40", change: "4.1%", direction: "up" },
    { label: "Active Users", value: "38,210", change: "6.2%", direction: "up" },
    { label: "Customer Lifetime Value", value: "$902.10", change: "0.8%", direction: "up" },
    { label: "Customer Acquisition Cost", value: "8,940", change: "2.1%", direction: "down" },
  ],
  Yearly: [
    { label: "Total Revenue", value: "$1.02M", change: "12.4%", direction: "up" },
    { label: "Active Users", value: "421,860", change: "18.7%", direction: "up" },
    { label: "Customer Lifetime Value", value: "$1,140.00", change: "3.2%", direction: "up" },
    { label: "Customer Acquisition Cost", value: "7,610", change: "5.4%", direction: "down" },
  ],
};

export default function SaasMetrics() {
  const [period, setPeriod] = useState<Period>("Weekly");
  const metrics = data[period];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Overview
        </h3>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-0.5 rounded-lg bg-gray-100 p-0.5 dark:bg-gray-900">
            {periods.map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`rounded-md px-3 py-1.5 text-theme-sm font-medium transition-colors ${
                  period === p
                    ? "bg-white text-gray-900 shadow-theme-xs dark:bg-gray-800 dark:text-white"
                    : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            <svg
              className="stroke-current"
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.29 5.9h15.42M5.83 10h8.34M8.33 14.1h3.34"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            Filter
          </button>
        </div>
      </div>

      {/* Metrics grid with dividers */}
      <div className="mt-5 overflow-hidden rounded-2xl border border-gray-100 bg-gray-100 dark:border-gray-800 dark:bg-gray-800">
        <div className="grid grid-cols-2 gap-px xl:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-white p-5 dark:bg-gray-900">
              <span className="block text-sm text-gray-500 dark:text-gray-400">
                {metric.label}
              </span>
              <div className="mt-2 flex items-center gap-2">
                <h4 className="font-bold text-gray-800 text-title-sm dark:text-white/90">
                  {metric.value}
                </h4>
                <Badge color={metric.direction === "up" ? "success" : "error"}>
                  {metric.direction === "up" ? <ArrowUpIcon /> : <ArrowDownIcon />}
                  {metric.change}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
