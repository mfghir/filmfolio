"use client"

import { blogPosts } from "@/utilities/types-data"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"

const BlogDetailsPage = () => {
  const { blogId } = useParams()
  const postId = parseInt(blogId)
  const post = blogPosts.find(post => post.id === postId)


  return (
    <section className="w-full h-full place-items-start content-between grid grid-cols-1 gap-y-6 lg:grid-cols-2">

      <div className="">
        <h1 className="text-2xl text-gray-900 dark:text-white">
          {post?.title}
        </h1>

        <p className=""></p>
      </div>


      <Image
        className="lg:max-w-[550px] lg:max-h-[550px] w-fit h-fit object-fill rounded-3xl place-self-end self-start"
        width={1024}
        height={1024}
        src={post?.articleImg}
        alt="blog pic"
      />
    </section>
  )
}

export default BlogDetailsPage