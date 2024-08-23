import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import React from "react";

interface BreadcrumbItem {
  title: string;
  link: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem;
}

const BreadcrumbComp = ({ items }: BreadcrumbProps) => {
  // Ensure items is an array
  const breadcrumbItems = Array.isArray(items) ? items : [];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems.map((item: BreadcrumbItem, index: number) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink href={item.link}>{item.title}</BreadcrumbLink>
            </BreadcrumbItem>
            {index < breadcrumbItems.length - 1 && (
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbComp;
