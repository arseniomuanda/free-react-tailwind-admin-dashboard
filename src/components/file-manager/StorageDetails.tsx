import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { MoreDotIcon } from "../../icons";

const labels = ["Downloads", "Apps", "Documents", "Media"];
const colors = ["#7A5AF8", "#FD853A", "#F79009", "#12B76A"];
const series = [38, 52, 30, 40];

export default function StorageDetails() {
  const options: ApexOptions = {
    colors,
    labels,
    chart: { fontFamily: "Outfit, sans-serif", type: "donut", height: 280 },
    stroke: { width: 0 },
    plotOptions: {
      pie: {
        donut: {
          size: "72%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total 135 GB",
              fontSize: "14px",
              color: "#6B7280",
              formatter: () => "160",
            },
            value: { fontSize: "24px", fontWeight: "600", color: "#1D2939" },
          },
        },
      },
    },
    dataLabels: { enabled: false },
    legend: { show: false },
    tooltip: { y: { formatter: (v: number) => `${v} GB` } },
  };

  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Storage Details
          </h3>
          <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">
            585 GB Free space left
          </p>
        </div>
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
          <MoreDotIcon />
        </button>
      </div>

      <div className="mt-2">
        <Chart options={options} series={series} type="donut" height={280} />
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
        {labels.map((label, i) => (
          <span
            key={label}
            className="flex items-center gap-2 text-theme-xs text-gray-500 dark:text-gray-400"
          >
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: colors[i] }}
            ></span>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
