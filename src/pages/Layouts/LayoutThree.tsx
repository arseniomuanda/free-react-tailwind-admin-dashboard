import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import SaasMetrics from "../../components/saas/SaasMetrics";
import UserGrowth from "../../components/saas/UserGrowth";
import ChurnRate from "../../components/saas/ChurnRate";

export default function LayoutThree() {
  return (
    <>
      <PageMeta title="Layout Three | TailAdmin" description="Layout Three page" />
      <PageBreadcrumb pageTitle="Layout Three" />
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
      </div>
    </>
  );
}
