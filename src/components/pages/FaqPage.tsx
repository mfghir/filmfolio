"use client"

import Image from 'next/image'
import React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqList } from '@/utilities/types-data'


const FaqPage = () => {
  return (
    <>
      <section className="w-full h-full place-items-start content-between grid grid-cols-1 gap-y-6 lg:grid-cols-2">
        <div className="flex flex-col gap-y-3">
          <h3 className="text-2xl lg:text-3xl font-bold galaxy-gradient-text">سوالات متداول</h3>
          <p className="text-gray-700 dark:text-gray-400 text-base">
            در این بخش، ما به سؤالات رایج شما درباره فیلم فولیو پاسخ می‌دیم. از نحوه استفاده از پلتفرم گرفته تا جزئیات مربوط به حساب کاربری و ویژگی‌های مختلف، همه چیز رو پوشش دادیم. اگر جواب سؤالت.ن رو در اینجا پیدا نکردید، لطفاً با تیم پشتیبانی ما تماس بگیرید. ما همیشه آماده‌ایم تا به شما کمک کنیم تا تجربه بهتری با فیلم فولیو داشته باشید.
          </p>


          <Accordion type="single" collapsible >
            {faqList.map(item =>
              <AccordionItem value={item.question} key={item.id} className="border-b-gray-500">
                <AccordionTrigger className="text-gray-900 dark:text-white text-lg decoration-transparent hover:text-fuchsia-500 duration-300">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 dark:text-gray-300 text-sm">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </div>

        <Image
          className="lg:max-w-[550px] lg:max-h-[550px] w-fit h-fit object-fill rounded-3xl place-self-end self-start"
          width={1024}
          height={1024}
          src="https://i.postimg.cc/13KF9d6N/faq.png"
          alt="faq pic"
        />
      </section>
    </>
  )
}

export default FaqPage