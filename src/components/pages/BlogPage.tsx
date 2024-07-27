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

          <div className="lg:flex lg:gap-x-8 items-stretch md:mt-12 mt-8">
            <div className="lg:w-1/2">
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 mb-6">
                <div className="sm:w-1/2 relative">
                  <>
                    <p className="p-6 text-xs font-medium leading-3 absolute top-0 right-0 z-10">۲۷ فروردین   ۱۴۰۳</p>
                    <div className="absolute bottom-0 left-0 p-6 z-10">
                      <h2 className="text-xl font-semibold text-gray-300">آخرین فیلم کریستوفر نولان به رکورد فروش جدیدی دست یافت</h2>

                      <Link href="" className="flex items-center gap-x-1 group text-gray-400 hover:text-white z-20">
                        <span className="text-sm">بیشتر</span>
                        <IconChevronLeft stroke={1.5} />
                      </Link>
                    </div>
                  </>
                  <img src="https://picsum.photos/seed/pen/1200" className="w-full brightness-50 -z-10" alt="chair" />
                </div>



                <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                  <>
                    <p className="p-6 text-xs font-medium leading-3 absolute top-0 right-0 z-10">۲۷ فروردین   ۱۴۰۳</p>
                    <div className="absolute bottom-0 left-0 p-6 z-10">
                      <h2 className="text-xl font-semibold text-gray-300">آخرین فیلم کریستوفر نولان به رکورد فروش جدیدی دست یافت</h2>

                      <Link href="" className="flex items-center gap-x-1 group text-gray-400 hover:text-white z-20">
                        <span className="text-sm">بیشتر</span>
                        <IconChevronLeft stroke={1.5} />
                      </Link>
                    </div>
                  </>
                  <img src="https://picsum.photos/seed/sky/1200" className="w-full brightness-50 -z-10" alt="chair" />
                </div>
              </div>

              <div className="relative">
                <>
                  <p className="p-6 text-xs font-medium leading-3 absolute top-0 right-0 z-10">۲۷ فروردین   ۱۴۰۳</p>
                  <div className="absolute bottom-0 left-0 p-6 z-10">
                    <h2 className="text-xl font-semibold text-gray-300 lg:w-3/4">آخرین فیلم کریستوفر نولان به رکورد فروش جدیدی دست یافت</h2>

                    <Link href="" className="flex items-center gap-x-1 group text-gray-400 hover:text-white z-20">
                      <span className="text-sm">بیشتر</span>
                      <IconChevronLeft stroke={1.5} />
                    </Link>
                  </div>
                </>
                <img src="https://picsum.photos/seed/car/1200" alt="sitting place" className="w-full sm:block hidden brightness-50" />
                <img className="w-full sm:hidden brightness-50" src="https://picsum.photos/seed/car/1200" alt="sitting place" />
              </div>
            </div>


            <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
              <div className="relative">
                <>
                  <p className="p-6 text-xs font-medium leading-3 absolute top-0 right-0 z-10">۲۷ فروردین   ۱۴۰۳</p>
                  <div className="absolute bottom-0 left-0 p-6 z-10">
                    <h2 className="text-xl font-semibold text-gray-300 lg:w-3/4">آخرین فیلم کریستوفر نولان به رکورد فروش جدیدی دست یافت</h2>

                    <Link href="" className="flex items-center gap-x-1 group text-gray-400 hover:text-white z-20">
                      <span className="text-sm">بیشتر</span>
                      <IconChevronLeft stroke={1.5} />
                    </Link>
                  </div>
                </>
                <img src="https://picsum.photos/seed/tree/1200" alt="sitting place" className="w-full sm:block hidden brightness-50" />
                <img className="w-full sm:hidden brightness-50" src="https://picsum.photos/seed/tree/1200" alt="sitting place" />
              </div>




              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                <div className="relative w-full">
                  <>
                    <p className="p-6 text-xs font-medium leading-3 absolute top-0 right-0 z-10">۲۷ فروردین   ۱۴۰۳</p>
                    <div className="absolute bottom-0 left-0 p-6 z-10">
                      <h2 className="text-xl font-semibold text-gray-300">آخرین فیلم کریستوفر نولان به رکورد فروش جدیدی دست یافت</h2>

                      <Link href="" className="flex items-center gap-x-1 group text-gray-400 hover:text-white z-20">
                        <span className="text-sm">بیشتر</span>
                        <IconChevronLeft stroke={1.5} />
                      </Link>
                    </div>
                  </>
                  <img src="https://picsum.photos/seed/star/1200" className="w-full brightness-50 -z-10" alt="chair" />
                </div>


                <div className="relative w-full sm:mt-0 mt-4">
                  <>
                    <p className="p-6 text-xs font-medium leading-3 absolute top-0 right-0 z-10">۲۷ فروردین   ۱۴۰۳</p>
                    <div className="absolute bottom-0 left-0 p-6 z-10">
                      <h2 className="text-xl font-semibold text-gray-300">آخرین فیلم کریستوفر نولان به رکورد فروش جدیدی دست یافت</h2>

                      <Link href="" className="flex items-center gap-x-1 group text-gray-400 hover:text-white z-20">
                        <span className="text-sm">بیشتر</span>
                        <IconChevronLeft stroke={1.5} />
                      </Link>
                    </div>
                  </>
                  <img src="https://picsum.photos/seed/people/1200" className="w-full brightness-50 -z-10" alt="chair" />
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>



      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-x-5 lg:gap-8
      border border-blue-600 my-12">
        {
          blogPosts.map(item =>
            <div className="bg-gray-300 dark:bg-gray-700 rounded-lg p-4">
              <img src={item.articleImg} alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />
              <div className="px-1 py-4">
                <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{item.title}</div>
                <p className="text-gray-700 dark:text-gray-300 text-base">{item.summary}</p>
              </div>
              <div className="px-1 py-4">
                <a href="#" className="text-blue-500 hover:underline">بیشتر</a>
              </div>
            </div>
          )
        }


      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border p-4">
          <img src="https://placehold.co/300x200/d1d4ff/352cb5.png" alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />
          <div className="px-1 py-4">
            <div className="font-bold text-xl mb-2">Blog Title</div>
            <p className="text-gray-700 text-base">
              This is a simple blog card example using Tailwind CSS. You can replace this text with your own blog content.
            </p>
          </div>
          <div className="px-1 py-4">
            <a href="#" className="text-blue-500 hover:underline">Read More</a>
          </div>
        </div>
      </div>

    </>
  )
}

export default BlogPage