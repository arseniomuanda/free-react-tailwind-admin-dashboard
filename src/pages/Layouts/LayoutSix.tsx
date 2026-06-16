import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import MyCards from "../../components/finance/MyCards";
import RecentTransactionsTable from "../../components/finance/RecentTransactionsTable";
import RecentTransactionsList from "../../components/finance/RecentTransactionsList";

export default function LayoutSix() {
  return (
    <>
      <PageMeta title="Layout Six | TailAdmin" description="Layout Six page" />
      <PageBreadcrumb pageTitle="Layout Six" />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12">
          <MyCards />
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
