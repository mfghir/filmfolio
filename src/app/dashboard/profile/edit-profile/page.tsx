import EditProfile from '@/components/dashboard/edit-profile'
// import BreadcrumbComp from '@/utilities/breadcrumb'
import connectDB from '@/lib/connectDB';

import User from '@/models/user';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth-options';
import BreadcrumbComp from '@/utilities/Breadcrumb';


const Page = async () => {
  const session = await getServerSession(authOptions);
  await connectDB()
  const user = await User.findOne({ email: session?.user?.email });


  const breadcrumbItems = [
    { title: "پروفایل", link: "/dashboard/profile" },
    { title: "ویرایش پروفایل", link: "/dashboard/profile/edit-profile" },
  ]

  return (
    <>
      <BreadcrumbComp items={breadcrumbItems} />
      <EditProfile userInfo={user} />
    </>
  )
}

export default Page