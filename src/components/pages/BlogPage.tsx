import { blogPosts } from "@/utilities/types-data"
import { IconChevronLeft } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"


const BlogPage = () => {
  return (
    <>
      <section className="w-full h-full place-items-start content-between grid grid-cols-1 gap-y-6 lg:grid-cols-2">
        <div className="flex flex-col gap-y-3">
          <h3 className="text-2xl lg:text-3xl font-bold galaxy-gradient-text">وبلاگ</h3>
          <p className="text-gray-700 dark:text-gray-400 text-base">
            صفحه بلاگ فیلم فولیو جاییه که شما عاشقان فیلم و سینما می‌تونید به جدیدترین اخبار، نقدها و مقالات تحلیلی دسترسی داشته باشید.
            اینجا یه مجموعه مطالب متنوع داریم که درباره آخرین رویدادها و تحولات دنیای سینما براتون می‌نویسیم.
            از نقد و بررسی فیلم‌های جدید گرفته تا معرفی بازیگران و کارگردانان مطرح، همه و همه اینجا منتظرتونه.
          </p>

          <p className="text-gray-700 dark:text-gray-400 text-base">
            یکی از بخش‌های مهم بلاگ، نقد و بررسی فیلم‌هاس
            ت. تو این بخش، تیم حرفه‌ای ما با تحلیل‌های دقیق و جزئیات فراوان، فیلم‌های تازه اکران شده
            رو زیر ذره‌بین می‌برن. نقدهایی که به بررسی نقاط قوت و ضعف هر فیلم می‌پردازن و بهتون کمک می‌کنن با دیدی بازتر
            و آگاهانه‌تر به تماشای فیلم‌ها بشینید. این نقدها شامل تحلیل بازیگری، کارگردانی، فیلمنامه و جلوه‌های ویژه میشن.
          </p>

          <p className="text-gray-700 dark:text-gray-400 text-base">
            بخش دیگه بلاگ، اخبار دنیای سینماست. اینجا می‌تونید از آخرین خبرها و رویدادهای مهم در صنعت فیلمسازی مطلع بشید.
            از اخبار جشنواره‌ها و جوایز گرفته تا پروژه‌های جدید و تغییرات توی ترکیب بازیگران و عوامل فیلم‌ها،
            همه رو پوشش میدیم. این اخبار به‌روز و دقیق بهتون کمک می‌کنه همیشه در جریان آخرین تحولات باشید.
          </p>

          <p className="text-gray-700 dark:text-gray-400 text-base">
            یکی از جذاب‌ترین بخش‌های بلاگ، مقالات تحلیلی و ویژه‌ست. این مقالات به موضوعات خاص و جذاب در دنیای سینما می‌پردازن،
            مثل تحلیل روندهای جدید فیلمسازی، معرفی تکنولوژی‌های نوین و بررسی عملکرد بازیگران و کارگردانان مشهور.
            این مقالات با نگاه جامع و عمیقشون، بهتون کمک می‌کنن دانش و بینش بیشتری درباره دنیای سینما پیدا کنید.
          </p>


        </div>

        <Image
          className="lg:max-w-[550px] lg:max-h-[550px] w-fit h-fit object-fill rounded-3xl place-self-end self-start"
          width={1024}
          height={1024}
          src="https://i.postimg.cc/NFZt4LVQ/blog.jpg"
          alt="blog pic"
        />
      </section>



      <section className="borderborder-blue-600 my-12 flex justify-center items-center w-full">

        <div className="2xl:mx-auto 2xl:container   ">
          <div role="main" className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">This Week Blogs</h1>
            <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
          </div>

          <div className="lg:flex lg:gap-x-10 items-stretch md:mt-12 mt-8">
            <div className="lg:w-1/2">
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                <div className="sm:w-1/2 relative">
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 absolute top-0 right-0 z-10">۲۷ فروردین   ۱۴۰۳</p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">آخرین فیلم کریستوفر نولان به رکورد فروش جدیدی دست یافت</h2>

                      <Link href="" className="flex items-center gap-x-1 group text-gray-400 hover:text-white z-20">
                        <span className="text-sm">بیشتر</span>
                        <IconChevronLeft stroke={1.5} />
                      </Link>
                    </div>
                  </div>
                  <img src="https://picsum.photos/seed/galaxy/1200" className="w-full brightness-50" alt="chair" />
                </div>



                <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                      <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                      <Link href="">

                        <p className="pr-2 text-sm font-medium leading-none">بیشتر</p>
                        <IconChevronLeft stroke={1.5} />

                      </Link>
                    </div>
                  </div>
                  <img src="https://i.ibb.co/3C5HvxC/img-2.png" className="w-full" alt="wall design" />
                </div>
              </div>
              <div className="relative">
                <div>
                  <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                  <div className="absolute bottom-0 left-0 md:p-10 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                    <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                    <Link href="">

                      <p className="pr-2 text-sm font-medium leading-none">بیشتر</p>
                      <IconChevronLeft stroke={1.5} />

                    </Link>
                  </div>
                </div>
                <img src="https://i.ibb.co/Ms4qyXp/img-3.png" alt="sitting place" className="w-full mt-8 md:mt-6 hidden sm:block" />
                <img className="w-full mt-4 sm:hidden" src="https://i.ibb.co/6XYbN7f/Rectangle-29.png" alt="sitting place" />
              </div>
            </div>
            <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
              <div className="relative">
                <div>
                  <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                  <div className="absolute bottom-0 left-0 md:p-10 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                    <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                    <Link href="">

                      <p className="pr-2 text-sm font-medium leading-none">بیشتر</p>
                      <IconChevronLeft stroke={1.5} />

                    </Link>
                  </div>
                </div>
                <img src="https://i.ibb.co/6Wfjf2w/img-4.png" alt="sitting place" className="w-full sm:block hidden" />
                <img className="w-full sm:hidden" src="https://i.ibb.co/dpXStJk/Rectangle-29.png" alt="sitting place" />
              </div>
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                <div className="relative w-full">
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                      <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                      <Link href="">

                        <p className="pr-2 text-sm font-medium leading-none">بیشتر</p>
                        <IconChevronLeft stroke={1.5} />

                      </Link>
                    </div>
                  </div>
                  <img src="https://i.ibb.co/3yvZBpm/img-5.png" className="w-full" alt="chair" />
                </div>
                <div className="relative w-full sm:mt-0 mt-4">
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                      <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                      <Link href="">

                        <p className="pr-2 text-sm font-medium leading-none">بیشتر</p>
                        <IconChevronLeft stroke={1.5} />

                      </Link>
                    </div>
                  </div>
                  <img src="https://i.ibb.co/gDdnJb5/img-6.png" className="w-full" alt="wall design" />
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>



      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-x-5 lg:gap-x-8
      border border-blue-600 my-12">
        {
          blogPosts.map(item =>
            <div className="">
              {item.title}
            </div>
          )
        }
      </section>


    </>
  )
}

export default BlogPage