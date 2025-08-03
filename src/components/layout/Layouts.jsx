import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

export default function Layouts() {
  return (
    <>
      <Navbar />
      <main className=" overflow-y-auto  bg-[#F9FAFB] h-screen  md:pe-[35px] md:ps-[340px]">
        <Outlet />
      </main>
    </>
  );
}
