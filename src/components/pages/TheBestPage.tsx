"use client"

import Image from 'next/image'
import Link from 'next/link'
import { IconCrown, IconHeart, IconInfoCircle, IconMessageCircle, IconMessageReport, IconStar, IconThumbDown, IconThumbUp } from '@tabler/icons-react'

import { convertToPersianNumbers, gregorianToPersian } from '@/utilities/funcs'
import { theBestUSersList, topMoviesList, topOpinionsList } from '@/utilities/types-data'
import TitleSec from '@/utilities/title-sec'

import { Button } from '../ui/button'
import Report from '@/utilities/report'
import CmCard from '@/templates/cm-card'
import ProfileCard from '@/templates/profile-card'


export const TheBestPage = () => {


  return (
    <>
      <section className="w-full h-full  place-items-center lg:place-items-start content-between grid grid-cols-1 gap-y-6 lg:grid-cols-2">
        <div className="flex flex-col gap-y-3 lg:mt-12">
          <h3 className="text-2xl lg:text-3xl font-bold galaxy-gradient-text">برترین ها</h3>
          <p className="text-gray-700 dark:text-gray-400 text-base lg:text-lg">
            به صفحه &quot;برترین‌ها&quot; در فیلم فولیو خوش اومدید!
            تو این بخش، شما می‌تونید به برترین‌ های دنیای فیلم و سریال ، از نگاه کاربران ما دسترسی پیدا کنید. این صفحه با
            هدف نمایش بهترین‌های جامعه فیلم فولیو طراحی شده تا شما رو با نقدهای ارزشمند، کاربران فعال و فیلم‌های محبوب آشنا کنه.
          </p>
        </div>

        <Image
          className=" md:max-w-[450px] md:max-h-[450px] w-fit h-fit object-fill rounded-3xl self-center lg:place-self-end lg:self-start"
          width={1024}
          height={1024}
          src="https://i.postimg.cc/N0H54xCQ/the-best.jpg"
          alt="the best pic"
        />
      </section>



      {/* the best users sec */}
      <section className="flex flex-col gap-y-12 my-12 lg:my-32">
        <TitleSec pageTitle="برترین کاربران" pageLink="/the-best/top-users" />

        <div className="overflow-hidden w-[280px] md:w-full">
          <ul className=" flex flex-row items-start gap-x-8 lg:grid lg:grid-cols-4 lg:gap-8 w-full overflow-x-scroll lg:overflow-hidden">
            {
              theBestUSersList.slice(0, 4).map((item) =>
                <li key={item.id} className="lg:w-auto bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center">
                  <ProfileCard item={item} />
                </li>
              )}
          </ul>
        </div>
      </section>


      {/* the best opinions sec */}
      <section className="flex flex-col gap-y-12 my-12 lg:my-32">
        <TitleSec pageTitle="برترین نظرات" pageLink="/the-best/top-opinions" />

        <div className="overflow-hidden w-[280px] md:w-full">
          <ul className=" flex flex-row items-start gap-x-8 lg:grid lg:grid-cols-3 lg:gap-8 w-full overflow-x-scroll lg:overflow-hidden">
            {
              topOpinionsList.slice(0, 3).map((item) =>
                <li key={item.id} className="lg:w-auto bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <CmCard item={item} />
                </li>
              )}
          </ul>
        </div>
      </section>


      {/* the best movies sec */}
      <section className="flex flex-col gap-y-12 my-12 lg:my-32">
        <TitleSec pageTitle="برترین فیلم ها" pageLink="/the-best/top-movies" />

        <div className="overflow-hidden w-[280px] md:w-full">
          <ul className=" flex flex-row items-start gap-x-8 lg:grid lg:grid-cols-4 lg:gap-8 w-full overflow-x-scroll lg:overflow-hidden">
            {
              topMoviesList.slice(0, 5).map((item) =>
                <li key={item.id} className="lg:w-auto bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center">
                  <div className="w-[280px] lg:w-full flex flex-col items-center justify-center gap-y-4 p-4">

                    <Image
                      width={400}
                      height={400}
                      src={item.moviePic}
                      alt="moviePic"
                      className="w-full h-48 object-cover"
                    />


                    <ul className="w-full flex justify-between items-center text-sm text-gray-400">
                      <li className="flex flex-row gap-x-1 items-center ">
                        <span>{convertToPersianNumbers(item.comments)}</span>
                        <IconMessageCircle stroke={1.5} size={18} color="#e879f9" />
                      </li>

                      <li className="flex flex-row gap-x-1 items-center">
                        <span>{convertToPersianNumbers(item.score)}</span>
                        <IconStar stroke={1.5} size={18} color="#facc15" />
                      </li>
                    </ul>


                    <h4 className="text-lg font-bold">{item.title}</h4>



                    <div className="flex justify-between items-center">
                      <Button variant="ghost" size="icon">
                        <IconInfoCircle stroke={1.5} />
                      </Button>

                      <Button
                        variant="default"
                        className="w-fit py-2 px-4 font-semibold text-base text-white galaxy-gradient-bg"
                      >
                        مشاهده
                      </Button>

                      <Button variant="ghost" size="icon" className="w-fit h-fit bg-red-600">
                        <IconHeart stroke={1.5} />
                      </Button>

                    </div>

                  </div>
                </li>
              )}
          </ul>
        </div>
      </section>
    </>
  )
}
