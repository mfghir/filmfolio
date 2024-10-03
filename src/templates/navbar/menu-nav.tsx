// "use client"

// import { usePathname } from "next/navigation";
// import Link from "next/link";


// import { cn } from "@/lib/utils";
// import { navItemsMenu } from "@/utilities/types";


// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { useState } from "react";
// import { IconChevronDown } from "@tabler/icons-react";



// const MenuNav = () => {
//   const [position, setPosition] = useState("bottom")
//   const path = usePathname();

//   if (!navItemsMenu?.length) return null;

//   return (
//     <nav className="flex justify-between items-center">
//       {navItemsMenu.slice(0, 2).map((item, index) => (
//         <Button key={index} variant="ghost" size="sm">
//           <Link
//             href={item.href!}
//             className={cn(
//               "hover:galaxy-gradient-text",
//               path === item.href ? "galaxy-gradient-text" : "text-zinc-900"
//             )}
//           >
//             {item.title}
//           </Link>
//         </Button>
//       ))}

//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button variant="ghost" size="sm">
//             <Link href="/movies"
//               className={cn(
//                 "hover:galaxy-gradient-text flex justify-between items-center gap-x-2",
//                 path === "/movies" ? "galaxy-gradient-text" : "text-zinc-900"
//               )}
//             >
//               Movies
//               <IconChevronDown className="" size="18" stroke="1.5" />
//             </Link>
//           </Button>
//         </DropdownMenuTrigger>

//         <DropdownMenuContent className="w-56">
//           <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>

//             <DropdownMenuRadioItem value="special-ads" >
//               <Link href="/movies/special-ads"
//                 className={cn("hover:galaxy-gradient-text",
//                   path === "/movies/special-ads" ? "galaxy-gradient-text" : "text-zinc-900"
//                 )}
//               >
//                 Special Ads
//               </Link>
//             </DropdownMenuRadioItem>

//             <DropdownMenuRadioItem value="popular-movies">
//               <Link href="/movies/popular-movies"
//                 className={cn("hover:galaxy-gradient-text",
//                   path === "/movies/popular-movies" ? "galaxy-gradient-text" : "text-zinc-900"
//                 )}
//               >
//                 Popular Movies
//               </Link>
//             </DropdownMenuRadioItem>

//             <DropdownMenuRadioItem value="new-movies">
//               <Link href="/movies/new-movies"
//                 className={cn("hover:galaxy-gradient-text",
//                   path === "/movies/new-movies" ? "galaxy-gradient-text" : "text-zinc-900"
//                 )}
//               >
//                 New Movies
//               </Link>
//             </DropdownMenuRadioItem>

//             <DropdownMenuRadioItem value="sort-movies">
//               <Link href="/movies/sort-movies"
//                 className={cn("hover:galaxy-gradient-text",
//                   path === "/movies/sort-movies" ? "galaxy-gradient-text" : "text-zinc-900"
//                 )}
//               >
//                 Sort Movies
//               </Link>
//             </DropdownMenuRadioItem>
//           </DropdownMenuRadioGroup>
//         </DropdownMenuContent>
//       </DropdownMenu>
//       {navItemsMenu.slice(2).map((item, index) => (
//         <Button key={index + 2} variant="ghost" size="sm">
//           <Link
//             href={item.href!}
//             className={cn(
//               "hover:galaxy-gradient-text",
//               path === item.href ? "galaxy-gradient-text" : "text-zinc-900"
//             )}
//           >
//             {item.title}
//           </Link>
//         </Button>
//       ))}
//     </nav>
//   )
// }

// export default MenuNav

































"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useGoogleTranslate } from "@/utilities/google-translate";
import { IconChevronDown } from "@tabler/icons-react";
import { navItemsMenu } from "@/utilities/types-data";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from "@/components/ui/menubar";

const MenuNav = () => {
  const [position, setPosition] = useState("bottom");
  const path = usePathname();
  const { language } = useGoogleTranslate();


  if (!navItemsMenu?.length) return null;

  return (
    <nav className="">
      <Menubar className="border-none bg-transparent flex flex-col items-start gap-y-4 lg:flex-row">
        {navItemsMenu.slice(0, 2).map((item, index) => (
          <MenubarMenu key={index}>
            <MenubarTrigger>
              <Link
                href={item.href!}
                className={`hover:galaxy-gradient-text dark:hover:galaxy-gradient-text duration-300 
                ${path === item.href ? "galaxy-gradient-text" : "text-zinc-900 dark:text-white"}`}
              >
                {item.title}
              </Link>
            </MenubarTrigger>
          </MenubarMenu>
        ))}

        <MenubarMenu>
          <MenubarTrigger>
            <span dir={language === "fa" ? "rtl" : "ltr"}
              className={`group flex items-center gap-x-2
              ${path === "/movies" ? "galaxy-gradient-text" : "text-zinc-900 dark:text-white"}
            `}>
              <span className="hover:galaxy-gradient-text duration-300">فیلم ها</span>
              <IconChevronDown size="18" stroke="1.5" />
            </span>
          </MenubarTrigger>

          <MenubarContent>
            <MenubarRadioGroup value={position} onValueChange={setPosition}>
              <MenubarRadioItem value="special-ads" dir={language === "fa" ? "rtl" : "ltr"}>
                <Link
                  href="/movies/special-ads"
                  className={`hover:galaxy-gradient-text duration-300
                  ${path === "/movies/special-ads" ? "galaxy-gradient-text" : "text-zinc-900 dark:text-white"}
                  `}>
                  اعلان های ویژه
                </Link>
              </MenubarRadioItem>

              <MenubarRadioItem value="popular-movies" dir={language === "fa" ? "rtl" : "ltr"}>
                <Link
                  href="/movies/popular-movies"
                  className={`hover:galaxy-gradient-text duration-300
                  ${path === "/movies/popular-movies" ? "galaxy-gradient-text" : "text-zinc-900 dark:text-white"}
                  `}>
                  فیلم های محبوب
                </Link>
              </MenubarRadioItem>

              <MenubarRadioItem value="new-movies" dir={language === "fa" ? "rtl" : "ltr"}>
                <Link
                  href="/movies/new-movies"
                  className={`hover:galaxy-gradient-text duration-200 
                  ${path === "/movies/new-movies" ? "galaxy-gradient-text" : "text-zinc-900 dark:text-white"}
                  `}>
                  فیلم های جدید
                </Link>
              </MenubarRadioItem>

              <MenubarRadioItem value="sort-movies" dir={language === "fa" ? "rtl" : "ltr"}>
                <Link
                  href="/movies/sort-movies"
                  className={`hover:galaxy-gradient-text duration-300 
                  ${path === "/movies/sort-movies" ? "galaxy-gradient-text" : "text-zinc-900 dark:text-white"}
                  `}>
                  دسته بندی فیلم ها
                </Link>
              </MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>

        {navItemsMenu.slice(2).map((item, index) => (
          <MenubarMenu key={index + 2}>
            <MenubarTrigger>
              <Link
                href={item.href!}
                className={`hover:galaxy-gradient-text duration-300 
                ${path === item.href ? "galaxy-gradient-text" : "text-zinc-900 dark:text-white"}`}
              >
                {item.title}
              </Link>
            </MenubarTrigger>
          </MenubarMenu>
        ))}
      </Menubar>
    </nav>
  );
};

export default MenuNav;
