interface Activity {
  name: string;
  avatar: string;
  action: string;
  reference: string;
  time: string;
}

const activities: Activity[] = [
  {
    name: "Lindsey Curtis",
    avatar: "/images/user/user-06.jpg",
    action: "created invoice",
    reference: "#INV-2025",
    time: "Just now",
  },
  {
    name: "Kaiya George",
    avatar: "/images/user/user-07.jpg",
    action: "upgraded to",
    reference: "Pro Plan",
    time: "5 min ago",
  },
  {
    name: "Zain Geidt",
    avatar: "/images/user/user-08.jpg",
    action: "paid invoice",
    reference: "#INV-2021",
    time: "2 hours ago",
  },
  {
    name: "Abram Schleifer",
    avatar: "/images/user/user-09.jpg",
    action: "cancelled subscription",
    reference: "Starter Plan",
    time: "Yesterday",
  },
];

export default function Activities() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 pb-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Activities
        </h3>
        <button className="text-theme-sm font-medium text-brand-500 hover:text-brand-600 dark:text-brand-400">
          See all
        </button>
      </div>

      <div className="flex flex-col gap-1">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-b-0 dark:border-gray-800"
          >
            <div className="h-10 w-10 overflow-hidden rounded-full">
              <img
                src={activity.avatar}
                className="h-10 w-10 object-cover"
                alt={activity.name}
              />
            </div>
            <div className="flex-1">
              <p className="text-theme-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium text-gray-800 dark:text-white/90">
                  {activity.name}
                </span>{" "}
                {activity.action}{" "}
                <span className="font-medium text-brand-500 dark:text-brand-400">
                  {activity.reference}
                </span>
              </p>
              <span className="text-theme-xs text-gray-400 dark:text-gray-500">
                {activity.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
