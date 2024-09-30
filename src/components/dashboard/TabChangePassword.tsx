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
    .min(8, { message: "You must be at least 8 character" })
    .refine((value) => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/.test(value),
      { message: "Password must contain at least one letter, one number, and one special character" }
    ),
  confirmPassword: z.string()
    .min(8, { message: "Password must be at least 6 characters" })
})
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords does not match"
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


  // console.log("form forget ---->" , form.control)



  const onSubmit = async (values: z.infer<typeof formSchema>): Promise<void> => {
    setLoading(true);
    console.log("values forget 1 ---->" , values)

    try {
      await axios.patch("/api/update-password", values);
      console.log("values forget 2 ---->" , values)

      toast({
        variant: "success",
        title: "Success",
        description: "Your password successfully changed!"
      });

    } catch (error: any) {
      console.log("forget password ---->", error)
      toast({
        variant: "destructive",
        title: "Error",
        // description: "Failed to send reset password email"
        description: error.message
      });
    }

    setLoading(false);
  }



  return (
    <>
      <div className="flex items-start justify-start ">
        <Heading title="Change Password" description="change your password" />
      </div>


      <div className="w-full md:w-2/5 flex flex-col justify-start my-6">
        <Form {...form}  >
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input placeholder="new password" {...field} className="py-4" />
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
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Confirm Password" {...field} className="py-4" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={loading} className="ml-auto" type="submit" >
              {loading ? "Saving changes..." : "Save changes"}
            </Button>

          </form>
        </Form>
      </div>
    </>
  )
}

export default TabChangePassword