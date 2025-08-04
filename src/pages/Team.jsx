import DataTable from "../components/ui/data-table";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "UI/UX Designer",
  "Product Manager",
  "QA Engineer",
  "DevOps Engineer",
  "Project Coordinator",
  "Mobile Developer",
  "Scrum Master",
  "Data Analyst",
  "Marketing Lead",
  "Business Analyst",
  "Technical Writer",
  "Support Engineer",
  "System Architect",
];

const teamMembers = Array.from({ length: 15 }, (_, i) => {
  const names = [
    "Emma",
    "Liam",
    "Olivia",
    "Noah",
    "Ava",
    "Elijah",
    "Sophia",
    "James",
    "Isabella",
    "Benjamin",
    "Mia",
    "Lucas",
    "Charlotte",
    "Henry",
    "Amelia",
  ];
  const joinDates = [
    "2024-01-12",
    "2024-03-05",
    "2023-11-20",
    "2024-02-15",
    "2023-12-01",
    "2024-04-10",
    "2024-06-18",
    "2023-09-30",
    "2023-08-22",
    "2024-05-09",
    "2024-01-25",
    "2023-10-14",
    "2023-07-02",
    "2024-02-28",
    "2023-11-11",
  ];

  const name = names[i];
  return {
    id: i + 1,
    name,
    email: `${name.toLowerCase()}@team.com`,
    joinedDate: joinDates[i],
    role: roles[i],
  };
});

const columns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "joinedDate",
    header: "Joined Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("joinedDate"));
      return (
        <div className="text-gray-700">
          {date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </div>
      );
    },
  },
];

export default function Team() {
  return (
    <section className="mt-8">
      <div className="px-4 space-y-6">
        <h2 className="text-xl font-bold text-zinc-900 mb-4">All Team</h2>
        <DataTable columns={columns} data={teamMembers} />
      </div>
    </section>
  );
}
