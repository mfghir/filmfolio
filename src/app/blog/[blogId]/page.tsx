
import BlogDetailsPage from "@/components/pages/BlogDetailsPage";
import BreadcrumbComp from "@/utilities/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'Blog Details',
}




const Blog = ({ blogId }: { blogId: string }) => {

	
	const breadcrumbItems = [
		{ title: "KDrama List", link: `/blog/${blogId}` },
	];


	return (
		<>
			<BreadcrumbComp items={breadcrumbItems} />
			<BlogDetailsPage />;
		</>)
};

export default Blog;