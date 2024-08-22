"use client"


import ProfileCard from '@/templates/profile-card'
import FilterSelect from '@/utilities/FilterSelect'
import { usersList } from '@/utilities/types-data'
import { IconCalendar, IconListNumbers, IconMessage, IconMessages, IconSortAscending, IconSortAZ, IconStar, IconStars } from '@tabler/icons-react'
import Image from 'next/image'
import React, { useState } from 'react'

const TopUsersPage = () => {
  const [sortedUsers, setSortedUsers] = useState(usersList);

  const handleSortChange = (type: string, order: string) => {
    const sorted = [...usersList].sort((a, b) => {
      let comparison = 0;

      switch (type) {
        case 'امتیاز':
          comparison = b.userScore - a.userScore;
          break;
        case 'نظرات':
          comparison = b.userComments - a.userComments;
          break;
        case 'نام':
          comparison = b.userName.localeCompare(a.userName);
          break;
        case 'تاریخ':
          // Assuming `opDate` is a string you can parse into a Date object
          const dateA = new Date(a.opDate);
          const dateB = new Date(b.opDate);
          comparison = dateA.getTime() - dateB.getTime();
          break;
        default:
          break;
      }

      return order === 'asc' ? comparison : -comparison;
    });

    setSortedUsers(sorted);
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


      <section className="my-12">
        <div className="flex gap-y-3 md:gap-x-8 flex-wrap items-center">
          <p className="text-2xl font-bold">فیلتر براساس:</p>

          {/* <div className="flex gap-3 md:gap-x-6 flex-wrap">
            <FilterSelect
              label="امتیاز"
              icon={<IconStars stroke={1.5} size={16} />}
              onSortChange={(order) => handleSortChange('امتیاز', order)}
            />
            <FilterSelect
              label="نظرات"
              icon={<IconMessages stroke={1.5} size={16} />}
              onSortChange={(order) => handleSortChange('نظرات', order)}
            />
            <FilterSelect
              label="نام"
              icon={<IconSortAZ stroke={1.5} size={16} />}
              onSortChange={(order) => handleSortChange('نام', order)}
            />
            <FilterSelect
              label="تاریخ"
              icon={<IconCalendar stroke={1.5} size={16} />}
              onSortChange={(order) => handleSortChange('تاریخ', order)}
            />
          </div> */}




<div className="flex gap-y-3 md:gap-x-8 flex-wrap items-center">
        <p className="text-2xl font-bold">فیلتر براساس:</p>

        <div className="flex gap-3 md:gap-x-6 flex-wrap">
          <FilterSelect
            label="امتیاز"
            icon={<IconStars stroke={1.5} size={16} />}
            onSortChange={(order) => handleSortChange('امتیاز', order)}
          />
          <FilterSelect
            label="نظرات"
            icon={<IconMessages stroke={1.5} size={16} />}
            onSortChange={(order) => handleSortChange('نظرات', order)}
          />
          <FilterSelect
            label="نام"
            icon={<IconSortAZ stroke={1.5} size={16} />}
            onSortChange={(order) => handleSortChange('نام', order)}
          />
          <FilterSelect
            label="تاریخ"
            icon={<IconCalendar stroke={1.5} size={16} />}
            onSortChange={(order) => handleSortChange('تاریخ', order)}
          />
        </div>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {sortedUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div> */}
        </div>





        <div className="my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {sortedUsers.map((user: any) => (
            <div key={user.id} className="lg:w-auto bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center">
              <ProfileCard  item={user} />
            </div>
          ))}
        </div>


        {/* <div className="overflow-hidden w-[280px] md:w-full my-12">
          <ul className=" flex flex-row items-start gap-x-8 lg:grid lg:grid-cols-4 lg:gap-8 w-full overflow-x-scroll lg:overflow-hidden">
            {
              usersList.map((item) =>
                <ProfileCard item={item} />
              )}
          </ul>
        </div> */}



      </section>



    </>
  )
}

export default TopUsersPage