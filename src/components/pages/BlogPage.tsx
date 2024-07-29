"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import BlogMonth from "@/templates/blog-month"
import { blogPosts } from "@/utilities/types-data"
import { Button } from "../ui/button"

import { IconChevronLeft } from "@tabler/icons-react"
import { motion } from "framer-motion"

const BlogPage = () => {
  const initialItems = 5; // Number of initial items
  const itemsPerPage = 3; // Number of items per page for load more
  const [cards, setCards] = useState(blogPosts.slice(0, initialItems));
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (page > 0) {
      loadCards();
    }
  }, [page]);

  const loadCards = () => {
    const offset = initialItems + (page - 1) * itemsPerPage;
    const newCards = blogPosts.slice(offset, offset + itemsPerPage);
    setCards(prevCards => [...prevCards, ...newCards]);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const allPostsLoaded = cards.length >= blogPosts.length;

  return (
    <>
      <section className="w-full h-full place-items-start content-between grid grid-cols-1 gap-y-6 lg:grid-cols-2">
        <div className="flex flex-col gap-y-3">
          <h3 className="text-2xl lg:text-3xl font-bold galaxy-gradient-text">وبلاگ</h3>
          <p className="text-gray-700 dark:text-gray-400 text-base">
            صفحه بلاگ فیلم فولیو جاییه که شما عاشقان فیلم و سینما می‌تونید به جدیدترین اخبار، نقدها و مقالات تحلیلی دسترسی داشته باشید.
            اینجا یه مجموعه مطالب متنوع داریم که درباره آخرین رویدادها و تحولات دنیای سینما براتون می‌نویسیم.
            از نقد و بررسی فیلم‌های جدید گرفته تا معرفی بازیگران و کارگردانان مطرح، همه و همه اینجا منتظرتونه.
          </p>

          <p className="text-gray-700 dark:text-gray-400 text-base">
            یکی از بخش‌های مهم بلاگ، نقد و بررسی فیلم‌هاس
            ت. تو این بخش، تیم حرفه‌ای ما با تحلیل‌های دقیق و جزئیات فراوان، فیلم‌های تازه اکران شده
            رو زیر ذره‌بین می‌برن. نقدهایی که به بررسی نقاط قوت و ضعف هر فیلم می‌پردازن و بهتون کمک می‌کنن با دیدی بازتر
            و آگاهانه‌تر به تماشای فیلم‌ها بشینید. این نقدها شامل تحلیل بازیگری، کارگردانی، فیلمنامه و جلوه‌های ویژه میشن.
          </p>

          <p className="text-gray-700 dark:text-gray-400 text-base">
            بخش دیگه بلاگ، اخبار دنیای سینماست. اینجا می‌تونید از آخرین خبرها و رویدادهای مهم در صنعت فیلمسازی مطلع بشید.
            از اخبار جشنواره‌ها و جوایز گرفته تا پروژه‌های جدید و تغییرات توی ترکیب بازیگران و عوامل فیلم‌ها،
            همه رو پوشش میدیم. این اخبار به‌روز و دقیق بهتون کمک می‌کنه همیشه در جریان آخرین تحولات باشید.
          </p>

          <p className="text-gray-700 dark:text-gray-400 text-base">
            یکی از جذاب‌ترین بخش‌های بلاگ، مقالات تحلیلی و ویژه‌ست. این مقالات به موضوعات خاص و جذاب در دنیای سینما می‌پردازن،
            مثل تحلیل روندهای جدید فیلمسازی، معرفی تکنولوژی‌های نوین و بررسی عملکرد بازیگران و کارگردانان مشهور.
            این مقالات با نگاه جامع و عمیقشون، بهتون کمک می‌کنن دانش و بینش بیشتری درباره دنیای سینما پیدا کنید.
          </p>
        </div>

        <Image
          className="lg:max-w-[550px] lg:max-h-[550px] w-fit h-fit object-fill rounded-3xl place-self-end self-start"
          width={1024}
          height={1024}
          src="https://i.postimg.cc/NFZt4LVQ/blog.jpg"
          alt="blog pic"
        />
      </section>

      <BlogMonth />

      <>
        <h3 className="text-3xl font-bold text-center galaxy-gradient-text">لیست بلاگ ها</h3>

        <section className="grid grid-cols-1 gap-y-5 md:grid-cols-2 lg:grid-cols-4 md:gap-x-5 lg:gap-8 my-12">
          {cards.map((item, index) =>
            <motion.div
              key={item.id}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-4"
              initial={{ opacity: 0, scale: 0.25 }} // Initial animation state
              animate={{ opacity: 1, scale: 1 }} // Animation end state
              transition={{ delay: index * 0.1 }} // Delay for staggered effect
            >
              <Image
                width={400}
                height={400}
                src={item.articleImg}
                alt="Placeholder Image"
                className="w-full h-48 rounded-md object-cover"
              />

              <article className="mt-3 flex flex-col  gap-y-4">
                <div className="flex flex-row gap-x-2">
                  {item.tags.map(i =>
                    <span className="text-xs px-[6px] py-1 rounded bg-gray-200 text-gray-500
                      dark:bg-gray-600 dark:text-gray-300">
                      {i}
                    </span>
                  )}
                </div>

                <div className="h-full flex flex-col gap-y-2">
                  <div className="w-full font-bold text-xl mb-2 text-gray-900 dark:text-white line-clamp-1">{item.title}</div>
                  <p className="text-gray-700 dark:text-gray-300 text-base line-clamp-2">{item.summary}</p>
                </div>

                <div className="flex justify-between items-center ">
                  <div className="flex justify-between items-center gap-x-2">
                    <Image
                      width={400}
                      height={400}
                      src={item.authorImage}
                      alt={item.authorName}
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <span className="text-sm text-gray-400">{item.authorName}</span>
                  </div>

                  <Link href={`/blog/${item.id}`}
                    className="flex items-center gap-x-1 text-xs text-gray-700 hover:text-gray-400 dark:text-gray-500 dark:hover:text-white duration-300">
                    ادامه
                    <IconChevronLeft stroke={1.5} size={18} />
                  </Link>
                </div>
              </article>
            </motion.div>
          )
          }
        </section>
      </>


      <Button
        disabled={allPostsLoaded}
        onClick={loadMore}
        variant="default"
        className="w-full md:w-fit py-2 px-12 font-semibold text-base text-white galaxy-gradient-bg self-center mx-auto"
      >
        مشاهده بیشتر
      </Button>
    </>
  )
}

export default BlogPage