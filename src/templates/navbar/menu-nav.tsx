"use client"

import { usePathname } from 'next/navigation';
import Link from 'next/link';


import { cn } from '@/lib/utils';
import { navItemsMenu } from '@/utilities/types';


import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';



const MenuNav = () => {
  const [position, setPosition] = useState("bottom")
  const path = usePathname();

  if (!navItemsMenu?.length) return null;

  return (
    <nav className="flex justify-between items-center">
      {navItemsMenu.slice(0, 2).map((item, index) => (
        <Button key={index} variant="ghost" size="sm">
          <Link
            href={item.href!}
            className={cn(
              "hover:text-primary",
              path === item.href ? "text-primary" : "text-zinc-900"
            )}
          >
            {item.title}
          </Link>
        </Button>
      ))}
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            <Link href="/movies"
              className={cn(
                "hover:text-primary flex justify-between items-center gap-x-2",
                path === "/movies" ? "text-primary" : "text-zinc-900"
              )}
            >
              Movies
              <IconChevronDown className="" size="18" stroke="1.5" />
            </Link>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56">
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>

            <DropdownMenuRadioItem value="special-ads">
              <Link href="/movies/special-ads"
                className={cn("hover:text-primary",
                  path === "/movies/special-ads" ? "text-primary" : "text-zinc-900"
                )}
              >
                special-ads
              </Link>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="left">Left</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      {navItemsMenu.slice(2).map((item, index) => (
        <Button key={index + 2} variant="ghost" size="sm">
          <Link
            href={item.href!}
            className={cn(
              "hover:text-primary",
              path === item.href ? "text-primary" : "text-zinc-900"
            )}
          >
            {item.title}
          </Link>
        </Button>
      ))}
    </nav>
  )
}

export default MenuNav