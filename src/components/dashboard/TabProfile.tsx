"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import axios from "axios"
import { signOut } from "next-auth/react"
import type { UserInfo } from "@/lib/data"

import { Button } from "../ui/button"
import { toast } from "../ui/use-toast"
import { AlertModal } from "@/templates/dashboard/alert-modal"

import EditProfile from "./edit-profile"
import { Pencil, Trash } from "lucide-react"
import { Heading } from "@/templates/dashboard/heading"

import { useGoogleTranslate } from "@/utilities/google-translate"



const TabProfile = ({ userInfo }: { userInfo: UserInfo }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const { language } = useGoogleTranslate();

  const onConfirm = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/users/${userInfo._id}`);
      signOut()

      // signOut({ callbackUrl: "/" })
      setOpen(false)

      toast({
        title: "موفقیت آمیز",
        description: "حسابتون با موفقیت حذف شد"
      });

    } catch (error) {
      console.error("delete error - TabProfile ---->", error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />

      <div className="flex items-start justify-start ">
        <Heading title="پروفایل"
        // description="here are your Profile"
        />
      </div>


      <section className="h-full flex flex-col gap-2 my-6 w-full md:w-2/4 p-3 md:p-5 rounded-2xl border dark:border-none bg-background/95 backdrop-blur ">
        {editOpen ?
          <>
            <EditProfile userInfo={userInfo} />
          </>
          :
          <>
            <div className="flex justify-between items-center">
              {/* @ts-ignore */}
              <Image src={userInfo?.imgUrl} alt="user" width={120} height={120} className="rounded-full" />

              <Link href="/dashboard/profile/edit-profile">
                <Pencil className="hover:text-gray-600 transition" onClick={() => setEditOpen(!editOpen)} />
              </Link>
            </div>

            <div className="space-y-3 my-3">
              <p>
                نقش: <span className="font-bold">{userInfo.role}</span>
              </p>
              <p>
                اسم: <span className="font-bold">{userInfo.name}</span>
              </p>
              <p>
                ایمیل: <span className="font-bold">{userInfo.email}</span>
              </p>
            </div>

            <Button variant="destructive" onClick={() => setOpen(true)}>
              <Trash className={`h-4 w-4 ${language === "fa" ? "ml-2" : "mr-2"}`} />
              حذف حساب
            </Button>
          </>
        }

      </section>
    </>

  )
}

export default TabProfile