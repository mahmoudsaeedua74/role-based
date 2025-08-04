import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { sidebarItems } from "../../data";
import { defaultMenuItemVariants } from "../../data/motionVariants";
import { Button } from "../ui/button";

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
        <Button
          type="button"
          variants="primary"
          onClick={handleLogout}
          className="w-full self-end"
        >
          <span className="text-sm font-semibold">Logout</span>
        </Button>
      </motion.div>
    </>
  );
};

export default NavigationItems;
