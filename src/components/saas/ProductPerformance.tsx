import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useState } from "react";
import { MoreDotIcon } from "../../icons";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";

const tabs = ["Daily Sales", "Online Sales", "New Users"] as const;
type Tab = (typeof tabs)[number];

interface TabData {
  series: number[];
  digital: string;
  physical: string;
  total: string;
}

const data: Record<Tab, TabData> = {
  "Daily Sales": {
    series: [62, 38],
    digital: "$3,240",
    physical: "$1,980",
    total: "$5,220",
  },
  "Online Sales": {
    series: [74, 26],
    digital: "$8,120",
    physical: "$2,860",
    total: "$10,980",
  },
  "New Users": {
    series: [55, 45],
    digital: "1,420",
    physical: "1,160",
    total: "2,580",
  },
};

export default function ProductPerformance() {
  const [activeTab, setActiveTab] = useState<Tab>("Daily Sales");
  const current = data[activeTab];

  const options: ApexOptions = {
    colors: ["#465FFF", "#9CB9FF"],
    labels: ["Digital", "Physical"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "donut",
      height: 250,
    },
    stroke: {
      width: 0,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              fontSize: "14px",
              color: "#6B7280",
              formatter: () => current.total,
            },
            value: {
              fontSize: "20px",
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
        formatter: (val: number) => `${val}%`,
      },
    },
  };

  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 pb-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Product Performance
        </h3>
        <div className="relative inline-block">
          <button onClick={toggleDropdown} className="dropdown-toggle">
            <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" />
          </button>
          <Dropdown isOpen={isOpen} onClose={closeDropdown} className="w-40 p-2">
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              View More
            </DropdownItem>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              Delete
            </DropdownItem>
          </Dropdown>
        </div>
      </div>

      <div className="flex items-center gap-1 p-1 mt-4 bg-gray-100 rounded-lg dark:bg-gray-900">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 rounded-md px-3 py-2 text-theme-sm font-medium transition-colors ${
              activeTab === tab
                ? "bg-white text-gray-900 shadow-theme-xs dark:bg-gray-800 dark:text-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <Chart
          options={options}
          series={current.series}
          type="donut"
          height={250}
        />
      </div>

      <div className="flex items-center justify-center gap-5 pt-4 mt-2 border-t border-gray-100 sm:gap-8 dark:border-gray-800">
        <div className="text-center">
          <span className="flex items-center justify-center gap-1.5 text-theme-xs text-gray-500 dark:text-gray-400">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand-500"></span>
            Digital
          </span>
          <p className="mt-1 text-base font-semibold text-gray-800 dark:text-white/90">
            {current.digital}
          </p>
        </div>
        <div className="w-px h-8 bg-gray-200 dark:bg-gray-800"></div>
        <div className="text-center">
          <span className="flex items-center justify-center gap-1.5 text-theme-xs text-gray-500 dark:text-gray-400">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#9CB9FF]"></span>
            Physical
          </span>
          <p className="mt-1 text-base font-semibold text-gray-800 dark:text-white/90">
            {current.physical}
          </p>
        </div>
      </div>
    </div>
  );
}
