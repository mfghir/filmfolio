"use client"


import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast";
import { IconMessageReport } from "@tabler/icons-react"

import { useState } from "react";

interface ReportProps {
  cmId: number;
}

const Report = ({ cmId }: ReportProps) => {
  const [reportText, setReportText] = useState("");

  const handleReportSubmit = async () => {
    try {
      // در اینجا می‌توانید متن گزارش را به مدیر ارسال کنید
      // برای مثال، می‌توانید از یک API برای ارسال گزارش استفاده کنید
      // await api.post("/report", { reportText });
      console.log(`گزارش ارسال شده: ${reportText} ------------ id => ${cmId}`);

      toast({
        variant: "success",
        title: "گزارش با موفقیت ارسال شد.",
      });

    } catch (error) {
      console.error("خطا در ارسال گزارش:", error);

      toast({
        variant: "destructive",
        title: "خطا در ارسال گزارش. لطفا دوباره تلاش کنید.",
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex gap-x-1 items-center text-xs text-gray-400 cursor-pointer">
          <IconMessageReport stroke={1.5} size={18} color="#e879f9" />
          <span className="">گزارش</span>
        </div>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-white text-center">ارسال گزارش به مدیر</DialogTitle>
          {/* <DialogDescription>
            لطفا دلیل گزارش خود را به مدیران سایت اطلاع دهید.
          </DialogDescription> */}
        </DialogHeader>

        <div className="mt-4 flex flex-col gap-y-4">
          <input
            type="text"
            value={reportText}
            onChange={(e) => setReportText(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md text-right"
            placeholder="دلیل گزارش خود را وارد کنید..."
          />
          <Button
            variant="default"
            onClick={handleReportSubmit}
            className="mt-2 w-fit"
          >
            ارسال گزارش
          </Button>
        </div>
      </DialogContent>
    </Dialog>

  )
}

export default Report