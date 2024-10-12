"use client"

import {
  IconBrandDribbble,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram
} from '@tabler/icons-react';

import Image from 'next/image';
import Link from 'next/link';


const Footer = () => {

  return (
    <footer className="w-full mx-auto text-gray-900 dark:text-white px-4 md:px-8 lg:px-0">
      <section className="container bg-gray-100 dark:bg-gray-800 w-full rounded-xl
              flex justify-between items-center flex-wrap md:flex-nowrap gap-y-12 py-10">

        {/* logo */}
        <div className="flex flex-col gap-y-2">
          <Link href="/" className='w-fit pic-anim galaxy-gradient-bg'>
            <Image
              className="w-16 h-16 rounded-full object-cover origin-center"
              width={70}
              height={70}
              src="https://i.postimg.cc/pdRP5J2Y/logo.jpg"
              alt="logo"
            />
          </Link>
          <p className="text-base ">پورتفولیوی فیلم های شما</p>
        </div>


        {/* menu */}
        <ul className="list-none w-ful md:w-fit grid grid-cols-2 gap-x-16 gap-y-2 md:grid-cols-3 md:gap-y-4 lg:flex md:gap-x-6">
          <li>
            <Link href="/"
              className="hover:galaxy-gradient-text duration-300">
              خانه
            </Link>
          </li>

          <li>
            <Link href="/the-best"
              className="hover:galaxy-gradient-text duration-300">
              برترین ها
            </Link>
          </li>

          <li>
            <Link href="/movies"
              className="hover:galaxy-gradient-text duration-300">
              فیلم ها
            </Link>
          </li>

          <li>
            <Link href="/blog"
              className="hover:galaxy-gradient-text duration-300">
              وبلاگ
            </Link>
          </li>

          <li>
            <Link href="/about-us"
              className="hover:galaxy-gradient-text duration-300">
              درباره ما
            </Link>
          </li>

          <li>
            <Link href="/contact"
              className="hover:galaxy-gradient-text duration-300">
              تماس با ما
            </Link>
          </li>
        </ul>


        {/* socials */}
        <ul className="flex justify-center items-center gap-x-3 mx-auto">
          <li className="hover:text-fuchsia-500 duration-300">
            <a
              href="https://t.me/fatemeweb"
              target="_blank"
              rel="noreferrer"
            // className='element-hover'
            >
              <IconBrandTelegram />
            </a>
          </li>

          <li className="hover:text-fuchsia-500 duration-300">
            <a
              href="https://www.instagram.com/fatemeweb/"
              target="_blank"
              rel="noreferrer"
            >
              <IconBrandInstagram />
            </a>
          </li>

          <li className="hover:text-fuchsia-500 duration-300">
            <a
              href="https://www.linkedin.com/in/fateme-ghafari"
              target="_blank"
              rel="noreferrer"
            >
              <IconBrandLinkedin />
            </a>
          </li>

          <li className="hover:text-fuchsia-500 duration-300">
            <a
              href="https://github.com/mfghir"
              target="_blank"
              rel="noreferrer"
            >
              <IconBrandGithub />
            </a>
          </li>

          <li className="hover:text-fuchsia-500 duration-300">
            <a
              href="https://dribbble.com/fatemeweb"
              target="_blank"
              rel="noreferrer"
            >
              <IconBrandDribbble />
            </a>
          </li>
        </ul>
      </section>

      <div className=" px-5 py-6 text-xs flex justify-between items-center gap-y-4 flex-wrap md:flex-nowrap w-full text-gray-500">
        <p className="w-full flex justify-between  md:justify-start md:gap-x-8">
          <Link href="/faq" className="hover:galaxy-gradient-text duration-300">سوالات متداول</Link>
          <Link href="/terms&conditions" className="hover:galaxy-gradient-text duration-300">قوانین و مقررات</Link>
        </p>
        <p className="w-full text-right lg:text-left">تمامی حقوق محفوظ و استفاده بدون کسب اجازه ممنوع است</p>
      </div>
    </footer>

  )
}

export default Footer



