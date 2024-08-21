"use client"



import React, { useState } from 'react'; // Replace with correct import path
import { IconSortAscending, IconSortDescending, IconChevronDown } from '@tabler/icons-react'; // Replace with your icons
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Button } from '@/components/ui/button';

interface FilterDropdownProps {
  label: string;
  icon: React.ReactNode;
  onSortChange: (order: 'asc' | 'desc') => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  label,
  icon,
  onSortChange,
}) => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);

  const handleSortChange = (order: 'asc' | 'desc') => {
    setSortOrder(order);
    onSortChange(order);
  };

  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button className="flex items-center px-3 py-2 text-sm rounded-lg bg-white text-gray-700 border border-gray-300 shadow hover:bg-pink-100 transition-colors duration-200">
        {icon}
        <span className="mx-2">{label}</span>
        <IconChevronDown size={16} />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
      <DropdownMenuItem onClick={() => handleSortChange('asc')}>
        <IconSortAscending size={16} className="mr-2" />
        مرتب‌سازی صعودی
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => handleSortChange('desc')}>
        <IconSortDescending size={16} className="mr-2" />
        مرتب‌سازی نزولی
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  );
};

export default FilterDropdown;
