import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import FinanceMetrics from "../../components/finance/FinanceMetrics";
import CashflowOverview from "../../components/finance/CashflowOverview";
import SpendingByCategory from "../../components/finance/SpendingByCategory";

export default function LayoutFour() {
  return (
    <>
      <PageMeta title="Layout Four | TailAdmin" description="Layout Four page" />
      <PageBreadcrumb pageTitle="Layout Four" />
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
      </div>
    </>
  );
}
