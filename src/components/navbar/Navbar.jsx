import { useDispatch, useSelector } from "react-redux";
import logo from "/logo.webp";
import { logout } from "../../store/sliceAuth/authSlice";
import { sidebarItems } from "../../data";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
  };
  const permissions =
    useSelector((state) => state.auth.user?.permissions) ||
    JSON.parse(localStorage.getItem("user"))?.permissions;

  const filteredItems = sidebarItems.filter((item) =>
    permissions?.includes(item.permission)
  );
  return (
    <nav className="bg-sidebar text-[#9E9E9E] font-semibold py-10 px-4 fixed top-0 bottom-0 w-[300px] items-center flex-col gap-10 z-50 hidden md:flex">
      <img
        src={logo}
        alt="Logo"
        className={`size-28 object-cover rounded-full `}
      />

      <div className="gap-4 flex flex-col w-full">
        {filteredItems.map((item) => (
          <div key={item.path}>
            <NavLink
              to={item.path}
              className="p-4 hover:rounded-lg hover:bg-primary hover:scale-105 hover:text-white duration-200 transition-all block"
            >
              <div className="flex items-center gap-4">
                <item.icon />
                <span>{item.title}</span>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
      <div className="w-full mt-20 ">
        <button
          type="button"
          onClick={handleLogout}
          className="w-full flex items-center self-end justify-center gap-2 py-3 px-4 rounded-md font-medium transition-all duration-200 border border-[#F77737] bg-[#F77737] text-white hover:bg-white hover:text-black"
        >
          <span className="text-sm font-semibold">Logout</span>
        </button>
      </div>
    </nav>
  );
}
