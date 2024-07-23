"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import emailjs from '@emailjs/browser';
import Dots from '../utilities/dots';

import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import Link from 'next/link';



const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const schema = z.object({
    name: z.string().nonempty({ message: "وارد کردن اسم الزامی است" })
      .min(2, { message: "اسم باید بیشتر از دو حرف باشد" }),
    email: z.string().nonempty({ message: "وارد کردن ایمیل الزامی است" })
      .email({ message: "ایمیل نامعتبر" }),
    message: z.string().nonempty({ message: "وارد کردن پیام الزامی است" })
      .min(1, { message: "پیام وارد شده کوتاه است" }),
    terms: z.boolean().refine(value => value === true,
      { message: "قبول کردن شرایط و ضوابط الزامی است" }),
  });

  type FormData = z.infer<typeof schema>;

  // const { register, handleSubmit, formState: { errors }, reset, watch } 
  const form =
    useForm<FormData>({
      resolver: zodResolver(schema)
    });

  const watchFields = form.watch(["name", "email", "message", "terms"]);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const allFieldsFilled = watchFields.every(field => typeof field === 'boolean' ? field : field && field.length > 0);
    setIsDisabled(!allFieldsFilled);
  }, [watchFields]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    setLoading(true);
    try {
      emailjs.send(
        process.env.NEXT_PUBLIC_APP_SERV as string, // replace with your EmailJS service ID
        process.env.NEXT_PUBLIC_APP_TEMP as string, // replace with your EmailJS template ID
        data,
        process.env.NEXT_PUBLIC_APP_KEY // replace with your EmailJS user ID
      )
        .then((response: unknown) => {
          // toast.success("")
          toast({ variant: "success", title: "پیام باموفقیت ارسال شد✔" });
          form.reset(); // reset form after successful submission
        })
        .catch((error: unknown) => {
          toast({ variant: "success", title: "خطا در ارسال" });

          console.log('FAILED... ------>', error);
        });

    } catch (error) {
      toast({ variant: "success", title: "خطا در ارسال" });
      console.log("contact form error ---->", error)
    } finally {
      setLoading(false);
    }

  };



  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full lg:w-3/4 flex flex-col gap-y-6 mt-4 md:mt-6 md:mb-8 lg:mb-0
        shadow-md bg-zinc-50 dark:bg-zinc-700 rounded-xl p-3"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>اسم</FormLabel>
              <FormControl>
                <Input placeholder="نام خود را کامل وارد کنید" {...field} />
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
                <Input placeholder="ایمیل خود را وارد کنید" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>پیام</FormLabel>
              <FormControl>
                <Textarea placeholder="پیام خود را وارد کنید" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />



        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md gap-x-3">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="flex gap-x-2">
                  قبول کردن
                  <Link
                    href="/terms&conditions"
                    className="text-primary hover:text-rose-400 duration-300 "
                  >
                    شرایط و ضوابط
                  </Link>
                </FormLabel>
              </div>
            </FormItem>
          )}
        />


        <Button
          variant="default"
          type="submit"
          className="w-full md:w-fit font-semibold text-base py-2 px-12 duration-300 flex justify-center 
                    items-center gap-x-2 whitespace-nowrap"
          disabled={isDisabled}
        >
          {loading ? (
            <>
              در حال ارسال
              <Dots />
            </>
          ) :
            "ارسال"
          }
        </Button>
      </form>
    </Form>

  )
}

export default ContactForm