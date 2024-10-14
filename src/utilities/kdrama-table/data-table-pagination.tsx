"use client"


import { Button } from "@/components/ui/button"
import { Table } from "@tanstack/react-table"
import { useGoogleTranslate } from "../google-translate"

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeft,
  ChevronsRight,
  Trash
} from "lucide-react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import KdramaDelete from "@/components/kdrama/KdramaDelete"





interface DataTablePaginationProps<TData> {
  table: Table<TData>,
  row:any
  // setOpen: boolean
}

export function DataTablePagination<TData>({row, table }: DataTablePaginationProps<TData>) {
  const { language } = useGoogleTranslate();
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  console.log("row=====" ,row)

  // const [loading, setLoading] = useState(false);
  // const [open, setOpen] = useState(false);
  // const router = useRouter();

  // const rowsList = table.getFilteredSelectedRowModel().rows
  // const ids = rowsList.map((item) => item.original._id)


  // const onConfirm = async () => {
  //   try {
  //     setLoading(true);

  //     const requestBody = { ids: ids };
  //     await axios.delete('/api/users', { params: requestBody })
  //     router.refresh();

  //     setOpen(false)

  //   } catch (error) {
  //     console.error("delete error------>", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };




  return (
    <>
      <div className={` w-full flex items-center justify-between px-2 overflow-x-scroll md:overflow-x-hidden 
           ${language === "fa" ? "flex-row-reverse" : ""}
      `}>
        <div className={`flex justify-between items-center gap-x-4 ${language === "fa" ? "ml-4" : "mr-4"} `}>
          <div className="flex-1 text-sm text-muted-foreground whitespace-nowrap">
            {table.getFilteredSelectedRowModel().rows.length} از {" "}
            {table.getFilteredRowModel().rows.length} ردیف(ها) انتخاب شده.
          </div>

          {table.getFilteredSelectedRowModel().rows.length ?
            //  @ts-ignore 
            <Button variant="destructive" onClick={() => setIsDeleteOpen(true)}>
              <Trash className="mr-2 h-4 w-4" /> حذف
            </Button> : ""}
        </div>

        <div className="flex items-center space-x-6 lg:space-x-8">
          <div className={`flex items-center space-x-2 ${language === "fa" ? "gap-x-4" : ""} `}>

            <p className="text-sm font-medium whitespace-nowrap">ردیف به ازای هر صفحه</p>
            <Select
              value={`${table.getState().pagination.pageSize}`}
              onValueChange={(value: any) => {
                table.setPageSize(Number(value))
              }}
            >
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue placeholder={table.getState().pagination.pageSize} />
              </SelectTrigger>

              <SelectContent side="top">
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div >

          <div className="flex w-[100px] items-center justify-center text-sm font-medium gap-x-1">
            صفحه {table.getState().pagination.pageIndex + 1} از {" "}
            {table.getPageCount()}
          </div>

          <div className={`flex items-center space-x-2  ${language === "fa" ? "flex-row-reverse" : ""} `}>
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              {/* <span className="sr-only">برو به صفحه اول</span> */}
              <ChevronsLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {/* <span className="sr-only">برو به صفحه قبلی</span> */}
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              {/* <span className="sr-only">برو به صفحه بعدی</span> */}
              <ChevronRightIcon className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              {/* <span className="sr-only">برو به آخرین صفحه</span> */}
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>



      {/* Delete Dialog */}
      <KdramaDelete row={row} isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} />
    </>
  )
}