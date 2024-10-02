"use client";

import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { UserInfo } from "@/utilities/types-data";
import DashboardNav from "./dashboard-nav";
import MenuNav from "./menu-nav";



const PhoneNav = ({ userInfo }: { userInfo: UserInfo }) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <MenuIcon />
      </SheetTrigger>

      <SheetContent side="left" className="!px-0">
        <div className="flex flex-col space-y-4 px-3 py-6 ">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Overview
          </h2>

          <MenuNav />

          {/* <div className="space-y-2 min-h-[550px] mt-28 bg-red-300">
            <DashboardNav userInfo={userInfo} setOpen={setOpen} />
          </div> */}


          {/* <ModeToggle /> */}
        </div>
      </SheetContent>
    </Sheet>

  )
}

export default PhoneNav