"use client";

import Image from "next/image";
import logo from "@/public/images/luvmegold-logo.png";
import { MainNav } from "./main-nav";
import MobileSidebar from "./mobile-sidebar";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white px-3 md:px-20 p-4 fixed w-full z-10 shadow-md">
      <Link href="/" className="w-[30%] md:w-[10%]">
        <Image src={logo} alt="Logo" className="w-full" />
      </Link>
      <MobileSidebar />
      <MainNav />
    </nav>
  );
};

export default Navbar;
