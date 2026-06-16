import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import TaskListBoard from "../../components/task/TaskListBoard";

export default function TaskList() {
  return (
    <>
      <PageMeta
        title="Task List | TailAdmin - React.js Admin Dashboard Template"
        description="Task list page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Task List" />
      <TaskListBoard />
    </>
  );
}
