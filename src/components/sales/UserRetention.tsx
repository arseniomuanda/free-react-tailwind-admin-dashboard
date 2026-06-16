import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { ArrowUpIcon } from "../../icons";
import Badge from "../ui/badge/Badge";

export default function UserRetention() {
  const series = [24];
  const options: ApexOptions = {
    colors: ["#465FFF"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "radialBar",
      height: 240,
      sparkline: { enabled: true },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: { size: "70%" },
        track: { background: "#E4E7EC", strokeWidth: "100%", margin: 5 },
        dataLabels: {
          name: { show: false },
          value: {
            fontSize: "32px",
            fontWeight: "600",
            offsetY: -35,
            color: "#1D2939",
            formatter: (val) => `${val}%`,
          },
        },
      },
    },
    fill: { type: "solid", colors: ["#465FFF"] },
    stroke: { lineCap: "round" },
    labels: ["Retention"],
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pt-5 pb-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            User Retention
          </h3>
          <div className="flex items-center gap-2 mt-2">
            <Badge color="success">
              <ArrowUpIcon />
              3.2%
            </Badge>
            <span className="text-theme-sm text-gray-500 dark:text-gray-400">
              than last week
            </span>
          </div>
        </div>
      </div>

      <div className="relative mt-2">
        <div className="max-h-[240px]">
          <Chart options={options} series={series} type="radialBar" height={240} />
        </div>
      </div>

      <p className="mx-auto -mt-6 max-w-[260px] text-center text-theme-sm text-gray-500 dark:text-gray-400">
        Returning users this month compared to new sign-ups.
      </p>
    </div>
  );
}
