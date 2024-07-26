import HexagonGradientIcon from '@/utilities/HexagonGradientIcon'
import { teamMembers } from '@/utilities/types-data'
import Image from 'next/image'



const AboutUSPage = () => {
  return (
    <section>

      <section className="w-full h-full place-items-start content-between grid grid-cols-1 gap-y-6 lg:grid-cols-2">
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


      <section className="w-full h-full place-items-center grid grid-cols-1 gap-y-6 lg:grid-cols-2 my-12">
        <Image
          className="lg:w-[550px] lg:h-[550px] object-fill rounded-3xl place-self-start self-start"
          width={1024}
          height={1024}
          src="https://i.postimg.cc/V66P61kY/about-us-2.jpg"
          alt="about us pic"
        />

        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3  mt-1.5 -start-3">
              <HexagonGradientIcon sortType="" />
            </div>

            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">خرداد ۱۴۰۳</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">آغاز ماجراجویی</h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              فیلم فولیو کار خودش رو با چند نفر عاشق سینما شروع کرد. هدف اصلی‌مون این بود که
              محلی برای نقد و بررسی صادقانه فیلم‌ها بسازیم تا عاشقان فیلم بتونن اطلاعات خوبی از فیلم‌ها بگیرن.
            </p>
          </li>

          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3  mt-1.5 -start-3">
              <HexagonGradientIcon sortType="" />
            </div>

            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">تیر ۱۴۰۳</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">اضافه شدن بخش‌های جدید</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              ما بخش‌های جدیدی رو به سایت اضافه کردیم. اگه فیلمی رو دوست داری
              می‌تونی از اون فیلم‌ها لیستی بسازی و با دوستانت به اشتراک بگذاری.
            </p>
          </li>

          <li className="ms-4">
            <div className="absolute w-3 h-3  mt-1.5 -start-3">
              <HexagonGradientIcon sortType="" />
            </div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">مرداد ۱۴۰۳</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">رشد و توسعه تیم</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              تیم ما با اضافه شدن دو نفر به خود، به ۴ نفر رسید. ما با اضافه
              شدن این دو نفر، به بخش‌های مختلف سایت و بخش‌های جدیدی که اضافه کردیم، رسیدیم.
            </p>
          </li>
        </ol>
      </section>


      <section className="w-full bg-gray-100 dark:bg-gray-800">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">

          <div className="flex flex-col gap-y-3 pb-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold galaxy-gradient-text">تیم ما</h3>
            <p className="text-gray-700 dark:text-gray-400 text-base lg:w-3/4 mx-auto">
              تیم فیلم فولیو یک گروه پرانرژی و با تجربه از متخصصان سینماست که هر کدوم با مهارت‌های خاص خودشون به سایت ما کمک می‌کنن. از تحلیل‌های دقیق و نقدهای جالب تا مدیریت محتوا و پادکست‌های جذاب، ما همیشه تلاش داریم بهترین تجربه رو برای شما فراهم کنیم. با ما همراه باشید و از دیدگاه‌های متنوع و عمیق لذت ببرید!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map(item =>
              <div className="w-full bg-gray-200 dark:bg-gray-900 rounded-xl p-12 flex flex-col justify-center items-center group">
                <div className="mb-8">
                  <Image width={300} height={300}
                    className="object-center object-cover rounded-full h-36 w-36 grayscale group-hover:grayscale-0 duration-300"
                    src={item.picUrl} alt={item.name} />
                </div>

                <div className="text-center">
                  <p className="text-xl text-foreground dark:text-white font-bold mb-2">{item.name}</p>
                  <p className="text-base text-gray-400 font-normal">{item.job}</p>
                </div>
              </div>
            )}

          </div>
        </section>
      </section>

      <section className="w-full h-full place-items-center grid grid-cols-1 gap-y-6 lg:grid-cols-2 my-12">
        <Image
          className="lg:w-[550px] lg:h-[550px] object-fill rounded-3xl place-self-start self-start"
          width={1024}
          height={1024}
          src="https://i.postimg.cc/gks0yrmG/about-us-3.jpg"
          alt="about us pic"
        />



        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-white mb-20">Raw Denim Heirloom Man Braid
              <br className="hidden sm:block" />Selfies Wayfarers
            </h1>



            {/* <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6"> */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 -mb-10 -mt-4 md:space-y-0 space-y-6">

              {

              }
              <div className="p-4 flex">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                  gdsfff
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="text-white text-lg title-font font-medium mb-2">Shooting Stars</h2>
                  <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
                  <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>

             



            </div>
          </div>
        </section>


      </section>


    </section>
  )
}

export default AboutUSPage