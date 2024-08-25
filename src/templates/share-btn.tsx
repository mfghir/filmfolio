"use client"


import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

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
import { toast } from "@/components/ui/use-toast"

import { Copy } from "lucide-react"
import { IconShare } from "@tabler/icons-react"
import { useGoogleTranslate } from "@/utilities/google-translate"


export function ShareBtn() {
  const { language } = useGoogleTranslate();

  const copyHandler = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      variant: "success",
      title: "در کلیپبور ذخیره شد",
    })
  }



  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <IconShare stroke={1.5} />
        </Button>
      </DialogTrigger>


      <DialogContent className={`w-full  `}>
        <DialogHeader className={`w-full ${language === "fa" ? "flex flex-col items-start flex-reverse mt-10" : ""}`} >
          <DialogTitle>لینک به اشتراک گذاری</DialogTitle>
          <DialogDescription>
            هرکسی که این لینک رو داره، میتونه این صفحه رو ببینه
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center gap-x-4 space-x-2 w-full">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              className={language === "fa" ? "text-end " : ""}
              id="link"
              defaultValue={window.location.href}
              readOnly
            />
          </div>

          <Button type="submit" size="sm" className="px-3"
            onClick={() => copyHandler(window.location.href)}
          >
            <span className="sr-only">کپی</span>
            <Copy className="h-4 w-4" />
          </Button>
        </div>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              بستن
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
