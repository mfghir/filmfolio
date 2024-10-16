"use client"

import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

import UserNav from "./user-nav";
import { usePathname } from "next/navigation";
import ModeToggle from "@/utilities/mode-toggle";


import PhoneNav from "./phone-nav";
import MenuNav from "./menu-nav";
import SearchBar from "../search-bar";

import { UserInfo } from "@/utilities/types-data";
import { LanguageToggle } from "@/utilities/language-toggle";
import { useGoogleTranslate } from "@/utilities/google-translate";

import { Button } from "@/components/ui/button";

// const Navbar = () => {
const Navbar = ({ userInfo }: { userInfo: UserInfo }) => {
  const { data: session, status } = useSession();
  const path = usePathname();

  const { language } = useGoogleTranslate();


  // console.log("session ---->",session)
  // console.log("status ---->",status)


  // const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState(usersList);


  const handleSearch = (searchTerm: string) => {
    console.log("searchTerm", searchTerm)
    // setSearchTerm(searchTerm);

    // if (searchTerm === "") {
    //   setSearchResults(usersList);
    // } else {
    //   const filteredResults = usersList.filter((user: any) => {
    //     return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    //   });
    //   setSearchResults(filteredResults);
    // }
  };

  const highlightSearchTerm = (text: string, searchTerm: string) => {
    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  };


  return (
    <div className="max-w-[1440px] mx-auto fixed inset-0 top-0 left-0 z-20 h-fit">
      <div className="px-6 py-3 lg:px-20 flex justify-between items-center bg-gray-300/50 dark:bg-gray-800/60 backdrop-blur">

        <section className=" flex justify-start items-center gap-y-2 gap-x-4 ">
          <Link href="/" className="pic-anim galaxy-gradient-bg">
            <Image
              className="w-16 h-16 rounded-full object-fill "
              width={70}
              height={70}
              src="https://i.postimg.cc/pdRP5J2Y/logo.jpg"
              alt="logo"
            />
          </Link>

          <div className="hidden lg:block">
            <ModeToggle />
          </div>

          <div className="hidden lg:block">
            <LanguageToggle />
          </div>
        </section>

        <div className="hidden lg:block">
          <MenuNav />
        </div>

        <section className="flex justify-end items-center gap-y-2 gap-x-4">
          {session?.user ?
            <UserNav userInfo={userInfo} />
            :
            <>
              <div className="hidden lg:block w-full">
                <SearchBar onSearch={handleSearch} />
              </div>
              <Button asChild>
                <Link href="/register">ثبت نام</Link>
              </Button>
            </>
          }


          <div className="lg:hidden">
            <PhoneNav userInfo={userInfo} />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Navbar