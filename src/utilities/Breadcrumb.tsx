import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const BreadcrumbComp = ({items}) => {
	return (
		<Breadcrumb>
		{items.map((item, index) => (
			<BreadcrumbItem key={index} isCurrentPage={index === items.length - 1}>
				<BreadcrumbLink href={item.href}>{item.name}</BreadcrumbLink>
			</BreadcrumbItem>
		))}
	</Breadcrumb>

	)
}

export default BreadcrumbComp