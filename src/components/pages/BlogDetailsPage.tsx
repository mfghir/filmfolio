"use client"

import BreadcrumbComp from "@/utilities/Breadcrumb"
import { blogPosts } from "@/utilities/types-data"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"

const BlogDetailsPage = () => {
  const { blogId } = useParams()
  const postId = parseInt(blogId)
  const post = blogPosts.find(post => post.id === postId)


  return (
    <>
      <section className="w-full h-full grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-x-12">

        <div className="lg:col-span-2 w-full lg:w-3/4 place-content-center mt-3">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {post?.title}
          </h1>

          <ul className="w-full flex flex-col justify-between items-start gap-y-2 mt-3 text-gray-400">
            <li className="flex justify-start items-center gap-x-2">
              <Image
                width={400}
                height={400}
                src={post?.authorImage}
                alt={post?.authorName}
                className="w-9 h-9 rounded-full object-cover"
              />
              <span className="text-sm">{post?.authorName}</span>
            </li>

            <li className="text-xs">{post?.publishDate}</li>
          </ul>

          <p className=" w-full text-base text-gray-700 dark:text-gray-400 mt-8 lg:mt-12">
            {post.fullText.find(paragraph => paragraph.paragraphId === 1)?.text}
          </p>
        </div>

        <Image
          className="lg:max-w-[550px] lg:max-h-[550px] w-fit h-fit object-fill rounded-3xl place-self-end self-start row-start-1  lg:col-start-3 
          lg:col-span-1"
          width={1024}
          height={1024}
          src={post.articleImg}
          alt="blog pic"
        />
      </section>


      <div className="flex flex-col justify-center items-center lg:w-3/4 mx-auto text-gray-700 dark:text-gray-400 mt-8">
        <p className="w-full text-base">
          {post.fullText.find(paragraph => paragraph.paragraphId === 2)?.text}
        </p>

        <Image
          width={1200}
          height={1200}
          src={post?.articleImg_2}
          alt={post?.id}
          className="lg:max-w-[950px] lg:max-h-[950px] w-fit h-fit rounded-3xl object-cover my-8"
        />

        <ul className="w-full text-base flex flex-col justify-center items-center gap-y-6">
          {post.fullText.slice(2, 6).map(i =>
            <li className="">{i.text}</li>
          )}
        </ul>
      </div>
    </>
  )
}

export default BlogDetailsPage