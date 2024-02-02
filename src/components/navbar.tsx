import { navLinks } from "@/constants";
import Link from "next/link";
import { Dumbbell } from "lucide-react";
import MobileNavbar from "./mobileNavbar";

export default function Navbar(){
  return(
    <nav className="bg-slate-900 flex h-[64px] justify-between items-center w-full">
        <Link href="/" className="m-4 flex gap-2 text-orange-400 font-bold text-xl">
          <Dumbbell />
          <span>Fitness Nepal</span>
        </Link>
      <div className="hidden md:flex">
        {navLinks.map((links) => (
          <div className="py-2" key={links.label}>
            <Link href={links.href} className="flex text-xl text-orange-400 font-bold p-4 sm:p-2">
              {links.label}
            </Link>
          </div>
        ))}
      </div> 
      <MobileNavbar />
    </nav>
  )
}