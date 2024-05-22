import Image from "next/image";
import logo from "@/public/images/luvmegold-logo.png";
import { SidebarRoute } from "./sidebar-route";

const Sidebar = () => {
  return (
    <div className="sidebar flex flex-col items-center justify-center gap-20">
      <div className="w-[30%] mt-20">
        <Image src={logo} alt="Logo" className="w-full" />
      </div>
      <SidebarRoute />
    </div>
  );
};

export default Sidebar;
