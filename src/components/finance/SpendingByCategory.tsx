import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useState } from "react";

const periods = ["Monthly", "Yearly"] as const;
type Period = (typeof periods)[number];

const categories = [
  "Online Purchases",
  "Groceries",
  "Digital Goods",
  "Stationery",
  "Others",
];

const colors = ["#465FFF", "#7592FF", "#9CB9FF", "#C2D6FF", "#E4E7EC"];

const data: Record<Period, { series: number[]; total: string }> = {
  Monthly: {
    series: [3850, 2600, 1900, 1200, 1208],
    total: "$10,758",
  },
  Yearly: {
    series: [46200, 31200, 22800, 14400, 14496],
    total: "$129,096",
  },
};

export default function SpendingByCategory() {
  const [period, setPeriod] = useState<Period>("Monthly");
  const current = data[period];

  const options: ApexOptions = {
    colors,
    labels: categories,
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "donut",
      height: 240,
    },
    stroke: {
      width: 0,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "72%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total Spent",
              fontSize: "13px",
              color: "#6B7280",
              formatter: () => current.total,
            },
            value: {
              fontSize: "18px",
              fontWeight: "600",
              color: "#1D2939",
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    tooltip: {
      y: {
        formatter: (val: number) => `$${val.toLocaleString()}`,
      },
    },
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 pb-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Spending
        </h3>
        <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-lg dark:bg-gray-900">
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
      </div>

      <div className="mt-4">
        <Chart
          options={options}
          series={current.series}
          type="donut"
          height={240}
        />
      </div>

      <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-gray-100 dark:border-gray-800">
        {categories.map((cat, i) => {
          const total = current.series.reduce((a, b) => a + b, 0);
          const pct = Math.round((current.series[i] / total) * 100);
          return (
            <div key={cat} className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-theme-sm text-gray-500 dark:text-gray-400">
                <span
                  className="inline-block w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: colors[i] }}
                ></span>
                {cat}
              </span>
              <span className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                {pct}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
