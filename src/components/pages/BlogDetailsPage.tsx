"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"

import { blogPosts } from "@/utilities/types-data"
import { Button } from "../ui/button"
import { ThumbsUp, ThumbsDown, Flag } from "lucide-react"

import connectDB from "@/lib/connectDB"

const BlogDetailsPage = () => {
  const { blogId } = useParams()
  const postId = parseInt(blogId as string)
  const post = blogPosts.find(post => post.id === postId)
  
  const [comments, setComments] = useState<Array<{ id: string, text: string, date: Date, likes: number, dislikes: number }>>([])
  const [newComment, setNewComment] = useState("")

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`/api/comments?postId=${postId}`);
        if (response.ok) {
          const fetchedComments = await response.json();
          setComments(fetchedComments);
        } else {
          console.error("خطا در دریافت نظرات");
        }
      } catch (error) {
        console.error("خطا در دریافت نظرات:", error);
      }
    };

    fetchComments();
  }, [postId]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      try {
        const response = await fetch('/api/comments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: newComment, postId }),
        });

        if (response.ok) {
          const savedComment = await response.json();
          setComments([...comments, savedComment]);
          setNewComment("");
        } else {
          console.error("خطا در ذخیره نظر");
        }
      } catch (error) {
        console.error("خطا در ذخیره نظر:", error);
      }
    }
  };

  const handleLike = async (commentId: string) => {
    try {
      const response = await fetch(`/api/comments/${commentId}/like`, { method: 'POST' });
      if (response.ok) {
        setComments(comments.map(comment => 
          comment.id === commentId ? { ...comment, likes: comment.likes + 1 } : comment
        ));
      }
    } catch (error) {
      console.error("خطا در لایک کردن نظر:", error);
    }
  };

  const handleDislike = async (commentId: string) => {
    try {
      const response = await fetch(`/api/comments/${commentId}/dislike`, { method: 'POST' });
      if (response.ok) {
        setComments(comments.map(comment => 
          comment.id === commentId ? { ...comment, dislikes: comment.dislikes + 1 } : comment
        ));
      }
    } catch (error) {
      console.error("خطا در دیسلایک کردن نظر:", error);
    }
  };

  const handleReport = async (commentId: string) => {
    try {
      const response = await fetch(`/api/comments/${commentId}/report`, { method: 'POST' });
      if (response.ok) {
        alert("نظر با موفقیت گزارش شد.");
      }
    } catch (error) {
      console.error("خطا در گزارش نظر:", error);
    }
  };

  return (
    <>
      <section className="w-full h-full grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-x-12 mt-3 ">

        <div className="lg:col-span-2 w-full lg:w-3/4 place-content-center mt-3">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {post?.title}
          </h1>

          <ul className="w-full flex flex-col justify-between items-start gap-y-2 mt-3 text-gray-400">
            <li className="flex justify-start items-center gap-x-2">
              <Image
                width={400}
                height={400}
                src={post?.authorImage || ''}
                alt={post?.authorName || ''}
                className="w-9 h-9 rounded-full object-cover"
              />
              <span className="text-sm">{post?.authorName}</span>
            </li>

            <li className="text-xs">{post?.publishDate}</li>
          </ul>

          <p className=" w-full text-base text-gray-700 dark:text-gray-400 mt-8 lg:mt-12">
            {post?.fullText.find(paragraph => paragraph.paragraphId === 1)?.text}
          </p>
        </div>

        <Image
          className="lg:max-w-[550px] lg:max-h-[550px] w-fit h-fit object-fill rounded-3xl place-self-end self-start row-start-1  lg:col-start-3 
          lg:col-span-1"
          width={1024}
          height={1024}
          src={post?.articleImg || ''}
          alt="blog pic"
        />
      </section>


      <div className="flex flex-col justify-center items-center lg:w-3/4 mx-auto text-gray-700 dark:text-gray-400 mt-8">
        <p className="w-full text-base">
          {post?.fullText.find(paragraph => paragraph.paragraphId === 2)?.text}
        </p>

        <Image
          width={1200}
          height={1200}
          src={post?.articleImg_2 || ''}
          alt={post?.id?.toString() || ''}
          className="lg:max-w-[950px] lg:max-h-[950px] w-fit h-fit rounded-3xl object-cover my-8"
        />

        <ul className="w-full text-base flex flex-col justify-center items-center gap-y-6">
          {post?.fullText.slice(2, 6).map((i, index) =>
            <li key={index} className="">{i.text}</li>
          )}
        </ul>
      </div>





      <div className="mt-12 lg:w-3/4 mx-auto">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">نظرات</h2>
        <ul className="space-y-4">
          {comments.map((comment) => (
            <li key={comment.id} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300">{comment.text}</p>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-2 block">
                {new Date(comment.date).toLocaleString('fa-IR')}
              </span>
              <div className="flex items-center mt-2 space-x-4">
                <button onClick={() => handleLike(comment.id)} className="flex items-center text-blue-500">
                  <ThumbsUp size={16} className="mr-1" /> {comment.likes}
                </button>
                <button onClick={() => handleDislike(comment.id)} className="flex items-center text-red-500">
                  <ThumbsDown size={16} className="mr-1" /> {comment.dislikes}
                </button>
                <button onClick={() => handleReport(comment.id)} className="flex items-center text-yellow-500">
                  <Flag size={16} className="mr-1" /> گزارش
                </button>
              </div>
            </li>
          ))}
        </ul>

        <form onSubmit={handleCommentSubmit} className="mt-6">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="نظر خود را بنویسید..."
            rows={4}
          />
          <Button
            variant="default"
            type="submit"
            className="mt-2 px-4 py-2 galaxy-gradient-bg text-base font-bold text-white rounded-lg  transition-colors"
          >
            ارسال نظر
          </Button>
        </form>
      </div>
    </>
  )
}

export default BlogDetailsPage