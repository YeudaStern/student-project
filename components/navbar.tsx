'use client'

import { cn } from "@/lib/utils"
import { UserButton } from "@clerk/nextjs"
import { Menu, MenuIcon, Sparkles } from "lucide-react"
import { Poppins } from 'next/font/google'
import Link from "next/link"

import { ModeToggle } from "./mode-toggle"
import { MobileSidebar } from "./mobile-sidebar"


const font = Poppins({
    weight: "600",
    subsets: ["latin"]
})

export const Navbar = () => {
    return (
        <div className="z-50 h-16 w-full fixed flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary">
      
        <div className="flex items-center gap-x-3">
           <MobileSidebar/>
           
            <ModeToggle/>
            <UserButton afterSignOutUrl="/"/>
        </div>
          <div className="flex items-center">
            <Link href="/">
                <h1 className={cn("text-xl md:text-3xl font-bold text-primary", font.className)}>
                    החלפת מקומות
                </h1>

            </Link>
        </div>
    </div>
    )
}