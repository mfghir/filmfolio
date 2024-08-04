"use client"
import React from 'react'
import { Button } from '../ui/button'
import ModeToggle from '@/utilities/mode-toggle'
import { miniAdsList, theBestList } from '@/utilities/types-data'
import Image from 'next/image'
import TitleSec from '@/utilities/title-sec'
import { IconArrowNarrowLeft } from '@tabler/icons-react'

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

      {/* mini ads */}
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

            <div className="flex flex-col gap-y-3 text-white bg-gray-800/80 rounded-xl p-3 w-60 absolute top-1/2 -translate-x-0 -translate-y-1/2  right-0">
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


      {/* the best */}
      <section className="flex flex-col gap-y-12 lg:gap-16 my-12 lg:my-32">
        <TitleSec pageTitle="برترین ها" pageLink="/the-best" />

        <ul className="w-full grid grid-cols-1 md:grid-cols-3 lg:gap-x-16">
          {
            theBestList.map((item, index) =>
              <li key={index} className="flex flex-col justify-between items-center rounded-xl bg-gray-800 px-4 p-2 relative">
                <div className="w-full h-full galaxy-gradient-border p-1 rounded-[6px] ">

                  <div className="w-full h-full flex flex-col justify-between items-center px-4 py-2
                bg-gray-800
               ">



                    <Image
                      className="lg:max-w-[244px] lg:max-h-[244px] w-fit h-fit object-fill rounded-xl "
                      width={1024}
                      height={1024}
                      src={item.imgUrl}
                      alt="contact pic"
                    />

                    <p className="text-xl lg:text-2xl font-bold px-1 galaxy-gradient-border rounded-m[] relative">
                      <span className="w-full h-full bg-gray-800 after:content-[''] after:bg-black/60 after:absolute">
                        {item.text}
                      </span>
                    </p>

                    <Button
                      variant="default"
                      className="galaxy-gradient-bg text-base font-bold text-white px-4 w-fit flex gap-x-1 absolute -bottom-3 z-10"
                    >
                      مشاهده
                      <IconArrowNarrowLeft stroke={1.5} />
                    </Button>

                  </div>
                </div>

              </li>
            )
          }
        </ul>
      </section>

    </section>
  )
}

export default HomePage
