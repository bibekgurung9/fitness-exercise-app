import { navLinks } from "@/constants";
import Link from "next/link";

export default function Navbar(){
  return(
    <nav className="bg-orange-400 flex justify-end md:h-[64px] items-center sm:h-[48px] w-full">
      <div className="flex gap-x-4 px-6">
        {navLinks.map((links) => (
          <div className="hover:bg-orange-600/50 py-2 px-2 rounded-xl">
            <Link href={links.href}>
              {links.label}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  )
}