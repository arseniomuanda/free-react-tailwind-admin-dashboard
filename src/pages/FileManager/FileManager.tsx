import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import StorageCategories from "../../components/file-manager/StorageCategories";
import FolderGrid from "../../components/file-manager/FolderGrid";
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
        <div className="col-span-12 xl:col-span-3">
          <StorageCategories />
        </div>
        <div className="col-span-12 space-y-4 md:space-y-6 xl:col-span-9">
          <FolderGrid />
          <RecentFilesTable />
        </div>
      </div>
    </>
  );
}
