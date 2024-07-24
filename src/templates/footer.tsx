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
    <footer className="w-full dark:text-gray-200 text-zinc-800 bg-zinc-100 dark:bg-zinc-900 body-font rounded-xl mt-12">
      <section className="container w-full flex justify-between items-center flex-wrap md:flex-nowrap gap-y-12 p-6">
        {/* logo */}
        <div className="flex flex-col gap-y-2">
          <Link href="/" className='w-fit pic-anim galaxy-gradient-bg'>
            <Image
              className="w-16 h-16 rounded-full object-cover origin-center"
              width={70}
              height={70}
              src="https://i.postimg.cc/yNpn4ymk/logo.png"
              alt="logo"
            />
          </Link>
          <p className="text-base ">پورتفولیوی فیلم های شما</p>
        </div>


        {/* menu */}
        <ul className="list-none w-ful md:w-fit grid grid-cols-2 md:grid-cols-3 md:gap-y-4 lg:flex md:gap-x-6">
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
        <ul className="flex justify-start items-center gap-x-3">
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

      <div className="bg-zinc-200 dark:bg-zinc-800 px-5 py-4">
        <p className="text-xs capitalize text-center">تمامی حقوق محفوظ و استفاده بدون کسب اجازه ممنوع است</p>
      </div>
    </footer>

  )
}

export default Footer



