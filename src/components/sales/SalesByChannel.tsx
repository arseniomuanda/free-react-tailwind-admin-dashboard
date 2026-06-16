import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { ArrowUpIcon } from "../../icons";
import Badge from "../ui/badge/Badge";

const channels = ["Website", "Email", "Social Media"];
const colors = ["#465FFF", "#9CB9FF", "#C2D6FF"];
const series = [35, 25, 59];

export default function SalesByChannel() {
  const total = series.reduce((a, b) => a + b, 0);

  const options: ApexOptions = {
    colors,
    labels: channels,
    chart: { fontFamily: "Outfit, sans-serif", type: "donut", height: 240 },
    stroke: { width: 0 },
    plotOptions: {
      pie: {
        donut: {
          size: "72%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              fontSize: "14px",
              color: "#6B7280",
              formatter: () => `${total}`,
            },
            value: { fontSize: "20px", fontWeight: "600", color: "#1D2939" },
          },
        },
      },
    },
    dataLabels: { enabled: false },
    legend: { show: false },
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pt-5 pb-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Sales by Channel
        </h3>
        <Badge color="success">
          <ArrowUpIcon />
          3.2%
        </Badge>
      </div>

      <div className="mt-2">
        <Chart options={options} series={series} type="donut" height={240} />
      </div>

      <div className="mt-2 border-t border-gray-100 pt-4 dark:border-gray-800">
        {channels.map((channel, i) => (
          <div
            key={channel}
            className="flex items-center justify-between py-2 text-theme-sm"
          >
            <span className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <span
                className="inline-block h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: colors[i] }}
              ></span>
              {channel}
            </span>
            <span className="flex items-center gap-3">
              <span className="font-medium text-gray-800 dark:text-white/90">
                {series[i]}
              </span>
              <span className="text-success-600 dark:text-success-500">5.2%</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
