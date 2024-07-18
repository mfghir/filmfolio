"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

import UserNav from './user-nav';
import { usePathname } from 'next/navigation';
import ModeToggle from '@/utilities/mode-toggle';

import { Button } from '@/components/ui/button';

import PhoneNav from './phone-nav';
import MenuNav from './menu-nav';
import SearchBar from '../search-bar';

import { UserInfo } from '@/utilities/types-data';
import { LanguageToggle } from '@/utilities/language-toggle';


const Navbar = ({ userInfo }: { userInfo: UserInfo }) => {
  const { data: session, status } = useSession();
  const path = usePathname();

  // console.log("session ---->",session)
  // console.log("status ---->",status)


  // const [searchTerm, setSearchTerm] = useState('');
  // const [searchResults, setSearchResults] = useState(usersList);


  const handleSearch = (searchTerm: string) => {
    console.log("searchTerm", searchTerm)
    // setSearchTerm(searchTerm);

    // if (searchTerm === '') {
    //   setSearchResults(usersList);
    // } else {
    //   const filteredResults = usersList.filter((user: any) => {
    //     return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    //   });
    //   setSearchResults(filteredResults);
    // }
  };

  const highlightSearchTerm = (text: string, searchTerm: string) => {
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  };


  return (
    <div className="fixed inset-0 top-0 left-0 z-20 h-fit">
      <div className=" px-6 py-3 lg:px-20 flex justify-between items-center supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur">
        <section className=" flex justify-start items-center gap-y-2 gap-x-4 ">
          <Link href="/"
            className='pic-anim bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:bg-gradient-to-rl hover:from-cyan-500 hover:to-fuchsia-500'>
            <Image
              className="w-16 h-16 rounded-full object-fill "
              width={70}
              height={70}
              src="https://i.postimg.cc/yNpn4ymk/logo.png"
              alt="logo"
            />
          </Link>
          <ModeToggle />

          {/* <GoogleTranslate /> */}
          <LanguageToggle/> 
        </section>

        <div className="hidden lg:block">
          <MenuNav />
        </div>

        <section className="flex justify-end items-center gap-y-2 gap-x-4">
          {/* <div className='hidden lg:flex justify-between items-center gap-x-4'>
          </div> */}

          <div className="lg:hidden">
            <PhoneNav userInfo={userInfo} />
          </div>


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
        </section>
      </div>
    </div>
  )
}

export default Navbar