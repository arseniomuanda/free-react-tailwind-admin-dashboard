import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ConversationList from "../../components/text-generator/ConversationList";
import ChatPanel from "../../components/text-generator/ChatPanel";

export default function TextGenerator() {
  return (
    <>
      <PageMeta
        title="AI Text Generator | TailAdmin - React.js Admin Dashboard Template"
        description="AI Text Generator page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Text Generator" />

      <div className="grid h-[calc(100vh-220px)] min-h-[560px] grid-cols-12 gap-4 md:gap-6">
        <div className="hidden lg:col-span-3 lg:block">
          <ConversationList />
        </div>
        <div className="col-span-12 lg:col-span-9">
          <ChatPanel />
        </div>
      </div>
    </>
  );
}
