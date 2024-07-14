"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

import UserNav from './user-nav';

import { usePathname } from 'next/navigation';

import ModeToggle from '@/utilities/mode-toggle';
import { Button } from '@/components/ui/button';
import { UserInfo } from '@/utilities/types';
import PhoneNav from './phone-nav';

const Navbar = ({ userInfo }: { userInfo: UserInfo }) => {
  const { data: session ,status  } = useSession();
  const path = usePathname();

  // console.log("session ---->",session)
  // console.log("status ---->",status)


  return (
    <div className="fixed inset-0 top-0 left-0 z-20 h-fit">
      <div className=" px-6 py-3 lg:px-20 flex justify-between items-center supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur">
        <section className="wf flex justify-start items-center gap-y-2 gap-x-4 ">
          <Link href="/"
            className='pic-anim bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:bg-gradient-to-rl hover:from-cyan-500 hover:to-fuchsia-500'>
            <Image
              className="w-16 h-16 rounded-full object-fill "
              width={70}
              height={70}
              src="https://i.postimg.cc/prbWMKsD/logo.png"
              alt="logo"
            />
          </Link>
        </section>

        <section className="flex justify-end items-center gap-y-2 gap-x-4">
          <div className='hidden lg:flex justify-between items-center gap-x-4'>
            <ModeToggle />
          </div>

          {/* {path === "/dashboard" || path === "/dashboard/users" || path === "/dashboard/messages"  ? */}
          <div className="lg:hidden">
            <PhoneNav userInfo={userInfo} />
          </div>
          {/* null */}
          {/* } */}

          {session?.user ? <UserNav userInfo={userInfo} /> :
            <Button asChild>
              <Link href="/register">Register</Link>
            </Button>
          }
        </section>
      </div>
    </div>
  )
}

export default Navbar