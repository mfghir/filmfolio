
import BlogDetailsPage from "@/components/pages/BlogDetailsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Blog Details',
}


const Blog = () => {
    return <BlogDetailsPage />;
};

export default Blog;