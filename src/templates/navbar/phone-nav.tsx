"use client";

import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { useGoogleTranslate } from "@/utilities/google-translate";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LanguageToggle } from "@/utilities/language-toggle";
import { UserInfo } from "@/utilities/types-data";

import ModeToggle from "@/utilities/mode-toggle";
import MenuNav from "./menu-nav";


const PhoneNav = ({ userInfo }: { userInfo: UserInfo }) => {
  const [open, setOpen] = useState(false);
  const { language } = useGoogleTranslate();


  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <MenuIcon />
      </SheetTrigger>

      <SheetContent side={language === "fa" ? "right" : "left"} className="!px-0 border-none bg-white dark:bg-background">
        <div className="flex flex-col space-y-4 px-3 py-6 ">
          <div className="flex justify-between items-center my-4">
            <ModeToggle />
            <LanguageToggle />
          </div>

          <MenuNav />
        </div>
      </SheetContent>
    </Sheet>

  )
}

export default PhoneNav