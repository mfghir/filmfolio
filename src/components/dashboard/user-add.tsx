"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import * as z from "zod";

import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "../ui/use-toast";

import { Heading } from "@/templates/dashboard/heading";
import FileUpload from "@/utilities/pic-uploader/file-upload";



const formSchema = z.object({
  name: z.string().min(2, { message: "اسم حداقل دو حرف باید باشه" }),
  imgUrl: z.string().refine((files) => { return files?.[0] }),
  email: z.string()
    .min(5, { message: "این بخش حتما باید پر بشه" })
    .email("ایمیل معتبر نیس"),
  password: z.string().min(8, { message: "باید حداقل ۸ کاراکتر باشد" }),
  role: z.string().default("user")
});


const TabUserAdd = () => {
  const initialData = null
  const router = useRouter();
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);
  const storedImgUrl = localStorage.getItem('imgUrl');

  const defaultValues = initialData ? initialData : {
    name: "",
    email: "",
    imgUrl: storedImgUrl ? storedImgUrl : "https://i.postimg.cc/rpN1DtvM/uer-pic.jpg",
    password: "",
    role: "",
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues
  });


  const onSubmit = async (data: z.infer<typeof formSchema>): Promise<void> => {
    try {
      setLoading(true);

      if (!initialData) {
        // await axios.post(`/api/users`, data);
        await axios.post(`/api/register`, data);
        localStorage.removeItem('imgUrl');
      } else {
        console.log("error ****");
      }

      router.push(`/dashboard/users`);
      router.refresh();

      toast({
        variant: "success",
        title: "موفقیت آمیز",
        description: "کاربر با موفقیت افزوده شد",
      });
    } catch (error: any) {
      console.log("error-->", error);

      toast({
        variant: "destructive",
        title: "خطا!",
        description: "متاسفانه مشکلی پیش  اومد",
      });
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <div className="flex items-center justify-between ">
        <Heading title="افزودن کاربر"
        // description="تو این قسمت میتونید کاربر جدید اضافه کنید" 
        />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full mt-6">
          <FormField
            control={form.control}
            name="imgUrl"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Images</FormLabel> */}
                <FormControl>
                  {/* @ts-ignore */}
                  <FileUpload onChange={field.onChange} value={field.value} onRemove={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />


          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>اسم</FormLabel>
                  <FormControl>
                    <Input placeholder="اسم" disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ایمیل</FormLabel>
                  <FormControl>
                    <Input placeholder="ایمیل" disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>رمز</FormLabel>
                  <FormControl>
                    <Input placeholder="رمز" disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نقش</FormLabel>
                  <FormControl>
                    <Input placeholder="نقش" disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button disabled={loading} className="ml-auto" type="submit" >
            {loading ? "در حال افزودن ..." : "افزودن"}
          </Button>
        </form>
      </Form>
    </>
  )
}

export default TabUserAdd




