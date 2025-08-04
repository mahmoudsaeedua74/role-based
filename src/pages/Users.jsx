import DataTable from "../components/ui/data-table";

const users = Array.from({ length: 30 }, (_, i) => {
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
    "Alexander",
    "Harper",
    "William",
    "Evelyn",
    "Michael",
    "Abigail",
    "Daniel",
    "Emily",
    "Matthew",
    "Elizabeth",
    "Sebastian",
    "Ella",
    "Jack",
    "Avery",
    "Owen",
  ];

  const name = names[i];
  return {
    id: i + 1,
    name,
    email: `${name.toLowerCase()}@example.com`,
    amount: Math.floor(Math.random() * 1000) + 100,
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
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
];

export default function Users() {
  return (
    <section className="mt-8">
      <div className="  px-4  space-y-6">
        <h2 className="text-xl font-bold text-zinc-900 mb-4">Reports</h2>
        <DataTable columns={columns} data={users} />
      </div>
    </section>
  );
}
