"use client"



import React, { useState } from 'react'; // Replace with correct import path
import { IconSortAscending, IconSortDescending, IconChevronDown } from '@tabler/icons-react'; // Replace with your icons
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Button } from '@/components/ui/button';


import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';






interface FilterSelectProps {
  label: string;
  icon: React.ReactNode;
  onSortChange: (order: 'asc' | 'desc') => void;
}

const FilterSelect: React.FC<FilterSelectProps> = ({
  label,
  icon,
  onSortChange,
}) => {
  const handleChange = (value: string) => {
    const order = value as 'asc' | 'desc';
    onSortChange(order);
  };

  return (
    <div className="flex items-center space-x-2">
      <Select onValueChange={handleChange}>
        <SelectTrigger className="w-32 rounded-lg flex-row-reverse">
          <div className="flex  gap-x-2 justify-center items-center">
            <span className="">{icon}</span>
            <SelectValue placeholder={label} />

          </div>

        </SelectTrigger>


        <SelectContent>
          <SelectGroup>
            <SelectLabel className="flex flex-row-reverse">{label}</SelectLabel>
            <SelectItem value="asc" className="flex flex-row-reverse">
              صعودی
              <IconSortAscending size={16} className="inline mr-1" />
            </SelectItem>
            <SelectItem value="desc" className="flex flex-row-reverse">
              نزولی
              <IconSortDescending size={16} className="inline mr-1" />
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterSelect;