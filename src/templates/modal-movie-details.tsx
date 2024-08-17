
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
          <DialogTitle className="text-white text-center">{item.Title}</DialogTitle>
          {/* <DialogDescription>
          لطفا دلیل گزارش خود را به مدیران سایت اطلاع دهید.
        </DialogDescription> */}
        </DialogHeader>

        <div className="mt-4 flex flex-col gap-y-4">
          

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