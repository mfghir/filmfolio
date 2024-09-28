import TabChangePassword from "@/components/dashboard/TabChangePassword";
import BreadcrumbComp from "@/utilities/Breadcrumb";
// import BreadCrumb from "@/utilities/breadcrumb";

const page = async () => {
  const breadcrumbItems = [
    { title: "Change Password", link: "/dashboard/change-password " },
  ];

  return (
    <>
      <BreadcrumbComp items={breadcrumbItems} />
      <TabChangePassword />
    </>
  )
}

export default page