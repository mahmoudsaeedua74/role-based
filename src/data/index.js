import {
  FaUsers,
  FaChartBar,
  FaCog,
  FaTasks,
  FaUserCircle,
} from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
// for  sidebar Links
export const sidebarItems = [
  {
    title: "Users",
    icon: FaUsers,
    path: "/users",
    permission: "view_users",
  },
  {
    title: "Reports",
    icon: FaChartBar,
    path: "/reports",
    permission: "view_reports",
  },

  {
    title: "Settings",
    icon: FaCog,
    path: "/settings",
    permission: "view_settings",
  },
  {
    title: "Team",
    icon: RiTeamFill,
    path: "/team",
    permission: "view_team",
  },
  {
    title: "Tasks",
    icon: FaTasks,
    path: "/tasks",
    permission: "view_tasks",
  },
  {
    title: "Profile",
    icon: FaUserCircle,
    path: "/profile",
    permission: "view_profile",
  },
];
