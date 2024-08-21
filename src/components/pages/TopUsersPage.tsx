"use client"


import FilterDropdown from '@/utilities/FilterDropdown'
import { IconCalendar, IconListNumbers, IconMessage, IconMessages, IconSortAscending, IconStar, IconStars } from '@tabler/icons-react'
import Image from 'next/image'
import React, { useState } from 'react'

const TopUsersPage = () => {
  const [sortBy, setSortBy] = useState<{ label: string; order: 'asc' | 'desc' | null }>({
    label: 'نام',
    order: null,
  });

  const handleSortChange = (label: string, order: 'asc' | 'desc') => {
    setSortBy({ label, order });
    // Perform the sorting logic here, or call an API with the sort parameters
    console.log(`Sorting by ${label} in ${order} order`);
  };
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
          src="https://i.postimg.cc/634CMnBc/the-best-users.png"
          alt="the best users pic"
        />
      </section>


      <section className="">
        <div className="">
          <p className="text-2xl font-bold">فیلتر براساس:</p>
        </div>


        <div className="flex space-x-4">
      <FilterDropdown
        label="نام"
        icon={<IconListNumbers size={16} />}
        onSortChange={(order) => handleSortChange('نام', order)}
      />
      <FilterDropdown
        label="تاریخ"
        icon={<IconCalendar size={16} />}
        onSortChange={(order) => handleSortChange('تاریخ', order)}
      />
      <FilterDropdown
        label="نظرات"
        icon={<IconMessages size={16} />}
        onSortChange={(order) => handleSortChange('نظرات', order)}
      />
      <FilterDropdown
        label="امتیاز"
        icon={<IconStars size={16} />}
        onSortChange={(order) => handleSortChange('امتیاز', order)}
      />
    </div>
      </section>



    </>
  )
}

export default TopUsersPage