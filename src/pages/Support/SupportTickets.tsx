import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import TicketList from "../../components/support/TicketList";

export default function SupportTickets() {
  return (
    <>
      <PageMeta
        title="Support Tickets | TailAdmin - React.js Admin Dashboard Template"
        description="Support tickets list page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Support Tickets" />
      <TicketList />
    </>
  );
}
