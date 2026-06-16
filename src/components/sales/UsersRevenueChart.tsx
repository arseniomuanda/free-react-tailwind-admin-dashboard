import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useState } from "react";

const periods = ["Daily", "Weekly", "Monthly"] as const;
type Period = (typeof periods)[number];

const data: Record<
  Period,
  { categories: string[]; users: number[]; revenue: number[] }
> = {
  Daily: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    users: [320, 410, 380, 520, 600, 540, 660],
    revenue: [180, 240, 210, 300, 360, 320, 410],
  },
  Weekly: {
    categories: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
    users: [1800, 2100, 1950, 2400, 2800, 2600, 3100, 3400],
    revenue: [900, 1200, 1050, 1500, 1800, 1650, 2000, 2300],
  },
  Monthly: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    users: [6200, 7100, 6800, 7600, 8200, 7900, 8600, 9100, 8800, 9400, 9800, 10200],
    revenue: [3200, 3800, 3500, 4200, 4600, 4300, 4900, 5300, 5100, 5600, 5900, 6300],
  },
};

export default function UsersRevenueChart() {
  const [period, setPeriod] = useState<Period>("Monthly");
  const current = data[period];

  const options: ApexOptions = {
    legend: { show: true, position: "top", horizontalAlign: "left", fontFamily: "Outfit" },
    colors: ["#465FFF", "#9CB9FF"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      height: 310,
      type: "area",
      toolbar: { show: false },
    },
    stroke: { curve: "smooth", width: [2, 2] },
    fill: { type: "gradient", gradient: { opacityFrom: 0.45, opacityTo: 0 } },
    markers: { size: 0, hover: { size: 6 } },
    grid: {
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    dataLabels: { enabled: false },
    tooltip: { enabled: true },
    xaxis: {
      type: "category",
      categories: current.categories,
      axisBorder: { show: false },
      axisTicks: { show: false },
      tooltip: { enabled: false },
    },
    yaxis: {
      labels: { style: { fontSize: "12px", colors: ["#6B7280"] } },
    },
  };

  const series = [
    { name: "Users", data: current.users },
    { name: "Revenue", data: current.revenue },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Users &amp; Revenue Statistics
          </h3>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            Visualize month-to-month progress and engagement
          </p>
        </div>
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
      </div>

      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div className="min-w-[700px] xl:min-w-full">
          <Chart options={options} series={series} type="area" height={310} />
        </div>
      </div>
    </div>
  );
}
