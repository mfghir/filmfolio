import Image from 'next/image'
import React from 'react'

const TopUsersPage = () => {
  return (
    <>
      <section className="w-full h-full  place-items-center lg:place-items-start content-between grid grid-cols-1 gap-y-6 lg:grid-cols-2">
        <div className="flex flex-col gap-y-3 lg:mt-12">
          <h3 className="text-2xl lg:text-3xl font-bold galaxy-gradient-text">برترین کاربران</h3>
          <p className="text-gray-700 dark:text-gray-400 text-base lg:text-lg">
            به صفحه &quot;برترین کاربران&quot; فیلم فولیو خوش اومدید!
            در اینجا می‌تونید با برجسته‌ترین اعضای جامعه ما که با نظرات و نقدهای ارزشمند
            خودشون به ارتقاء تجربه سینمایی دیگر کاربران کمک کرده اند، آشنا بشید. این کاربران با فعالیت‌های مستمر و مشارکت‌های مؤثرشون،
            به عنوان ستون‌های اصلی فیلم فولیو شناخته شده‌اند. بیایید با برترین فیلم‌بازان ما آشنا بشیم و از دیدگاه‌های آن‌ها بهره‌مند بشیم.
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






    </>
  )
}

export default TopUsersPage