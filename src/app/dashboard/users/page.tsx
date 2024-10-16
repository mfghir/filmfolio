import User from "@/models/user";
import TabUsers from '@/components/dashboard/TabUsers';
import BreadcrumbComp from '@/utilities/Breadcrumb';

import connectDB from "@/lib/connectDB";

// import BreadCrumb from '@/utilities/breadcrumb';

const DashboardUsers = async () => {
  await connectDB()
  const users = await User.find({ role: "user" }).sort({ createdAt: -1 }) // Sort by date in descending order
  const usersList = users.map(user => user.toObject());

  // await connectDB();
  // const session = await getServerSession(authOptions);
  // const usersList = await User.aggregate([
  //   { $match: { email: session?.user.email } },
  //   {
  //     $lookup: {
  //       from: "users",
  //       foreignField: "userId",
  //       localField: "_id",
  //       as: "user",
  //     },
  //   },
  // ]);

  const breadcrumbItems = [{ title: "کاربران", link: "/dashboard/users" }];

  return (
    <>
      <BreadcrumbComp items={breadcrumbItems} />
      <TabUsers data={JSON.parse(JSON.stringify(usersList))} />
    </>
  )
}

export default DashboardUsers