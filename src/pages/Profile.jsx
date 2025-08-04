import { useSelector } from "react-redux";

export default function Profile() {
  const user =
    useSelector((state) => state.auth.user) ||
    JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return (
      <p className="text-center mt-10 text-gray-500">No user data found.</p>
    );
  }

  return (
    <section className="mt-8 px-4 space-y-6">
      <h2 className="text-xl font-bold text-zinc-900 mb-4">Profile</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* صورة المستخدم */}
        <div className="w-full md:w-1/3">
          <div className="bg-white rounded-2xl shadow p-6 flex justify-center items-center h-full">
            <img
              src={`https://ui-avatars.com/api/?name=${user.name}&background=random`}
              alt={user.name}
              className="rounded-full w-32 h-32 object-cover"
            />
          </div>
        </div>

        {/* معلومات المستخدم */}
        <div className="w-full md:w-2/3">
          <div className="bg-white rounded-2xl shadow p-6 space-y-4">
            <h3 className="text-lg font-semibold text-zinc-800">
              User Information
            </h3>
            <div className="space-y-2">
              <p>
                <span className="font-medium text-zinc-600">Name:</span>{" "}
                {user.name}
              </p>
              <p>
                <span className="font-medium text-zinc-600">Role:</span>{" "}
                {user.role}
              </p>
              <p>
                <span className="font-medium text-zinc-600">Permissions:</span>{" "}
                {user.permissions?.join(", ")}
              </p>
              <p>
                <span className="font-medium text-zinc-600">ID:</span> {user.id}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
