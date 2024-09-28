import TabUserAdd from '@/components/dashboard/user-add'
import BreadcrumbComp from '@/utilities/Breadcrumb';

const page = () => {
  const breadcrumbItems = [
    { title: "Users", link: "/dashboard/users" },
    { title: "Create", link: "/dashboard/users/create" },
  ];

  return (
    <div className="flex-1 space-y-4 h-auto">
      <BreadcrumbComp items={breadcrumbItems} />
      <TabUserAdd />
    </div>
  )
}

export default page