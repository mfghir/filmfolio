import TabChangePassword from "@/components/dashboard/TabChangePassword";
import BreadcrumbComp from "@/utilities/Breadcrumb";

const page = async () => {
  const breadcrumbItems = [
    { title: "تغییر رمز", link: "/dashboard/change-password " },
  ];

  return (
    <>
      <BreadcrumbComp items={breadcrumbItems} />
      <TabChangePassword />
    </>
  )
}

export default page