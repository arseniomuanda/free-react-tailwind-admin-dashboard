import PageMeta from "../../components/common/PageMeta";
import FinanceMetrics from "../../components/finance/FinanceMetrics";
import CashflowOverview from "../../components/finance/CashflowOverview";
import SpendingByCategory from "../../components/finance/SpendingByCategory";
import QuickSend from "../../components/finance/QuickSend";
import MyCards from "../../components/finance/MyCards";
import RecentTransactionsList from "../../components/finance/RecentTransactionsList";
import RecentTransactionsTable from "../../components/finance/RecentTransactionsTable";

export default function Finance() {
  return (
    <>
      <PageMeta
        title="React.js Finance Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Finance Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12">
          <FinanceMetrics />
        </div>

        <div className="col-span-12 xl:col-span-8">
          <CashflowOverview />
        </div>

        <div className="col-span-12 xl:col-span-4">
          <SpendingByCategory />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <MyCards />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <QuickSend />
        </div>

        <div className="col-span-12 xl:col-span-8">
          <RecentTransactionsTable />
        </div>

        <div className="col-span-12 xl:col-span-4">
          <RecentTransactionsList />
        </div>
      </div>
    </>
  );
}
