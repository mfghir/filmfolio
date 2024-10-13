"use client"

import { useState } from "react"
import { Column, Row, Table } from "@tanstack/react-table"
import { useGoogleTranslate } from "../google-translate"


import KdramaDelete from "@/components/kdrama/KdramaDelete"
import KdramaEdit from "@/components/kdrama/KdramaEdit"
import { useToast } from "@/components/ui/use-toast"

import { Button } from "@/components/ui/button"
import { Ellipsis } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"




interface DataTableRowActionsProps<TData> {
  table: Table<TData>
  column: Column<TData>
  row: Row<TData>
  getValue: any
}

export function DataTableRowActions<TData>({ row }: DataTableRowActionsProps<TData>) {
  // const drama = movieSchema.parse(row.original)
  const { language } = useGoogleTranslate();

  const { toast } = useToast()
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  // const copyHandler = (text: string) => {
  //   navigator.clipboard.writeText(text)
  //   toast({
  //     title: "Copy to clipboard! ✔",
  //     description: `Drama Name: ${text}`,
  //   })
  // }



  return (
    <>
      {/* <Dialog> */}
      <DropdownMenu >
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <Ellipsis className="h-4 w-4" />
            {/* <span className="sr-only">Open menu</span> */}
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className={`w-[160px] ${language === "fa" ? "rtl" : "ltr"}`}>
          <DropdownMenuItem>جزئیات</DropdownMenuItem>

          {/* Edit Option */}
          <DropdownMenuItem onClick={() => setIsEditOpen(true)}>
            ویرایش
          </DropdownMenuItem>

          {/* Copy Option */}
          {/* <DropdownMenuItem onClick={() => copyHandler(row.original.----)}>
            کپی
          </DropdownMenuItem> */}

          <DropdownMenuSeparator />

          {/* Delete Option */}
          <DropdownMenuItem onClick={() => setIsDeleteOpen(true)}>
            حذف
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* </Dialog> */}






      {/* Edit Dialog */}
      <KdramaEdit row={row} isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} />

      {/* Delete Dialog */}
      <KdramaDelete row={row} isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} />
    </>
  )
}