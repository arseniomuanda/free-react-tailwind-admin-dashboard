import { useState } from "react";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ChatList from "../../components/chat/ChatList";
import ChatBox from "../../components/chat/ChatBox";

export default function Chat() {
  const [activeId, setActiveId] = useState(1);

  return (
    <>
      <PageMeta
        title="Chat | TailAdmin - React.js Admin Dashboard Template"
        description="Chat page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Chat" />

      <div className="grid h-[calc(100vh-220px)] min-h-[560px] grid-cols-12 gap-4 md:gap-6">
        <div className="hidden lg:col-span-4 lg:block xl:col-span-3">
          <ChatList activeId={activeId} onSelect={setActiveId} />
        </div>
        <div className="col-span-12 lg:col-span-8 xl:col-span-9">
          <ChatBox />
        </div>
      </div>
    </>
  );
}
