"use client"

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

import { UserInfo, navItemsDashboard } from '@/utilities/types-data';
import { useGoogleTranslate } from '@/utilities/google-translate';


const DashboardNav = ({ setOpen, userInfo }: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userInfo: UserInfo
}) => {
  const path = usePathname();
  const { language } = useGoogleTranslate();


  if (!navItemsDashboard?.length) return null;

  return (
    <nav className={`relative hidden h-auto pt-32 px-4 lg:block w-72 dark:border-gray-700 
          ${language === "fa" ? "border-l" : "border-r"}
     `}>

      {navItemsDashboard.map((item, index) => {
        if (item.role.includes(userInfo?.role)) {
          return (
            item.href && (
              <Link
                key={index}
                href={item.disabled ? "/" : item.href}
                onClick={() => {
                  if (setOpen) setOpen(false);
                }}
              >
                <span
                  className={cn(
                    "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground my-2",
                    path === item.href ? "bg-accent" : "transparent",
                    item.disabled && "cursor-not-allowed opacity-80",
                  )}
                >
                  {/* @ts-ignore  */}
                  <item.icon className={`h-4 w-4 ${language === "fa" ? "ml-2" : "mr-2"}`} />
                  <span>{item.title}</span>
                </span>
              </Link>
            )
          );
        }
      })}
    </nav>
  )
}

export default DashboardNav