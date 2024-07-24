"use client"

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';

import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

import Dots from '../utilities/dots';


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



const ContactForm = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues:
    {
      name: '',
      email: '',
      message: '',
      terms: false,
    }

  });


  useEffect(() => {
    const subscription = form.watch((values) => {
      const allFieldsFilled = Object.values(values).every(field => typeof field === 'boolean' ? field : field && field.length > 0);
      setIsDisabled(!allFieldsFilled);
    });
    return () => subscription.unsubscribe();
  }, [form]);


  const onSubmit = async (data: z.infer<typeof schema>): Promise<void> => {
    setLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_APP_SERV as string,
        process.env.NEXT_PUBLIC_APP_TEMP as string,
        data,
        process.env.NEXT_PUBLIC_APP_KEY
      );

      toast({ variant: "success", title: "پیام باموفقیت ارسال شد ✔" });
      form.reset(); 

    } catch (error: any) {
      console.log('error contact form ------>', error);
      toast({
        variant: "destructive",
        title: "خطا در ارسال",
        description: error
      });
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
                  className='text-fuchsia-500 border-fuchsia-500 fill-fuchsia-500'
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="flex gap-x-2">
                  قبول کردن
                  <Link
                    href="/terms&conditions"
                    className="text-fuchsia-500 hover:text-cyan-500 duration-300"
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
          className="w-full md:w-fit py-2 px-12 font-semibold text-base text-white galaxy-gradient-bg"
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

export default ContactForm;
