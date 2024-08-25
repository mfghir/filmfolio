"use client"

import Image from "next/image"
import { useParams } from "next/navigation"
import { usersList } from "@/utilities/types-data"

import { Skeleton } from "../ui/skeleton"
import { Button } from "../ui/button"
import { IconCarambola, IconMessageCircle, IconMovie, IconPlus, IconUsersGroup, IconUsersPlus } from "@tabler/icons-react"
import { ShareBtn } from "@/templates/share-btn"



const TopDetailUserPage = () => {
  const { topUserId } = useParams()

  const itemId = parseInt(topUserId as string)
  const user = usersList.find(item => item.id === itemId)


  return (
    <>

      <div className="absolute left-6 top-40 md:left-8 md:top-32 lg:left-20 lg:top-28">
        <ShareBtn />
      </div>


      <section className="my-12 grid gap-y-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 bg-gray-200 dark:bg-gray-800 py-6 md:p-6 rounded-xl items-center place-items-center">
        <div className="flex flex-col md:flex-row justify-center md:justify-normal items-center gap-x-8 gap-y-3 md:gap-y-0 md:col-span-2 lg:col-span-1">
          {!user?.userPic ?
            <Skeleton className="h-full w-full" />
            :
            <Image
              className="w-28 h-28 md:max-w-[170px] md:max-h-[170px] object-fill rounded-full "
              width={1024}
              height={1024}
              src={user?.userPic ? user?.userPic : "https://i.postimg.cc/rpN1DtvM/uer-pic.jpg"}
              alt="user pic"
            />
          }


          <ul className="flex flex-col gap-y-2">
            <li className="text-xl font-bold">{user?.userName}</li>
            <li className="text-base text-gray-500">{user?.userAge} ساله</li>
            <li className="text-base text-gray-500">طرفدار {user?.userGenre}</li>
            <li className="text-base text-gray-500">{user?.userEducation}</li>
          </ul>
        </div>




        <div className=" flex flex-col items-center gap-y-6 mx-auto">
          <ul className="flex flex-row gap-x-4">
            <li className="flex flex-col gap-y-3 items-center">
              <p className="flex flex-row flex-nowrap items-center gap-x-2">
                <IconCarambola stroke={1.5} color="#bfbfbf" />
                <span className="text-lg font-bold">امتیاز</span>
              </p>

              <span className="text-sm">{user?.userScore}</span>
            </li>

            <li className="flex flex-col gap-y-3 items-center">
              <p className="flex flex-row flex-nowrap items-center gap-x-2">
                <IconMessageCircle stroke={1.5} color="#bfbfbf" />
                <span className="text-lg font-bold">نظر ها</span>
              </p>

              <span className="text-sm">{user?.userComments}</span>
            </li>

            <li className="flex flex-col gap-y-3 items-center">
              <p className="flex flex-row flex-nowrap items-center gap-x-2">
                <IconMovie stroke={1.5} color="#bfbfbf" />
                <span className="text-lg font-bold">فیلم ها</span>
              </p>

              <span className="text-sm">{user?.filmsWatched}</span>
            </li>
          </ul>

          <Button
            variant="default"
            className="w-fit py-2 px-12 font-semibold text-base text-white galaxy-gradient-bg"
          >
            دادن امتیاز
          </Button>
        </div>



        <div className=" flex flex-col gap-y-4 lg:gap-y-6 mx-auto">
          <p className="text-lg font-bold text-center">ID: {user?.userId}</p>

          <ul className="flex flex-col gap-y-3">
            <li className="flex flex-row justify-between items-center">
              <p className="flex flex-row  items-center gap-x-1">

                <IconUsersGroup stroke={1.5} color="#bfbfbf" />
                <span className="text-lg font-bold">دنبال شونده</span>
              </p>

              <span className="text-sm">{user?.followers}</span>
            </li>

            <li className="flex flex-row justify-between items-center">
              <p className="flex flex-row items-center gap-x-1">

                <IconUsersPlus stroke={1.5} color="#bfbfbf" />
                <span className="text-lg font-bold">دنبال کننده</span>
              </p>

              <span className="text-sm">{user?.followings}</span>
            </li>
          </ul>


          <Button
            variant="default"
            className="w-fit py-2 px-12 font-semibold text-base text-white galaxy-gradient-bg"
          >
            <IconPlus stroke={1.5} />
            دنبال کردن
          </Button>
        </div>
      </section>




    </>
  )
}

export default TopDetailUserPage