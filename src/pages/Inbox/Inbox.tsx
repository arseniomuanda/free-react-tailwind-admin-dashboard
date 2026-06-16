import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import MailSidebar from "../../components/inbox/MailSidebar";
import MailList from "../../components/inbox/MailList";
import ComposeModal from "../../components/inbox/ComposeModal";
import { useModal } from "../../hooks/useModal";

export default function Inbox() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <PageMeta
        title="Inbox | TailAdmin - React.js Admin Dashboard Template"
        description="Email inbox page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Inbox" />

      <div className="grid h-[calc(100vh-220px)] min-h-[560px] grid-cols-12 gap-4 md:gap-6">
        <div className="hidden lg:col-span-4 lg:block xl:col-span-3">
          <MailSidebar active="Inbox" onCompose={openModal} />
        </div>
        <div className="col-span-12 lg:col-span-8 xl:col-span-9">
          <MailList />
        </div>
      </div>

      <ComposeModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}
