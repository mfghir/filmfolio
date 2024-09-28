import TabKdramaList from '@/components/dashboard/TabKdramaList'
import BreadcrumbComp from '@/utilities/Breadcrumb';
// import BreadCrumb from '@/utilities/breadcrumb';

const Page = () => {
  const breadcrumbItems = [
    { title: "KDrama List", link: "/dashboard/kdrama-list" },
  ];

  return (
    <>
      <BreadcrumbComp items={breadcrumbItems} />
      <TabKdramaList />
    </>
  )
}

export default Page