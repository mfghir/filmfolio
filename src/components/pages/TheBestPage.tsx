import Image from 'next/image'
import React from 'react'

export const TheBestPage = () => {
  return (
    <>

      <section className="w-full h-full place-items-start content-between grid grid-cols-1 gap-y-6 lg:grid-cols-2">
        <div className="flex flex-col gap-y-3">
          <h3 className="text-2xl lg:text-3xl font-bold galaxy-gradient-text">برترین ها</h3>
          <p className="text-gray-700 dark:text-gray-400 text-base lg:text-lg">
            به صفحه &quot;برترین‌ها&quot; در فیلم فولیو خوش اومدید!
            تو این بخش، شما می‌تونید به برترین‌ های دنیای فیلم و سریال ،
             از نگاه کاربران ما دسترسی پیدا کنید. این صفحه با
              هدف نمایش بهترین‌های جامعه فیلم فولیو طراحی شده تا شما رو با نقدهای ارزشمند، کاربران فعال و فیلم‌های محبوب آشنا کنه.
          </p>

       
        
          {/* <Link href="/contact">
            <Button
              variant="default"
              className="w-full md:w-fit py-2 px-12 font-semibold text-base text-white galaxy-gradient-bg"
            >
              برامون پیام بفرست!
            </Button>
          </Link> */}
        </div>

        <Image
          className="lg:max-w-[550px] lg:max-h-[550px] w-fit h-fit object-fill rounded-3xl place-self-end self-start"
          width={1024}
          height={1024}
          src="https://i.postimg.cc/VNwGw6Cr/about-us-1.jpg"
          alt="about us pic"
        />
      </section>

    </>
  )
}
