
import TopDetailUserPage from "@/components/pages/TopDetailUserPage";
import BreadcrumbComp from "@/utilities/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Detail User',
}


const TopUser = ({ topUserId }: { topUserId: string }) => {

  const breadcrumbItems = [
    { title: "خانه", link: "/" },
    { title: "برترین ها", link: "/the-best" },
    { title: "برترین کاربران", link: "/the-best/top-users" },
    { title: " جزئیات کاربر", link: `/the-best/top-users/${topUserId}` },
  ];
  return (
    <>
      {/* @ts-ignore */}
      <BreadcrumbComp items={breadcrumbItems} />
      <TopDetailUserPage />
    </>
  )
};

export default TopUser;