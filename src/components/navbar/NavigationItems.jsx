import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { sidebarItems } from "../../data";
import { defaultMenuItemVariants } from "../../data/motionVariants";

const NavigationItems = ({ handleNavLinkClick, handleLogout }) => {
  const permissions =
    useSelector((state) => state.auth.user?.permissions) ||
    JSON.parse(localStorage.getItem("user"))?.permissions;
  const filteredItems = sidebarItems.filter((item) =>
    permissions?.includes(item.permission)
  );
  return (
    <>
      <div className="gap-4 flex flex-col w-full">
        {filteredItems.map((item) => (
          <motion.div key={item.path} variants={defaultMenuItemVariants}>
            <NavLink
              to={item.path}
              className="p-4 sidebar block"
              onClick={handleNavLinkClick}
            >
              <div className="flex items-center gap-4">
                <item.icon />
                <span>{item.title}</span>
              </div>
            </NavLink>
          </motion.div>
        ))}
      </div>
      <motion.div variants={defaultMenuItemVariants} className="w-full mt-20 ">
        <button
          type="button"
          onClick={() => handleLogout()}
          className="w-full flex items-center self-end justify-center gap-2 py-3 px-4 rounded-md font-medium transition-all duration-200 border border-[#F77737] bg-[#F77737] text-white hover:bg-white hover:text-black"
        >
          <span className="text-sm font-semibold">Logout</span>
        </button>
      </motion.div>
    </>
  );
};

export default NavigationItems;
