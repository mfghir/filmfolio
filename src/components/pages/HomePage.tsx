"use client"


import Image from 'next/image'
import Link from 'next/link'
import { IconArrowNarrowLeft } from '@tabler/icons-react'

import { Button } from '../ui/button'
import TitleSec from '@/utilities/title-sec'
import CustomShape from '@/utilities/CustomShape'

import { aboutUsSec, featuresSec, miniAdsSec, moviesSec, theBestSec } from '@/utilities/types-data'



const HomePage = () => {
  return (
    <>

      <section className="flex justify-center items-center flex-col relative">
        <div className="w-full rounded-3xl min-h-[calc(100vh-120px)] bg-no-repeat bg-center bg-cover brightness-50
                bg-[url('https://i.postimg.cc/1RbDBgFs/header-gif.gif')]"
        />

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
        {miniAdsSec.map((item, index) =>
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
            theBestSec.map((item, index) =>
              <li key={index} className="flex flex-col justify-between items-center rounded-xl bg-gray-200 dark:bg-gray-800 px-4 p-2 relative">
                <div className="w-full h-full galaxy-gradient-border p-1 rounded-[6px]">

                  <div className="w-full h-full flex flex-col justify-between items-center px-4 py-2 bg-gray-200 dark:bg-gray-800">
                    <Image
                      className="lg:max-w-[244px] lg:max-h-[244px] w-fit h-fit object-fill rounded-xl "
                      width={1024}
                      height={1024}
                      src={item.imgUrl}
                      alt="contact pic"
                    />

                    <p className="text-xl lg:text-2xl font-bold px-1 py-[10.5px] galaxy-gradient-border rounded-lg absolute -top-9">
                      <span className=" bg-gray-100 dark:bg-black/60  w-full  px-4 py-1 inset-0 rounded-lg">
                        {item.text}
                      </span>
                    </p>

                    <Button
                      variant="default"
                      className="px-1 py-[10.5px] galaxy-gradient-border rounded-lg absolute -bottom-5"
                    >
                      <Link href={item.linkUrl}
                        className="bg-gray-100 dark:bg-black/60 w-fit px-4 py-1 inset-0 rounded-lg flex items-center justify-center gap-x-1 
                        text-sm text-gray-400 hover:text-gray-600 dark:hover:text-white duration-300"
                      >
                        مشاهده
                        <IconArrowNarrowLeft stroke={1.5} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </li>
            )
          }
        </ul>
      </section>


      {/* movies */}
      <section className="flex flex-col gap-y-12 lg:gap-16 my-12 lg:my-32">
        <TitleSec pageTitle="فیلم ها" pageLink="/movies" />

        <ul className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-6 lg:gap-y-12 lg:gap-x-20">
          {
            moviesSec.map((item, index) =>
              <li key={index}
                className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-4 lg:px-8 lg:py-10 flex flex-col justify-center items-center relative h-[257px] lg:h-[400px]">
                <div className="w-full h-full galaxy-gradient-half-bg rounded-xl flex justify-between items-center">
                  <Image
                    className="w-[60px] h-[60px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px] self-end mr-2 mb-6 lg:mr-6 lg:mb-4"
                    width={200}
                    height={200}
                    src={item.svgUrl}
                    alt={item.title}
                  />

                  <div className="w-fit h-full flex flex-row items-center justify-end">
                    <Image
                      className="w-[100px] h-[146px] lg:w-[180px] lg:h-[264px] rounded-lg lg:rounded-xl -translate-x-8 -translate-y-2 lg:-translate-x-8 z-[2]"
                      width={200}
                      height={200}
                      src={item.posterLink2}
                      alt="poster 2"
                    />
                    <Image
                      className="w-[100px] h-[146px] lg:w-[180px] lg:h-[264px] rounded-lg lg:rounded-xl translate-x-2 lg:translate-x-4 
                      translate-y-8 lg:translate-y-1"
                      width={200}
                      height={200}
                      src={item.posterLink1}
                      alt="poster 1"
                    />
                  </div>
                </div>

                <p className="text-xl lg:text-2xl font-bold px-1 py-[10.5px] galaxy-gradient-border rounded-lg absolute top-4 z-10">
                  <span className="bg-gray-100 dark:bg-black/60 w-full px-4 py-1 inset-0 rounded-lg">
                    {item.title}
                  </span>
                </p>

                <Link href={item.linkUrl} className="rounded-lg absolute bottom-4">
                  <Button
                    variant="default"
                    className="px-4 py-2 galaxy-gradient-bg text-white font-bold text-base"
                  >
                    مشاهده لیست
                    <IconArrowNarrowLeft stroke={1.5} className="mr-2" />
                  </Button>
                </Link>
              </li>
            )
          }
        </ul>
      </section>


      {/* about us sec */}
      <section className="w-full flex flex-col gap-y-12 lg:gap-16 my-12 lg:my-32">
        <TitleSec pageTitle="درباره فیلم فولیو" pageLink="/about-us" />

        <ul className="w-full grid grid-cols-1 gap-y-28 md:grid-cols-3 md:gap-x-8 ">

          {aboutUsSec.map((item, index) =>
            <li key={index} className="relative ">
              <div className="w-fill absolute -z-10">
                <CustomShape />
              </div>

              <h3 className="text-xl lg:text-3xl font-bold galaxy-gradient-text mt-2 mr-4 md:mt-4 md:mr-2 lg:mt-4 lg:mr-6">
                {item.title}
              </h3>
              <p className="w-fit text-sm lg:text-lg text-gray-800 dark:text-white 
              -translate-x-0 translate-y-1/4 
              md:-translate-x-[5%] md:translate-y-0 md:mt-2 
              lg:translate-x-0 lg:translate-y-1/3 lg:mt-5 lg:mx-6">
                {item.text}
              </p>
            </li>
          )}
        </ul>
      </section>

      {/* features sec */}
      <section className="w-full mt-48 mb-32">
        <h3 className="galaxy-gradient-text text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-12">ویژگی های فیلم فولیو چیه؟</h3>

        <div className="overflow-hidden w-[280px] md:w-full">
          <ul className="flex flex-row items-start gap-x-8 lg:grid lg:grid-cols-4 lg:gap-8 w-full overflow-x-scroll lg:overflow-hidden">
            {featuresSec.map((item, index) =>
              <li key={index} className="galaxy-gradient-border  rounded-xl p-1">

                <div className="w-[280px] h-[332px] p-6 flex flex-col items-center justify-center rounded-xl lg:w-auto bg-gray-200 dark:bg-gray-800">
                {item.icon}

                  <h4 className="text-xl font-bold mt-3 mb-4">{item.title}</h4>
                  <p className="text-sm lg:text-base text-gray-300">{item.text}</p>
                </div>
              </li>
            )}
          </ul>
        </div>
      </section>




    </>
  )
}

export default HomePage
