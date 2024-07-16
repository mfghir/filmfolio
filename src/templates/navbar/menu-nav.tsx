// "use client"

// import { usePathname } from 'next/navigation';
// import Link from 'next/link';


// import { cn } from '@/lib/utils';
// import { navItemsMenu } from '@/utilities/types';


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
// import { useState } from 'react';
// import { IconChevronDown } from '@tabler/icons-react';



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
//               "hover:text-primary",
//               path === item.href ? "text-primary" : "text-zinc-900"
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
//                 "hover:text-primary flex justify-between items-center gap-x-2",
//                 path === "/movies" ? "text-primary" : "text-zinc-900"
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
//                 className={cn("hover:text-primary",
//                   path === "/movies/special-ads" ? "text-primary" : "text-zinc-900"
//                 )}
//               >
//                 Special Ads
//               </Link>
//             </DropdownMenuRadioItem>

//             <DropdownMenuRadioItem value="popular-movies">
//               <Link href="/movies/popular-movies"
//                 className={cn("hover:text-primary",
//                   path === "/movies/popular-movies" ? "text-primary" : "text-zinc-900"
//                 )}
//               >
//                 Popular Movies
//               </Link>
//             </DropdownMenuRadioItem>

//             <DropdownMenuRadioItem value="new-movies">
//               <Link href="/movies/new-movies"
//                 className={cn("hover:text-primary",
//                   path === "/movies/new-movies" ? "text-primary" : "text-zinc-900"
//                 )}
//               >
//                 New Movies
//               </Link>
//             </DropdownMenuRadioItem>

//             <DropdownMenuRadioItem value="sort-movies">
//               <Link href="/movies/sort-movies"
//                 className={cn("hover:text-primary",
//                   path === "/movies/sort-movies" ? "text-primary" : "text-zinc-900"
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
//               "hover:text-primary",
//               path === item.href ? "text-primary" : "text-zinc-900"
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

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';

import { navItemsMenu } from '@/utilities/types';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

const MenuNav = () => {
  const [position, setPosition] = useState("bottom");
  const path = usePathname();

  if (!navItemsMenu?.length) return null;

  return (
    <nav className="">
      <Menubar className='border-none bg-transparent flex flex-col items-start gap-y-4 lg:flex-row'>
        {navItemsMenu.slice(0, 2).map((item, index) => (
          <MenubarMenu key={index}>
            <MenubarTrigger>
              <Link
                href={item.href!}
                className={`hover:text-primary dark:hover:text-primary duration-300 
                ${path === item.href ? "text-primary" : "text-zinc-900 dark:text-white"}`}
              >
                {item.title}
              </Link>
            </MenubarTrigger>
          </MenubarMenu>
        ))}

        <MenubarMenu>
          <MenubarTrigger>
            <span className={`hover:text-primary dark:hover:text-primary duration-300
            flex items-center ${path === "/movies" ? "text-primary" : "text-zinc-900 dark:text-white"}`}>
              Movies
              <IconChevronDown className="ml-1" size="18" stroke="1.5" />
            </span>

            {/* <Link
              href="/movies"
              className={`hover:text-primary dura 
              flex items-center ${path === "/movies" ? "text-primary" : "text-zinc-900"}`}
            >
              Movies
              <IconChevronDown className="ml-1" size="18" stroke="1.5" />
            </Link> */}
          </MenubarTrigger>

          <MenubarContent>
            <MenubarRadioGroup value={position} onValueChange={setPosition}>
              <MenubarRadioItem value="special-ads">
                <Link
                  href="/movies/special-ads"
                  className={`hover:text-primary dark:hover:text-primary duration-300
                  ${path === "/movies/special-ads" ? "text-primary" : "text-zinc-900 dark:text-white"}`}
                >
                  Special Ads
                </Link>
              </MenubarRadioItem>
              <MenubarRadioItem value="popular-movies">
                <Link
                  href="/movies/popular-movies"
                  className={`hover:text-primary dark:hover:text-primary duration-300
                  ${path === "/movies/popular-movies" ? "text-primary" : "text-zinc-900 dark:text-white"}`}
                >
                  Popular Movies
                </Link>
              </MenubarRadioItem>
              <MenubarRadioItem value="new-movies">
                <Link
                  href="/movies/new-movies"
                  className={`hover:text-primary dark:hover:text-primary duration-200 
                  ${path === "/movies/new-movies" ? "text-primary" : "text-zinc-900 dark:text-white"}`}
                >
                  New Movies
                </Link>
              </MenubarRadioItem>
              <MenubarRadioItem value="sort-movies">
                <Link
                  href="/movies/sort-movies"
                  className={`hover:text-primary dark:hover:text-primary duration-300 
                  ${path === "/movies/sort-movies" ? "text-primary" : "text-zinc-900 dark:text-white"}`}
                >
                  Sort Movies
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
                className={`hover:text-primary dark:hover:text-primary duration-300 
                ${path === item.href ? "text-primary" : "text-zinc-900 dark:text-white"}`}
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
