import { Link, Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

export default function Layouts() {
  return (
    <>
      <nav>
        <ul>
          <Link to={"users"}>users</Link>
          <Link to={"reports"}>reports</Link>
          <Link to={"settings"}>settings</Link>
          <Link to={"team"}>team</Link>
          <Link to={"profile"}>profile</Link>
          <Link to={"tasks"}>tasks</Link>
        </ul>
      </nav>
      <main className=" overflow-y-auto  bg-[#F9FAFB] h-screen  md:pe-[35px] md:ps-[340px]">
        <Outlet />
      </main>
    </>
  );
}
