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
// login form data
export const loginFormData = [
  {
    label: "Email address",
    name: "email",
    placeholder: "Put your email",
    type: "email",
  },
  {
    label: "Password",
    name: "password",
    placeholder: "Put your password",
    type: "password",
  },
];
//for permission path
export const permissionToPath = {
  view_users: "/users",
  view_reports: "/reports",
  view_settings: "/settings",
  view_team: "/team",
  view_profile: "/profile",
  view_tasks: "/tasks",
};
