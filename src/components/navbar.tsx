import { navLinks } from "@/constants";
import Link from "next/link";
import { Dumbbell } from "lucide-react";
import MobileNavbar from "./mobileNavbar";
import { ModeToggle } from "./mode-toggle";

export default function Navbar(){
  return(
    <nav className="bg-slate-950 flex h-[64px] justify-between items-center w-full border-b-4">
        <Link href="/" className="m-4 flex gap-2 text-orange-400 font-bold text-xl">
          <Dumbbell />
          <span>Fitness Nepal</span>
        </Link>  
      <div className="hidden md:flex mr-4 items-center gap-x-2">
        <ModeToggle />
        {navLinks.map((links) => (
          <div key={links.label}>
            <Link href={links.href} className="flex text-xl text-orange-400 font-bold p-4 sm:p-2 hover:bg-slate-800 hover:rounded-full hover:underline hover:scale-110">
              {links.label}
            </Link>
          </div>
        ))}
      </div>
      <MobileNavbar />
  
    </nav>
  )
}