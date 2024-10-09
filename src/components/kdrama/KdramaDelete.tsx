import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// import { Button } from './ui/button'
// import { useToast } from "./ui/use-toast"
// import { useDeleteDrama } from '@/lib/mutations'

import { usePathname } from 'next/navigation'
import { useToast } from "../ui/use-toast"
import { Button } from "../ui/button"

import { useDeleteDrama } from "@/lib/mutations"
import { useGoogleTranslate } from "@/utilities/google-translate"

const KdramaDelete = ({ row }: { row: any }): JSX.Element => {
  const { mutate } = useDeleteDrama()
  const { toast } = useToast()
  const pathname = usePathname()

  const { language } = useGoogleTranslate();

  const deleteHandler = () => {
    console.log( "row row delete",row)
    mutate({ id: row.original.id })
    toast({ variant: "success", title: "با موفقیت حذف شد ✔" });

  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {
          pathname === "/dashboard/kdrama-list" &&
          <Button variant="destructive" size="sm">حذف</Button>
        }
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className={`mt-4 ${language === "fa" ? "rtl text-right" : "ltr"} `}>مطمئنی؟</DialogTitle>
          <DialogDescription  className={` ${language === "fa" ? "rtl text-right" : "ltr"} `}>
            حواست هست که برگشت‌ نداری؟ مطمئنی که می‌خوای حذف کنی؟
          </DialogDescription>
        </DialogHeader>

        <DialogFooter  className={` bg-purple-600 ${language === "fa" ? " sm:justify-start!" : "ltr"} `}>
          <DialogClose asChild  className={`bg-green-500 ${language === "fa" ? "  sm:justify-start" : "ltr"} `}>
            <Button variant='destructive' type="submit" onClick={deleteHandler} className="px-12">
              تایید
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog >
  )
}

export default KdramaDelete

