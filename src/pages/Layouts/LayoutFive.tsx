import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ConversionFunnel from "../../components/saas/ConversionFunnel";
import ProductPerformance from "../../components/saas/ProductPerformance";
import RecentInvoices from "../../components/saas/RecentInvoices";

export default function LayoutFive() {
  return (
    <>
      <PageMeta title="Layout Five | TailAdmin" description="Layout Five page" />
      <PageBreadcrumb pageTitle="Layout Five" />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 xl:col-span-7">
          <ConversionFunnel />
        </div>
        <div className="col-span-12 xl:col-span-5">
          <ProductPerformance />
        </div>
        <div className="col-span-12">
          <RecentInvoices />
        </div>
      </div>
    </>
  );
}
