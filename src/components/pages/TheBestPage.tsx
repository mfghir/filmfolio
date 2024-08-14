"use client"

import Image from 'next/image'
import Link from 'next/link'
import { IconCrown, IconMessageCircle } from '@tabler/icons-react'

import { convertToPersianNumbers, gregorianToPersian } from '@/utilities/funcs'
import { theBestUSersList, topOpinionsList } from '@/utilities/types-data'
import TitleSec from '@/utilities/title-sec'

import { Button } from '../ui/button'


export const TheBestPage = () => {
  let options = { year: 'numeric', month: 'long', day: 'numeric' };


  return (
    <>
      <section className="w-full h-full  place-items-center lg:place-items-start content-between grid grid-cols-1 gap-y-6 lg:grid-cols-2">
        <div className="flex flex-col gap-y-3 mt-12">
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

            {theBestUSersList.slice(0, 4).map((item) =>
              <li key={item.id}
                className="lg:w-auto bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center"
              >
                <div className="w-[280px] lg:w-full flex flex-col items-center justify-center gap-y-4 p-4">

                  <ul className="w-full flex justify-between items-center">
                    <li className="flex flex-row gap-x-1 items-center">
                      <span className="text-xs text-gray-400">
                        {convertToPersianNumbers(item.userComments)}
                      </span>
                      <IconMessageCircle stroke={1.5} size={18} color="#e879f9" />
                    </li>

                    <li className="flex flex-row gap-x-1 items-center">
                      <span className="text-xs text-gray-400">
                        {convertToPersianNumbers(item.userScore)}
                      </span>
                      <IconCrown stroke={1.5} size={18} color="#facc15" />
                    </li>
                  </ul>

                  <Image
                    width={400}
                    height={400}
                    src={item.userPic}
                    alt="userPic"
                    className="w-36 h-36 rounded-full object-cover"
                  />


                  <article className="mt-3 flex flex-col gap-y-4 items-center">
                    <h3 className="text-xl text-gray-800 dark:text-white font-bold">{item.userName}</h3>
                    <p className="text-base text-gray-500">{item.userId}</p>




                    <Link href={`/the-best/top-users/${item.id}`} className="w-fit">
                      <Button
                        variant="default"
                        className="w-fit py-2 px-12 font-semibold text-base text-white galaxy-gradient-bg"
                      >
                        مشاهده پروفایل
                      </Button>
                    </Link>
                  </article>

                </div>

              </li>
            )
            }
          </ul>
        </div>
      </section>



      {/* the best opinions sec */}
      <section className="flex flex-col gap-y-12 my-12 lg:my-32">
        <TitleSec pageTitle="برترین نظرات" pageLink="/the-best/top-opinions" />

        <div className="overflow-hidden w-[280px] md:w-full">
          <ul className=" flex flex-row items-start gap-x-8 lg:grid lg:grid-cols-4 lg:gap-8 w-full overflow-x-scroll lg:overflow-hidden">

            {topOpinionsList.slice(0, 4).map((item) =>
              <li key={item.id}
                className="lg:w-auto bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-4"
              >
                <div className="w-[280px]">
                  <Image
                    width={400}
                    height={400}
                    src={item.userPic}
                    alt="Placeholder Image"
                    className="w-full h-48 rounded-md object-cover"
                  />

                  <article className="mt-3 flex flex-col  gap-y-4">
                    <div className="flex flex-row gap-x-2">
                   { gregorianToPersian(item.opDate)}
                    </div>

                    <div className="h-full flex flex-col gap-y-2">
                      <div className="w-full font-bold text-xl mb-2 text-gray-900 dark:text-white line-clamp-1">{item.title}</div>
                      <p className="text-gray-700 dark:text-gray-300 text-base line-clamp-2">{item.summary}</p>
                    </div>

                    <div className="flex justify-between items-center ">
                      <div className="flex justify-between items-center gap-x-2">
                        <Image
                          width={400}
                          height={400}
                          src={item.userPic}
                          alt={item.userName}
                          className="w-9 h-9 rounded-full object-cover"
                        />
                        <span className="text-sm text-gray-400">{item.userName}</span>
                      </div>

                      <Link href={`/blog/${item.id}`}
                        className="flex items-center gap-x-1 text-xs text-gray-700 hover:text-gray-400 dark:text-gray-500 dark:hover:text-white duration-300">
                        ادامه
                        {/* <IconChevronLeft stroke={1.5} size={18} /> */}
                      </Link>
                    </div>
                  </article>

                </div>

              </li>
            )
            }
          </ul>
        </div>
      </section>
    </>
  )
}
