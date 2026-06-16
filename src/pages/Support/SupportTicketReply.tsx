import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import TicketReply from "../../components/support/TicketReply";
import TicketInfo from "../../components/support/TicketInfo";

export default function SupportTicketReply() {
  return (
    <>
      <PageMeta
        title="Support Ticket Reply | TailAdmin - React.js Admin Dashboard Template"
        description="Support ticket reply page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Ticket Reply" />

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 h-[calc(100vh-220px)] min-h-[560px] xl:col-span-8">
          <TicketReply />
        </div>
        <div className="col-span-12 xl:col-span-4">
          <TicketInfo />
        </div>
      </div>
    </>
  );
}
