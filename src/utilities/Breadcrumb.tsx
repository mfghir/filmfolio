import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

interface BreadcrumbItem {
  title: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const BreadcrumbComp = ({ items }: BreadcrumbProps) => {
  // Ensure items is an array
  const breadcrumbItems = items || [];

  return (
    <Breadcrumb >
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => (
          <>
            <BreadcrumbItem key={index}>
              <BreadcrumbLink href={item.link}>{item.title}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbComp;
