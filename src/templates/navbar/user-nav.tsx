"use client"

import Link from "next/link";
import { signOut, useSession } from 'next-auth/react';
import { useGoogleTranslate } from "@/utilities/google-translate"

import { Button } from "@/components/ui/button"
import { UserInfo } from "@/utilities/types-data"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
  Gauge,
  KeyRound,
  ListFilter,
  LogOutIcon,
  MessageSquare,
  SquareUserRound,
  UsersRound
} from "lucide-react"


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

        <DropdownMenuGroup className={`${language === "fa" ? "w-full flex justify-between flex-wrap flex-col" : ""}`}>
          <Link href="/dashboard"
            className={`whitespace-nowrap ${language === "fa" ? "w-full flex flex-row-reverse justify-between " : ""}`}
          >
            <DropdownMenuItem className={`${language === "fa" ? "w-full flex-row-reverse justify-between" : ""}`}>
              داشبورد
              <DropdownMenuShortcut className={language === "fa" ? "w-full" : "w-fit"} >
                <Gauge />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>


          <Link href="/dashboard/profile"
            className={`whitespace-nowrap lg:hidden ${language === "fa" ? "w-full flex flex-row-reverse  justify-between " : ""}`}
          >
            <DropdownMenuItem className={`${language === "fa" ? "w-full flex-row-reverse justify-between" : ""}`}>
              پروفایل
              <DropdownMenuShortcut className={language === "fa" ? "w-full" : "w-fit"} >
                <SquareUserRound />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>


          <Link href="/dashboard/users"
            className={`whitespace-nowrap lg:hidden ${language === "fa" ? "w-full flex flex-row-reverse  justify-between " : ""}`}
          >
            <DropdownMenuItem className={`${language === "fa" ? "w-full flex-row-reverse justify-between" : ""}`}>
              کاربران
              <DropdownMenuShortcut className={language === "fa" ? "w-full" : "w-fit"} >
                <UsersRound />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>


          <Link href="/dashboard/messages"
            className={`whitespace-nowrap lg:hidden ${language === "fa" ? "w-full flex flex-row-reverse  justify-between " : ""}`}
          >
            <DropdownMenuItem className={`${language === "fa" ? "w-full flex-row-reverse justify-between" : ""}`}>
              پیام ها
              <DropdownMenuShortcut className={language === "fa" ? "w-full" : "w-fit"} >
                <MessageSquare />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>


          <Link href="/dashboard/kdrama-list"
            className={`whitespace-nowrap lg:hidden ${language === "fa" ? "w-full flex flex-row-reverse  justify-between " : ""}`}
          >
            <DropdownMenuItem className={`${language === "fa" ? "w-full flex-row-reverse justify-between" : ""}`}>
              لیست فیلم ها
              <DropdownMenuShortcut className={language === "fa" ? "w-full" : "w-fit"} >
                <ListFilter />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>


          <Link href="/dashboard/change-password"
            className={`whitespace-nowrap lg:hidden ${language === "fa" ? "w-full flex flex-row-reverse  justify-between " : ""}`}
          >
            <DropdownMenuItem className={`${language === "fa" ? "w-full flex-row-reverse justify-between" : ""}`}>
              تغییر رمز عبور
              <DropdownMenuShortcut className={language === "fa" ? "w-full" : "w-fit"} >
                <KeyRound />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => signOut({ callbackUrl: "/" })}
          className={`${language === "fa" ? "w-full flex-row-reverse justify-between" : ""}`}
        >
          خروج
          <DropdownMenuShortcut className={language === "fa" ? "w-full" : "w-fit"} >
            <LogOutIcon />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu >
  )
}

export default UserNav