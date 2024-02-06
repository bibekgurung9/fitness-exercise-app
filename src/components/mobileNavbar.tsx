"use client"
import React, { useState } from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import { navLinks } from '@/constants';
import Link from 'next/link';
import { X } from 'lucide-react';
import { ModeToggle } from './mode-toggle';

const MobileNavbar = () => {
  return (
    <div className='md:hidden'>
      <Sheet>
          <SheetTrigger 
            className="md:hidden l:hidden xl:hidden hover:opacity-75 transition">
            <Menu className='text-orange-500' />
          </SheetTrigger>
          <SheetContent className='bg-black flex flex-col items-end'>
            <SheetClose asChild >
              <X className='text-xl bg-orange-500'  />
            </SheetClose>
            {navLinks.map((links) => (
            <div key={links.label}>
              <Link href={links.href} className="flex text-xl text-orange-400 font-bold p-4">
                {links.label}
              </Link>
            </div>
            ))}
            <ModeToggle />
        </SheetContent>
        </Sheet>
    </div>
  )
}

export default MobileNavbar