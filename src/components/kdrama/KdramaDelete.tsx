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

import { usePathname } from 'next/navigation'
import { useToast } from "../ui/use-toast"
import { Button } from "../ui/button"

import { useDeleteDrama } from "@/lib/mutations"
import { useGoogleTranslate } from "@/utilities/google-translate"








const KdramaDelete = ({ row, isOpen, onClose }: { row: any, isOpen: boolean, onClose: () => void }): JSX.Element => {
  // const KdramaDelete = ({ row }: { row: any }): JSX.Element => {
  const { mutate } = useDeleteDrama()
  const { toast } = useToast()
  const pathname = usePathname()

  const { language } = useGoogleTranslate();

  const deleteHandler = () => {
    // console.log( "row row delete ------->",row.original._id)
    // mutate({ id: row.original._id })
    // toast({ variant: "success", title: "✔ با موفقیت حذف شد" });

    mutate({ id: row.original._id }, {
      onSuccess: () => {
        toast({ variant: "success", title: "✔ با موفقیت حذف شد" });
        onClose(); // Close the dialog after successful deletion
      },
    });

  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      
      {/* <DialogTrigger asChild>
        {
          pathname === "/dashboard/kdrama-list" &&
          // <Button variant="destructive" size="sm">حذف</Button>
          <span>حذف</span>
        }
      </DialogTrigger> */}

      <DialogContent className="max-w-[280px] md:max-w-[430px]">
        <DialogHeader>
          <DialogTitle className={`mt-4 ${language === "fa" ? "rtl text-right" : "ltr"} `}>مطمئنی؟</DialogTitle>
          <DialogDescription className={` ${language === "fa" ? "rtl text-right" : "ltr"} `}>
            حواست هست که برگشت‌ نداری؟ مطمئنی که می‌خوای حذف کنی؟
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className={` ${language === "fa" ? " sm:!justify-start" : "ltr"} `}>
          <DialogClose asChild >
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

