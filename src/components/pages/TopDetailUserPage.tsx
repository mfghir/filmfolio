"use client"

import Image from "next/image"
import { useParams } from "next/navigation"
import { usersList } from "@/utilities/types-data"

import { Skeleton } from "../ui/skeleton"
import { Button } from "../ui/button"
import { IconCarambola, IconMessageCircle, IconMovie } from "@tabler/icons-react"


const TopDetailUserPage = () => {
  const { topUserId } = useParams()

  const itemId = parseInt(topUserId as string)
  const user = usersList.find(item => item.id === itemId)


  return (
    <>
      <section className="my-12 grid lg:grid-cols-3 lg:gap-x-12">
        <div className="flex flex-row items-center gap-x-8 ">
          {!user?.userPic ?
            <Skeleton className="h-full w-full" />
            :
            <Image
              className=" md:max-w-[170px] md:max-h-[170px] w-fit h-fit object-fill rounded-full "
              width={1024}
              height={1024}
              src={user?.userPic ? user?.userPic : "https://i.postimg.cc/rpN1DtvM/uer-pic.jpg"}
              alt="user pic"
            />
          }



          <ul className="flex flex-col gap-y-2">
            <li className="text-xl font-bold">{user?.userName}</li>
            <li className="text-base text-gray-500">{user?.userAge}</li>
            <li className="text-base text-gray-500">{user?.userGenre}</li>
            <li className="text-base text-gray-500">{user?.userEducation}</li>
          </ul>
        </div>




        <div className=" flex flex-col gap-y-6 mx-auto">
          <ul className="flex flex-row gap-x-4">
            <li className="flex flex-col gap-y-3 items-center">
              <p className="flex flex-row  items-center gap-x-2">
                <IconCarambola stroke={1.5} color="" />
                <span className="text-lg font-bold">امتیاز</span>
              </p>

              <span className="text-sm">{user?.userScore}</span>
            </li>


            <li className="flex flex-col gap-y-3 items-center">
              <p className="flex flex-row  items-center gap-x-2">
                <IconMessageCircle stroke={1.5} />
                <span className="text-lg font-bold">نظر ها</span>
              </p>

              <span className="text-sm">{user?.userComments}</span>
            </li>

            <li className="flex flex-col gap-y-3 items-center">
              <p className="flex flex-row  items-center gap-x-2">
                <IconMovie stroke={1.5} />
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








        <div className="">
          sdds
        </div>

      </section>




    </>
  )
}

export default TopDetailUserPage