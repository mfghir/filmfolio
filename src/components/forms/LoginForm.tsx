"use client"

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
import GoogleButton from "../../utilities/GoogleButton";

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { signIn, useSession } from "next-auth/react";
import { useState } from "react";

import axios from "axios";
import SubmitButton from "@/utilities/SubmitButton";
import Loading from "@/utilities/loading";


const formSchema = z.object({
  email: z.string()
    .email("این یک ایمیل معتبر نیست.")
    .min(5, { message: "این فیلد باید پر شود." }),
  password: z.string()
    .min(8, { message: "باید حداقل ۸ کاراکتر باشد" })
    .refine((value) => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/.test(value),
      { message: "رمز عبور باید حداقل یک حرف، یک عدد و یک کاراکتر ویژه داشته باشد" }
    ),
})



export default function LoginForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const { status: sessionStatus } = useSession();


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })


  const onSubmit = async (values: z.infer<typeof formSchema>): Promise<void> => {
    setLoading(true);
    try {
      // const res = 
      await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });
      // console.log("res login", res);

      console.log("values", values)

      // await axios.post("/api/login", { email: values.email });
      router.push("/dashboard");

      toast({
        variant: "success",
        title: "موفقیت",
        description: "خوش آمدید"
      });

      // if (res?.error) {
      //   console.log("error - LoginForm ---->", res.error)
      //   toast({
      //     variant: "destructive",
      //     title: "Uh oh! Something went wrong.",
      //     description: res.error,
      //   });
      // }


      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
      console.log("error catch- LoginForm ---->", error)

      toast({
        variant: "destructive",
        title: "اوه! چیزی اشتباه شد.",
        description: error,
      });
    }
    setLoading(false);
  }


  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();

  //   try {
  //     const res = await signIn("credentials", {
  //       email,
  //       password,
  //       redirect: false,
  //     });

  //     if (res?.error) {
  //       setError("Invalid Credentials");
  //       return;
  //     }

  //     router.replace("dashboard");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  if (sessionStatus === "loading") {
    return <Loading />
  }

  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 min-h-screen h-fit place-content-center">
      <Image
        className="hidden lg:block lg:w-[550px] rounded-3xl"
        width={1080}
        height={1080}
        src="https://i.postimg.cc/sD47z3xh/login.png"
        alt="Login illustration" />


      <div className="w-full md:w-[350px] mx-auto lg:w-[450px] flex flex-col items-start justify-start my-6">
        <h1 className="text-2xl font-bold inline-block w-fit border-b-2 border-gray-500 my-4 galaxy-gradient-text">ورود</h1>

        <Form {...form}  >
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ایمیل</FormLabel>

                  <FormControl>
                    <Input placeholder="ایمیل تون رو وارد کنید" {...field} className="py-4" />
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
                    <Input placeholder="رمز عبورتون رو وارد کنید" {...field} className="py-4" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Link href="/forget-password" className="text-gray-500 text-xs mt-3 hover:text-blue-500 duration-300" >
              فراموش رمز عبور؟
            </Link>

            <SubmitButton loading={loading} />
          </form>
        </Form>

        <div className="flex justify-between items-center gap-x-2 my-6 w-full  text-zinc-600">
          <span className="w-full h-[1px] bg-zinc-600" />
          <span>یا</span>
          <span className="w-full h-[1px] bg-zinc-600" />
        </div>

        <GoogleButton text="ورود" />

        <p className="text-sm mt-4 flex gap-x-2">
          هنوز حساب ندارید؟
          <Link className="galaxy-gradient-text" href="/register" >
            ثبت نام
          </Link>
        </p>
      </div>
    </section>
  );
}