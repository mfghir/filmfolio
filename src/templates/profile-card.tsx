import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { convertToPersianNumbers } from '@/utilities/funcs'

import { IconCrown, IconMessageCircle } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'


interface itemTypes {
  id: number;
  userPic: string;
  userName: string;
  userId: string | number;
  userComments: string | number;
  userScore: string | number;
}




const ProfileCard = ({ item }: { item: itemTypes }) => {
  return (
    <div className="w-[280px] lg:w-full flex flex-col items-center justify-center gap-y-4 p-4">

      <ul className="w-full flex justify-between items-center text-sm text-gray-400">
        <li className="flex flex-row gap-x-1 items-center">
          <span>{convertToPersianNumbers(item.userComments)}</span>
          <IconMessageCircle stroke={1.5} size={18} color="#e879f9" />
        </li>

        <li className="flex flex-row gap-x-1 items-center">
          <span>{convertToPersianNumbers(item.userScore)}</span>
          <IconCrown stroke={1.5} size={18} color="#facc15" />
        </li>
      </ul>

      {!item.userPic ?
        <Skeleton className="w-36 h-36 rounded-full" />
        :
        <Image
          width={400}
          height={400}
          src={item.userPic ? item.userPic : "https://i.postimg.cc/rpN1DtvM/uer-pic.jpg"}
          alt="userPic"
          className="w-36 h-36 rounded-full object-cover"
        />
      }

      <article className="mt-3 flex flex-col gap-y-4 items-center">
        {!item.userName ?
          <Skeleton className="w-28 h-8 bg-emerald-500" />
          :
          <h3 className="text-xl text-gray-800 dark:text-white font-bold">{item.userName}</h3>
        }
        <p className="text-base text-gray-500">{item.userId}</p>




        <Link href={`/the-best/top-users/${item.id}`} className="w-fit">
          <Button
            variant="default"
            className="w-fit py-2 px-8 font-semibold text-base text-white galaxy-gradient-bg"
          >
            مشاهده پروفایل
          </Button>
        </Link>
      </article>

    </div>
  )
}

export default ProfileCard