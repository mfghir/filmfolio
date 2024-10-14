"use client";

import { useRouter } from "next/navigation";
import animationData from "../../public/lottie/404.json";
import Lottie from "lottie-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="px-5 md:px-8 lg:px-80 w-full min-h-svh mb-16 flex flex-col items-center justify-center text-center">
      {/* <span className="bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent">
        404
      </span> */}
      <Lottie
        animationData={animationData}
        className="flex justify-center items-center"
        loop={true}
      />

      <h2 className="my-2 font-heading text-2xl font-bold">اوه! چیزی پیدا نشد ...</h2>
      <p> به نظر می‌رسه صفحه‌ای که دنبالش بودید، وجود نداره و یا شاید به جای دیگه ای منتقل شده </p>

      <div className="mt-8 flex justify-center gap-2">
        <Button onClick={() => router.back()} variant="default" size="lg">صفحه قبلی</Button>
        <Button
          onClick={() => router.push("/")}
          variant="ghost"
          size="lg"
        >
          برگشت به خانه
        </Button>
      </div>
    </div>
  );
}