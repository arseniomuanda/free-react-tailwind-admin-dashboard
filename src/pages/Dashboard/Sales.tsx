import PageMeta from "../../components/common/PageMeta";
import SalesMetrics from "../../components/sales/SalesMetrics";
import UsersRevenueChart from "../../components/sales/UsersRevenueChart";
import UserRetention from "../../components/sales/UserRetention";
import SalesByChannel from "../../components/sales/SalesByChannel";
import SalesByCountry from "../../components/sales/SalesByCountry";
import TopProducts from "../../components/sales/TopProducts";

export default function Sales() {
  return (
    <>
      <PageMeta
        title="React.js Sales Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Sales Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12">
          <SalesMetrics />
        </div>

        <div className="col-span-12 xl:col-span-8">
          <UsersRevenueChart />
        </div>
        <div className="col-span-12 xl:col-span-4">
          <UserRetention />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <SalesByChannel />
        </div>
        <div className="col-span-12 xl:col-span-7">
          <SalesByCountry />
        </div>

        <div className="col-span-12">
          <TopProducts />
        </div>
      </div>
    </>
  );
}
