"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Gauge, LogOutIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { UserInfo } from "@/utilities/types-data"


import { signOut, useSession } from 'next-auth/react';
import { useGoogleTranslate } from "@/utilities/google-translate"




const UserNav = ({ userInfo }: { userInfo: UserInfo }) => {
  const { data: session } = useSession();
  const { language } = useGoogleTranslate();

  // console.log("session - userNav===>>>" , session );
  // console.log("image - userNav===>>>" , session?.user?.image );
  // status === "authenticated"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-9 w-9">
            <AvatarImage src={userInfo?.imgUrl} alt="user pic" />
            <AvatarFallback>{userInfo?.name ? userInfo.name.slice(0, 2) : "user pic"}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      {/* <DialogHeader className={`w-full ${language === "fa" ? "flex flex-col items-start flex-reverse mt-10" : ""}`} > */}

      <DropdownMenuContent className="w-56" align="start" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{userInfo?.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {userInfo?.email}
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup className={`${language === "fa" ? "w-full flex  justify-between" : ""}`}>
          <Link href="/dashboard" className={`${language === "fa" ? "w-full flex flex-row-reverse  justify-between " : ""}`} >
            <DropdownMenuItem className={`${language === "fa" ? "w-full flex-row-reverse justify-between" : ""}`}>
              داشبورد
              <DropdownMenuShortcut className={language === "fa" ? "w-full" : "w-fit"} ><Gauge /></DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>

          {/* <DropdownMenuItem>
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem> */}

          {/* <DropdownMenuItem>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem> */}
          {/* <DropdownMenuItem>New Team</DropdownMenuItem> */}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />



        <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })}
          className={`${language === "fa" ? "w-full flex-row-reverse justify-between" : ""}`}>
          خروج
          <DropdownMenuShortcut className={language === "fa" ? "w-full" : "w-fit"} ><LogOutIcon /></DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu >
  )
}

export default UserNav