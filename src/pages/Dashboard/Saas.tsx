import PageMeta from "../../components/common/PageMeta";
import SaasMetrics from "../../components/saas/SaasMetrics";
import UserGrowth from "../../components/saas/UserGrowth";
import ChurnRate from "../../components/saas/ChurnRate";
import ConversionFunnel from "../../components/saas/ConversionFunnel";
import ProductPerformance from "../../components/saas/ProductPerformance";
import RecentInvoices from "../../components/saas/RecentInvoices";
import Activities from "../../components/saas/Activities";

export default function Saas() {
  return (
    <>
      <PageMeta
        title="React.js SaaS Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js SaaS Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12">
          <SaasMetrics />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <UserGrowth />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <ChurnRate />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <ConversionFunnel />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <ProductPerformance />
        </div>

        <div className="col-span-12 xl:col-span-8">
          <RecentInvoices />
        </div>

        <div className="col-span-12 xl:col-span-4">
          <Activities />
        </div>
      </div>
    </>
  );
}
