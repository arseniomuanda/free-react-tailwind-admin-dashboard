interface Card {
  holder: string;
  number: string;
  expiry: string;
  balance: string;
  gradient: string;
  brand: string;
}

const cards: Card[] = [
  {
    holder: "Musharof Chy",
    number: "5432 •••• •••• 5332",
    expiry: "09/27",
    balance: "$12,480.00",
    gradient: "from-brand-500 to-brand-600",
    brand: "VISA",
  },
  {
    holder: "Jhon Wick",
    number: "4576 •••• •••• 1290",
    expiry: "05/26",
    balance: "$5,210.00",
    gradient: "from-gray-800 to-gray-900",
    brand: "Mastercard",
  },
  {
    holder: "Adward John",
    number: "3782 •••• •••• 9011",
    expiry: "11/28",
    balance: "$2,167.00",
    gradient: "from-orange-400 to-pink-500",
    brand: "VISA",
  },
];

export default function MyCards() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 pb-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          My Cards
        </h3>
        <button className="text-theme-sm font-medium text-brand-500 hover:text-brand-600 dark:text-brand-400">
          + Add Card
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.number}
            className={`relative flex aspect-[1.6/1] flex-col justify-between rounded-2xl bg-gradient-to-br ${card.gradient} p-5 text-white shadow-theme-md`}
          >
            <div className="flex items-start justify-between">
              <span className="text-theme-xs uppercase tracking-wide text-white/70">
                Virtual Card
              </span>
              <span className="text-sm font-semibold italic">{card.brand}</span>
            </div>

            <div className="mt-2">
              <span className="block text-theme-xs text-white/70">Balance</span>
              <span className="text-lg font-bold">{card.balance}</span>
            </div>

            <div>
              <p className="font-medium tracking-widest text-theme-sm">
                {card.number}
              </p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-theme-xs text-white/80">
                  {card.holder}
                </span>
                <span className="text-theme-xs text-white/80">
                  {card.expiry}
                </span>
              </div>
            </div>

            <div className="absolute w-16 h-16 rounded-full right-4 top-12 bg-white/10"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
