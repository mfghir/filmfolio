import { IconChevronLeft } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"



const BlogMonth = () => {
  return (
    <section className="borderborder-blue-600 my-12 flex justify-center items-center w-full">

      <div className="2xl:mx-auto 2xl:container   ">
        <div role="main" className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-center galaxy-gradient-text">بلاگ های برتر این ماه</h1>
          <p className="text-base text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
            این ماه، فیلم فولیو کلی مقاله خفن درباره فیلم‌های جدید، انیمه‌های محبوب و تحلیل‌های جالب درباره دنیای سینما منتشر کرده. این مقالات با اطلاعات دقیق و جذابشون، حسابی توجه عاشقای فیلم و سینما رو به خودشون جلب کردن.
          </p>
        </div>

        <div className="lg:flex lg:gap-x-8 items-stretch md:mt-12 mt-8">
          <div className="lg:w-1/2">
            <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 mb-6">
              <div className="sm:w-1/2 relative">
                <>
                  <p className="p-6 text-xs text-gray-50 font-medium leading-3 absolute top-0 right-0 z-10">۲۷ فروردین   ۱۴۰۳</p>
                  <div className="absolute bottom-0 left-0 p-6 z-10">
                    <h2 className="text-xl font-semibold text-gray-300">آخرین فیلم کریستوفر نولان به رکورد فروش جدیدی دست یافت</h2>

                    <Link href="" className="flex items-center gap-x-1 group text-gray-400 hover:text-white z-20">
                      <span className="text-sm">بیشتر</span>
                      <IconChevronLeft stroke={1.5} />
                    </Link>
                  </div>
                </>
                <Image width={800} height={800} src="https://picsum.photos/seed/pen/1200" className="w-full brightness-50 rounded-xl -z-10" alt="chair" />
              </div>



              <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                <>
                  <p className="p-6 text-xs text-gray-50 font-medium leading-3 absolute top-0 right-0 z-10">۱۷ تیر   ۱۴۰۳</p>
                  <div className="absolute bottom-0 left-0 p-6 z-10">
                    <h2 className="text-xl font-semibold text-gray-300">بررسی عملکرد بازیگران در جشنواره فیلم کن</h2>

                    <Link href="" className="flex items-center gap-x-1 group text-gray-400 hover:text-white z-20">
                      <span className="text-sm">بیشتر</span>
                      <IconChevronLeft stroke={1.5} />
                    </Link>
                  </div>
                </>
                <Image width={800} height={800} src="https://picsum.photos/seed/sky/1200" className="w-full brightness-50 rounded-xl -z-10" alt="chair" />
              </div>
            </div>

            <div className="relative">
              <>
                <p className="p-6 text-xs text-gray-50 font-medium leading-3 absolute top-0 right-0 z-10">۰۷ فروردین   ۱۴۰۳</p>
                <div className="absolute bottom-0 left-0 p-6 z-10">
                  <h2 className="text-xl font-semibold text-gray-300 lg:w-3/4">معرفی بهترین فیلم‌های علمی-تخیلی سال</h2>

                  <Link href="" className="flex items-center gap-x-1 group text-gray-400 hover:text-white z-20">
                    <span className="text-sm">بیشتر</span>
                    <IconChevronLeft stroke={1.5} />
                  </Link>
                </div>
              </>
              <Image width={800} height={800} src="https://picsum.photos/seed/car/1200" alt="sitting place" className="w-full sm:block hidden brightness-50 rounded-xl" />
              <Image width={800} height={800} className="w-full sm:hidden brightness-50 rounded-xl" src="https://picsum.photos/seed/car/1200" alt="sitting place" />
            </div>
          </div>


          <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
            <div className="relative">
              <>
                <p className="p-6 text-xs text-gray-50 font-medium leading-3 absolute top-0 right-0 z-10">۰۷ مرداد   ۱۴۰۳</p>
                <div className="absolute bottom-0 left-0 p-6 z-10">
                  <h2 className="text-xl font-semibold text-gray-300 lg:w-3/4">مصاحبه اختصاصی با کارگردان برنده اسکار</h2>

                  <Link href="" className="flex items-center gap-x-1 group text-gray-400 hover:text-white z-20">
                    <span className="text-sm">بیشتر</span>
                    <IconChevronLeft stroke={1.5} />
                  </Link>
                </div>
              </>
              <Image width={800} height={800} src="https://picsum.photos/seed/tree/1200" alt="sitting place" className="w-full sm:block hidden brightness-50 rounded-xl" />
              <Image width={800} height={800} className="w-full sm:hidden brightness-50 rounded-xl" src="https://picsum.photos/seed/tree/1200" alt="sitting place" />
            </div>




            <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
              <div className="relative w-full">
                <>
                  <p className="p-6 text-xs text-gray-50 font-medium leading-3 absolute top-0 right-0 z-10">۱۴ اردیبهشت   ۱۴۰۳</p>
                  <div className="absolute bottom-0 left-0 p-6 z-10">
                    <h2 className="text-xl font-semibold text-gray-300">نگاهی به زندگی و آثار لئوناردو دی‌کاپریو</h2>

                    <Link href="" className="flex items-center gap-x-1 group text-gray-400 hover:text-white z-20">
                      <span className="text-sm">بیشتر</span>
                      <IconChevronLeft stroke={1.5} />
                    </Link>
                  </div>
                </>
                <Image width={800} height={800} src="https://picsum.photos/seed/star/1200" className="w-full brightness-50 rounded-xl -z-10" alt="chair" />
              </div>


              <div className="relative w-full sm:mt-0 mt-4">
                <>
                  <p className="p-6 text-xs text-gray-50 font-medium leading-3 absolute top-0 right-0 z-10">۲۱ خرداد   ۱۴۰۳</p>
                  <div className="absolute bottom-0 left-0 p-6 z-10">
                    <h2 className="text-xl font-semibold text-gray-300">پیش‌بینی اسکار 2025: چه فیلم‌هایی شانس بیشتری دارند؟</h2>

                    <Link href="" className="flex items-center gap-x-1 group text-gray-400 hover:text-white z-20">
                      <span className="text-sm">بیشتر</span>
                      <IconChevronLeft stroke={1.5} />
                    </Link>
                  </div>
                </>
                <Image width={800} height={800} src="https://picsum.photos/seed/people/1200" className="w-full brightness-50 rounded-xl -z-10" alt="chair" />
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}

export default BlogMonth