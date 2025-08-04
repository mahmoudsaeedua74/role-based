import { Outlet } from "react-router-dom";
import Sidebar from "../navbar/Sidebar";

export default function Layouts() {
  return (
    <>
      <Sidebar />
      <main className=" overflow-y-auto  bg-[#F9FAFB] h-screen  md:pe-[35px] md:ps-[340px]">
        <Outlet />
      </main>
    </>
  );
}
