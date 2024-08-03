"use client"
import React from 'react'
import { Button } from '../ui/button'
import ModeToggle from '@/utilities/mode-toggle'
import { miniAdsList } from '@/utilities/types-data'
import Image from 'next/image'

const HomePage = () => {
  return (
    <section className="">

      <section className='flex justify-center items-center flex-col relative' id='start-sec'>
        <div className="w-full rounded-3xl min-h-[calc(100vh-120px)]
                bg-[url('https://i.postimg.cc/1RbDBgFs/header-gif.gif')] 
                bg-no-repeat bg-center bg-cover brightness-50" />

        <div className="absolute bottom-12 flex justify-center items-center flex-col gap-y-6 bg-black/60 p-8 rounded-3xl">
          <p className="text-5xl lg:text-7xl font-bold  galaxy-gradient-text">
            فیلم فولیو
          </p>
          <p className="text-lg lg:text-2xl text-center">پورتفولیوی فیلم های شما</p>
          <Button
            variant="default"
            className="galaxy-gradient-bg text-base font-bold text-white px-10"
          // iconPlacement="right"
          // onClick={() => lenis?.scrollTo("#fans-title", { lerp: 0.02 })}
          >
            بزن بریم
          </Button>
        </div>
      </section>

      <ul className="w-full h-fit mt-20 grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-10 lg:grid-cols-3 lg:gap-x-14">
        {miniAdsList.map((item, index) =>
          <li key={index} className="relative w-full md:min-w-60 lg:min-w-96 flex justify-end">
            <Image
              className="lg:max-w-[244px] lg:max-h-[244px] w-fit h-fit object-fill rounded-xl "
              width={1024}
              height={1024}
              src={item.imgUrl}
              alt="contact pic"
            />

            <div className="flex flex-col gap-y-3 text-white bg-gray-800/80 rounded-xl p-3 w-60 absolute -top-1/2 -translate-x-0 -translate-y-1/2  right-0">
              <p className="text-2xl">{item.title}</p>
              <p className="text-sm">{item.text}</p>
              <Button
                variant="default"
                className="galaxy-gradient-bg text-base font-bold text-white px-4 w-fit"
              >
                {item.textBtn}
              </Button>
            </div>

          </li>

        )}

      </ul>


    </section>
  )
}

export default HomePage
