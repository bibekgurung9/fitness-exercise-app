import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import { navLinks } from '@/constants';
import Link from 'next/link';

const MobileNavbar = () => {
  return (
    <div className='md:hidden'>
      <Sheet>
          <SheetTrigger className="md:hidden l:hidden xl:hidden pr-4 hover:opacity-75 transition"><Menu className='text-orange-500' /></SheetTrigger>
          <SheetContent className='bg-slate-900'>
          {navLinks.map((links) => (
          <div className="py-2" key={links.label}>
            <Link href={links.href} className="flex text-xl text-orange-400 font-bold p-4 sm:p-2">
              {links.label}
            </Link>
          </div>
        ))}
          </SheetContent>
        </Sheet>
    </div>
  )
}

export default MobileNavbar