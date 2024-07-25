import Image from 'next/image'



const AboutUSPage = () => {
  return (
    <section>

      <section className="w-full h-full place-items-start grid grid-cols-1 gap-y-6 lg:grid-cols-2">
        <div className="flex flex-col gap-y-3">
          <h3 className="text-2xl lg:text-3xl font-bold galaxy-gradient-text">درباره ما</h3>
          <p className="text-gray-700 dark:text-gray-400 text-base">
            فیلم فولیو یه جاییه برای همه عاشقان فیلم و سینما. ایده این پلتفرم از دل نیازهای واقعی فیلم‌بازها بیرون اومده؛ اونایی که وقتی یکی ازشون لیست فیلم‌هایی که دیدن رو می‌خواد، تعداد زیاد فیلم‌ها و تحلیل‌های مختلف کار رو براشون سخت می‌کنه. اینجا ما فضایی رو فراهم کردیم تا هر کسی بتونه به راحتی لیست فیلم‌هایی که دیده رو ثبت کنه و نظرش رو درباره هر فیلم به اشتراک بذاره.
          </p>

          <p className="text-gray-700 dark:text-gray-400 text-base">
            ما معتقدیم که تبادل نظرات و تجربیات درباره‌ی فیلم‌ها می‌تونه به همه کمک کنه تا فیلم‌های بهتری پیدا کنن و از دیدن فیلم‌ها بیشتر لذت ببرن. تیم ما، با شور و علاقه فراوان، تلاش می‌کنه تا بهترین تجربه کاربری رو برای شما فراهم کنه. از طراحی تا توسعه و پشتیبانی، ما اینجا هستیم تا هر قدم همراه شما باشیم و مطمئن شیم که هر بازدید شما از فیلم فولیو، تجربه‌ای لذت‌بخش و مفید باشه.

          </p>
        </div>

        <Image
          className="lg:w-[550px] lg:h-[550px] object-fill rounded-3xl place-self-end self-start"
          width={1024}
          height={1024}
          src="https://i.postimg.cc/VNwGw6Cr/about-us-1.jpg"
          alt="about us pic"
        />
      </section>


      <section className="w-full h-full place-items-start grid grid-cols-1 gap-y-6 lg:grid-cols-2">


        {/* <section className="border border-blue-500 w-full h-96 my-12 lg:w-1/2"> */}

        <Image
          className="lg:w-[550px] lg:h-[550px] object-fill rounded-3xl place-self-end self-start"
          width={1024}
          height={1024}
          src="https://i.postimg.cc/VNwGw6Cr/about-us-1.jpg"
          alt="about us pic"
        />

        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">خرداد 1401</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">عنوان تستی اول</h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
            </p>

            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
            </a>
          </li>

          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">اردیبهشت 1403</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">عنوان تستی  دوم</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.
            </p>
          </li>

          <li className="ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">مهر 1402</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">عنوان تستی سوم</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
            </p>
          </li>
        </ol>




      </section>
    </section>
  )
}

export default AboutUSPage