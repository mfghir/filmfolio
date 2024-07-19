"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { useGoogleTranslate } from "./google-translate"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const ModeToggle = () => {
  const { setTheme } = useTheme()
  const { language } = useGoogleTranslate();


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-zinc-900 dark:text-white">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")} className={language === "fa" ? "justify-end" : ""}>
          روشن
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className={language === "fa" ? "justify-end" : ""}>
          تیره
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className={language === "fa" ? "justify-end" : ""}>
          سیستم
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


export default ModeToggle
