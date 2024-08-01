import React from 'react'
import Image from 'next/image';
import { UserRound } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/themes/theme-toggle";

const Header = ({navbar_icon}: any) => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
        <Image src={navbar_icon} alt="Konfhub-icon" className="dark:bg-stone-400 dark:rounded-md" width={100} height={24} />
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1"> 
            <Button variant="outline" size="icon" className="rounded-full outline-none cursor-pointer focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
                <UserRound />
            </Button>
            <ModeToggle />
        </div>
    </header>
  )
}

export default Header