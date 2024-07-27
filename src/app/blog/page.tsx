import BlogPage from "@/components/pages/BlogPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Blog',
}


const Blog = () => {
  return <BlogPage />;
};

export default Blog;