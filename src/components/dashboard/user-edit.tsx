"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import * as z from "zod";
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

// import { Heading } from '@/templates/heading'
// import FileUpload from "@/utilities/file-upload";
import axios from "axios";
import { Heading } from "@/templates/dashboard/heading";
import FileUpload from "@/utilities/pic-uploader/file-upload";


const formSchema = z.object({
  name: z.string().min(2, { message: "اسم حداقل دو حرف باید باشه" }),
  imgUrl: z.string().refine((files) => { return files?.[0] }),
  email: z.string()
    .min(5, { message: "این بخش حتما باید پر بشه" })
    .email("ایمیل معتبر نیس"),
  // password: z.string()
  //   .min(8, { message: "pass must be at least 8 length." }),
  role: z.string().default("user")
});




const TabUserEdit = ({ userId }: any) => {
  // console.log(userId);
  // console.log("-====userId=>>>>>>>", typeof userId);

  const initialData = userId ? userId : null
  const router = useRouter();

  const { toast } = useToast();
  const [loading, setLoading] = useState(false);


  const defaultValues = initialData ? initialData : {
    name: "",
    email: "",
    imgUrl: "" || userId?.imgUrl,
    // password: "",
    role: "",
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues
  });


  const onSubmit = async (data: z.infer<typeof formSchema>): Promise<void> => {
    try {
      setLoading(true);
      if (initialData) {
        await axios.patch(`/api/users/${initialData._id}`, data);
        localStorage.removeItem('imgUrl');

        toast({
          variant: "success",
          title: "موفقیت آمیز",
          description: "تغییرات ذخیره شد",
        });
      } else {
        // await axios.post(`/api/users`, data);
        const res = await axios.post(`/api/users`, data);
        console.log("product", res);
      }

      router.refresh();
      router.push(`/dashboard/users`);
      router.refresh();

      toast({
        variant: "destructive",
        title: "خطا!",
        description: "متاسفانه مشکلی پیش  اومد",
      });

    } catch (error: any) {
      console.log("error-->", error);
      console.error(error.response);

      toast({
        variant: "destructive",
        title: "خطا!",
        description: "متاسفانه مشکلی پیش  اومد",
      });
    } finally {
      setLoading(false);
    }
  };


  // const onSubmit = async (values: z.infer<typeof formSchema>) => {
  //   console.log('test', values);
  //   // updateContact(values)
  //   try {
  //     const response = await axios.put(`/api/users/${userId}`, values);
  //     console.log("===>", response);
  //     router.push("/dashboard/users");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  // const onDelete = async () => {
  //   try {
  //     setLoading(true);
  //     //   await axios.delete(`/api/${params.storeId}/products/${params.productId}`);
  //     router.refresh();
  //     // router.push(`/${params.storeId}/products`);
  //   } catch (error: any) {
  //   } finally {
  //     setLoading(false);
  //     setOpen(false);
  //   }
  // };

  // const triggerImgUrlValidation = () => form.trigger("imgUrl");






  return (
    <>
      <div className="flex items-center justify-between ">
        <Heading title="ویرایش کاربر" description="" />
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

          <Image
            src={userId?.imgUrl}
            alt="Sample image"
            width={200}
            height={200}
          />


          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>اسم</FormLabel>
                  <FormControl>
                    <Input placeholder={userId?.name} disabled={loading} {...field} />
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
                    <Input placeholder={userId?.email} disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder={userId?.password} disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نقش</FormLabel>
                  <FormControl>
                    <Input placeholder={userId?.role} disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button disabled={loading} className="ml-auto" type="submit" >
            {loading ? "ذخیره تغییرات..." : "ذخیره تغییرات"}
          </Button>
        </form>
      </Form>
    </>
  )
}

export default TabUserEdit