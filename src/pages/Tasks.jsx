import { useSelector } from "react-redux";
import DataTable from "../components/ui/data-table";
const tasks = [
  {
    id: 1,
    title: "Prepare weekly report",
    description: "Gather KPIs and summarize the week’s performance.",
    assignedTo: "employee",
    dueDate: "2025-08-07",
    status: "Pending",
  },
  {
    id: 2,
    title: "Update client database",
    description: "Add new client data from last week’s meeting.",
    assignedTo: "employee",
    dueDate: "2025-08-05",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Review marketing strategy",
    description: "Analyze competitor moves and adjust messaging.",
    assignedTo: "employee",
    dueDate: "2025-08-10",
    status: "Done",
  },
  {
    id: 4,
    title: "Design new landing page",
    description: "Wireframe and UI for product launch page.",
    assignedTo: "employee",
    dueDate: "2025-08-12",
    status: "Pending",
  },
  {
    id: 5,
    title: "Fix login bugs",
    description: "Handle OAuth and email validation issues.",
    assignedTo: "employee",
    dueDate: "2025-08-08",
    status: "In Progress",
  },
];

const columns = [
  {
    accessorKey: "assignedTo",
    header: "Assigned To",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "dueDate",
    header: "Due Date",
    cell: ({ row }) => {
      const date = row.getValue("dueDate");
      return <div>{new Date(date).toLocaleDateString()}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      const colorMap = {
        Pending: "bg-yellow-100 text-yellow-800",
        "In Progress": "bg-blue-100 text-blue-800",
        Done: "bg-green-100 text-green-800",
      };
      return (
        <span
          className={`text-sm px-2 py-1 rounded ${
            colorMap[status] || "bg-gray-100 text-gray-800"
          }`}
        >
          {status}
        </span>
      );
    },
  },
];

export default function Tasks() {
  const user =
    useSelector((state) => state.auth.user) ||
    JSON.parse(localStorage.getItem("user"));

  const userTasks = tasks.filter((task) => task.assignedTo === user?.name);

  return (
    <section className="mt-8">
      <div className="px-4 space-y-6">
        <h2 className="text-xl font-bold text-zinc-900 mb-4">My Tasks</h2>
        <DataTable columns={columns} data={userTasks} />
      </div>
    </section>
  );
}
