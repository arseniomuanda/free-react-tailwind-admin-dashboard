interface Country {
  name: string;
  flag: string;
  revenue: string;
  percent: number;
}

const countries: Country[] = [
  { name: "United States", flag: "🇺🇸", revenue: "$20,594", percent: 79 },
  { name: "France", flag: "🇫🇷", revenue: "$18,230", percent: 74 },
  { name: "Japan", flag: "🇯🇵", revenue: "$15,230", percent: 68 },
  { name: "Germany", flag: "🇩🇪", revenue: "$16,450", percent: 72 },
];

export default function SalesByCountry() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pt-5 pb-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90">
        Sales by Country
      </h3>
      <div className="flex flex-col gap-5">
        {countries.map((country) => (
          <div key={country.name} className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-lg dark:bg-gray-800">
              {country.flag}
            </span>
            <div className="flex-1">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                  {country.name}
                </span>
                <span className="text-theme-sm text-gray-500 dark:text-gray-400">
                  {country.revenue}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                  <div
                    className="h-full rounded-full bg-brand-500"
                    style={{ width: `${country.percent}%` }}
                  ></div>
                </div>
                <span className="w-9 text-right text-theme-xs font-medium text-gray-500 dark:text-gray-400">
                  {country.percent}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
