
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast";
import { IconInfoCircle, IconMessageReport } from "@tabler/icons-react"
import Image from "next/image";
import { Calendar, Clock, Star } from "lucide-react";
import { convertToPersianNumbers } from "@/utilities/funcs";


// interface itemsType {
//   id: number;
//   title: string;
//   moviePic: string;
//   comments: string;
//   score: string;
// }


const ModalMovieDetails = ({ item }: { item: any }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="ghost" size="icon" className="text-gray-500">
          <IconInfoCircle stroke={1.5} />
        </Button>

      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-white text-center">{item.title}</DialogTitle>
          {/* <DialogDescription>
          لطفا دلیل گزارش خود را به مدیران سایت اطلاع دهید.
        </DialogDescription> */}
        </DialogHeader>

        <div className="mt-4 flex flex-col gap-y-4">

          <Image

            // https://media.themoviedb.org/t/p/w440_and_h660_face/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg
            width={400}
            height={400}
            // src={`https://api.themoviedb.org/3/movie/${item.id}/images/2`}
            src={"https://media.themoviedb.org/t/p/w500" + item.backdrop_path}
            alt="moviePic"
            className="w-44 h-48 object-cover rounded-lg border-gray-500"
          />

          <ul className="flex justify-between items-center my-3">
            <li className="text-sm flex justify-center gap-x-2">
              {convertToPersianNumbers(item.vote_average)}
              <Star size={18} color="#6b7280" />
            </li>
            <li className="text-sm flex justify-center gap-x-2">
              {convertToPersianNumbers(item.release_date)}
              <Calendar size={18} color="#6b7280" />
            </li>
          <li className="text-sm flex justify-center gap-x-2">
            {convertToPersianNumbers(item.popularity)}
            <Clock size={18} color="#6b7280" />
          </li>
          {/* <li className="text-sm flex justify-center gap-x-2">
            {item.genres.map((genre) => (
              <span key={genre.id} className="text-gray-500">
                {genre.name} |
              </span>
            ))}
          </li> */}
          </ul>

          <p className="">{item.overview}</p>



          <Button
            variant="default"
            className="mt-2 w-fit"
          >
            ارسال گزارش
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ModalMovieDetails