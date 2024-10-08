import User from "@/models/user";
import connectDB from "@/lib/connectDB";
import TabUserEdit from "@/components/dashboard/user-edit";
import BreadcrumbComp from "@/utilities/Breadcrumb";

// import BreadCrumb from "@/utilities/breadcrumb";

interface PageProps {
  params: {
    userId: string;
  };
}

export default async function Page({ params: { userId } }: PageProps) {
  await connectDB();
  // const user = await User.findOne({ _id: userId });
  const user = await User.findById(userId)

  const breadcrumbItems = [
    { title: "کاربران", link: "/dashboard/users" },
    { title: "ویرایش", link: "/dashboard/users/edit" },
  ];


  return (
    <div className="flex-1 space-y-4">
      <BreadcrumbComp items={breadcrumbItems} />
      <TabUserEdit userId={JSON.parse(JSON.stringify(user))} />
    </div>
  );
}