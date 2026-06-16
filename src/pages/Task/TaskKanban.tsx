import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import TaskKanbanBoard from "../../components/task/TaskKanban";

export default function TaskKanban() {
  return (
    <>
      <PageMeta
        title="Task Kanban | TailAdmin - React.js Admin Dashboard Template"
        description="Task kanban board page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Task Kanban" />
      <TaskKanbanBoard />
    </>
  );
}
