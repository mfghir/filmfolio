"use client"

import Image from 'next/image';
import { signIn } from "next-auth/react";
import { Button } from "../components/ui/button";


const GoogleButton = ({ text }: { text: string }) => {
  return (
    <Button
      onClick={() => signIn("google")}
      className="font-semibold flex justify-center items-center gap-x-4 px-4 py-3 rounded-lg w-full
       bg-white text-zinc-950 border border-zinc-200"
    >
      <Image
        src="google.svg"
        alt="Google Sign In Button"
        width={24}
        height={24}
      />
      {text} with google
    </Button>
  )
}

export default GoogleButton