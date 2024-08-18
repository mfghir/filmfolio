
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { IconStar, IconThumbDown, IconThumbUp } from "@tabler/icons-react"

import { convertToPersianNumbers, gregorianToPersian } from "@/utilities/funcs"
import ModalReport from "./modal-report"





interface itemTypes {
  id: number;
  userPic: string;
  userName: string;
  userGenre: string;
  userScore: string;
  opDate: string;
  opText: string;
  like: string;
  dislike: string;
}



const CmCard = ({ item }: { item: itemTypes }) => {
  return (
    <div className="w-[280px] md:w-96">

      <article className="mt-3 flex justify-between flex-row gap-y-4">
        <ul className="flex flex-row gap-x-2">
          <li className="flex justify-between items-center gap-x-2">
            <Image
              width={400}
              height={400}
              src={item.userPic}
              alt={item.userName}
              className="w-12 h-12 rounded-full object-cover"
            />
          </li>

          <li className="flex flex-col">
            <span className="text-base text-gray-800 dark:text-white font-bold">{item.userName}</span>
            <span className="text-sm text-gray-400">طرفدار {item.userGenre}</span>
          </li>
        </ul>


        <ul className="flex flex-col gap-y-2  items-end">
          <li className="flex flex-row gap-x-1 items-center">
            <span className="text-sm text-gray-500 dark:text-gray-200">
              {convertToPersianNumbers(item.userScore)}
            </span>
            <IconStar stroke={1.5} size={18} color="#e879f9" />
          </li>

          <li className="text-xs text-gray-400">
            {/* {convertToPersianNumbers(gregorianToPersian(new Date(item.opDate)))} */}
          </li>
        </ul>
      </article>



      <p className="text-gray-800 dark:text-white text-sm my-5 line-clamp-3">
        {item.opText}
      </p>


      <article className="flex justify-between items-center">
        <Button
          variant="default"
          className="w-fit py-2 px-4 font-semibold text-base text-white galaxy-gradient-bg"
        >
          پاسخ
        </Button>

        <ul className="flex justify-center items-center gap-x-2 text-gray-400">
          <li className="flex justify-center items-center flex-row">
            <IconThumbUp stroke={1.5} color="#34d399" />
            <span>{convertToPersianNumbers(item.like)}</span>
          </li>


          <li className="flex justify-center items-center flex-row">
            <IconThumbDown stroke={1.5} color="#fb7185" />
            <span>{convertToPersianNumbers(item.dislike)}</span>
          </li>
        </ul>


        <ModalReport cmId={item.id} />
      </article>


    </div>

  )
}

export default CmCard