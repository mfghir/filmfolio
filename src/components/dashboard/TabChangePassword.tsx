/* eslint-disable react/no-unescaped-entities */
"use client"

import { useState } from "react"
import axios from "axios";
import { useForm } from "react-hook-form"


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"


import { Input } from "@/components/ui/input"
import { useToast } from "../ui/use-toast";
import { Button } from "../ui/button"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Heading } from "@/templates/dashboard/heading";



const formSchema = z.object({
  newPassword: z.string()
    .min(8, { message: "رمز شما حداقل باید 8 کاراکتر باشه" })
    .refine((value) => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/.test(value),
      { message: "رمز شما باید شامل حداقل یک حرف بزرگ،یک عدد و یک کاراکتر خاص باشه" }
    ),
  confirmPassword: z.string()
    .min(8, { message: "رمز شما حداقل باید 8 کاراکتر باشه" })
})
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "رمز درست نیست"
  })


const TabChangePassword = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: ""
    },
  })





  const onSubmit = async (values: z.infer<typeof formSchema>): Promise<void> => {
    setLoading(true);

    try {
      await axios.patch("/api/update-password", values);
      // console.log("values forget 2 ---->", values)

      toast({
        variant: "success",
        title: "موفقیت",
        description: "رمز شما با موفقیت عوض شد"
      });

    } catch (error: any) {
      console.log("forget password ---->", error)
      toast({
        variant: "destructive",
        title: "شکست",
        description: "متاسفانه مشکلی پیش اومد "
        // description: error.message
      });
    }

    setLoading(false);
  }



  return (
    <>
      <div className="flex items-start justify-start ">
        <Heading title="تعویض رمز" description="رمز عبورتون رو تغییر بدین" />
      </div>


      <div className="w-full md:w-2/5 flex flex-col justify-start my-6">
        <Form {...form}  >
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>رمز جدید</FormLabel>
                  <FormControl>
                    <Input placeholder="رمز جدید" {...field} className="py-4" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>تکرار رمز</FormLabel>
                  <FormControl>
                    <Input placeholder="تکرار رمز" {...field} className="py-4" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={loading} className="ml-auto" type="submit" >
              {loading ? "ذخیره تغییرات..." : "ذخیره تغییرات"}
            </Button>

          </form>
        </Form>
      </div>
    </>
  )
}

export default TabChangePassword