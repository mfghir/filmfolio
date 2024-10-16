import { authOptions } from '@/auth-options';
import TabKdramaList from '@/components/dashboard/TabKdramaList'
import connectDB from '@/lib/connectDB';
import DramaModel from '@/models/kdrama';
import User from '@/models/user';
import BreadcrumbComp from '@/utilities/Breadcrumb';
import { getServerSession } from 'next-auth';

const Page = async () => {
  await connectDB()

  // const session = await getServerSession(authOptions);
  // const user = await User.findOne({ email: session?.user?.email });

  // const dramas = await DramaModel.find({ role: "user" }).sort({ createdAt: -1 }) // Sort by date in descending order
  // const dramasList = dramas.map(user => user.toObject());


 // Fetch users with the role "user" and sort them by creation date
 const users = await User.find({ role: "user" }).sort({ createdAt: -1 });

 // Get drama data for each user
 const usersWithDramas = await Promise.all(
   users.map(async (user) => {
     const dramas = await DramaModel.find({ userId: user._id }).lean();
     return {
       ...user.toObject(),
       dramas,
     };
   })
 );

console.log("data drama" , usersWithDramas )




  const breadcrumbItems = [
    { title: "لیست دیده شده ها", link: "/dashboard/kdrama-list" },
  ];


  return (
    <>
      <BreadcrumbComp items={breadcrumbItems} />
      <TabKdramaList  data={JSON.parse(JSON.stringify(usersWithDramas))} />
    </>
  )
}

export default Page