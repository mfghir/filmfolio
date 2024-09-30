import TabKdramaList from '@/components/dashboard/TabKdramaList'
import BreadcrumbComp from '@/utilities/Breadcrumb';

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