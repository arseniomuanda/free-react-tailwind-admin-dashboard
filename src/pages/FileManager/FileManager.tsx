import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import AllMedia from "../../components/file-manager/AllMedia";
import FolderGrid from "../../components/file-manager/FolderGrid";
import StorageDetails from "../../components/file-manager/StorageDetails";
import RecentFilesTable from "../../components/file-manager/RecentFilesTable";

export default function FileManager() {
  return (
    <>
      <PageMeta
        title="File Manager | TailAdmin - React.js Admin Dashboard Template"
        description="File manager page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="File Manager" />

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12">
          <AllMedia />
        </div>

        <div className="col-span-12 xl:col-span-8">
          <FolderGrid />
        </div>
        <div className="col-span-12 xl:col-span-4">
          <StorageDetails />
        </div>

        <div className="col-span-12">
          <RecentFilesTable />
        </div>
      </div>
    </>
  );
}
