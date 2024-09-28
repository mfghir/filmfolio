
import BlogDetailsPage from "@/components/pages/BlogDetailsPage";
import BreadcrumbComp from "@/utilities/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Blog Details',
}

interface PageProps {
  params: {
    blogId: string;
  };
}

{/* @ts-ignore */ }
export default function Page({ params: { blogId } }: PageProps) {

// const page = ({ blogId }: { blogId: string }) => {

  const breadcrumbItems = [
    { title: "خانه", link: "/" },
    { title: "بلاگ", link: "/blog" },
    { title: " جزئیات بلاگ", link: `/blog/${blogId}` },
  ];


  return (
    <>
      {/* @ts-ignore */}
      <BreadcrumbComp items={breadcrumbItems} />
      <BlogDetailsPage />
    </>
  );
};

// export default page;