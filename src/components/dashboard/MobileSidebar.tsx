"use client";

import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { UserInfo } from "@/lib/data";
import ModeToggle from "@/utilities/mode-toggle";
import DashboardNav from "@/templates/navbar/dashboard-nav";


const MobileSidebar = ({ userInfo }: { userInfo: UserInfo }) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <MenuIcon />
      </SheetTrigger>

      <SheetContent side="left" className="!px-0">
        <div className="space-y-4 px-3 py-6 ">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Overview
          </h2>

          <div className="space-y-2 min-h-[550px]">
            {/* @ts-ignore */}
            <DashboardNav userInfo={userInfo} setOpen={setOpen} />
          </div>

          <section className="w-full flex items-center justify-between">
            <ModeToggle />
            {/* <ThemeSelector /> */}
          </section>
        </div>
      </SheetContent>
    </Sheet>

  )
}

export default MobileSidebar