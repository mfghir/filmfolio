"use client"

import { useState } from "react"
import { DataTableToolbar } from "./data-table-toolbar"
import { DataTablePagination } from "./data-table-pagination"

import {
  ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { useMemo } from 'react'
import { useKdramasData } from "@/lib/queries"
import { columns } from '@/utilities/kdrama-table/columns'

import { useToast } from "@/components/ui/use-toast"
import { Heading } from "@/templates/dashboard/heading"
import { AlertModal } from "@/templates/alert-modal"
import axios from "axios"
import { useRouter } from "next/navigation"



export function DataTable<TValue>({ kdramaList }: any) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const { toast } = useToast()
  


  

  const { data: serverData } = useKdramasData()
  // const data = useMemo(() => serverData ?? [], [serverData]);
  const data = useMemo(() => {
    return kdramaList ? kdramaList : serverData ? serverData : [];
  }, [serverData, kdramaList]);

  const table = useReactTable({
    data,
    //  @ts-ignore 
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  


  
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const rowsList = table.getFilteredSelectedRowModel().rows
  const ids = rowsList.map((item) => item.original._id)


  const onConfirm = async () => {
    try {
      setLoading(true);

      const requestBody = { ids: ids };
      await axios.delete('/api/drama', { params: requestBody })

      // table.setRowSelection([]);  // v.1 - this unselected the rows
      table.resetRowSelection(true) // v.2 - this unselected the rows

      router.refresh();
      setOpen(false)

    } catch (error) {
      console.error("delete error------>", error);
    } finally {
      setLoading(false);
    }
  };





  // const copyHandler = (text: string) => {
  //   navigator.clipboard.writeText(text)
  //   toast({
  //     title: "Copy to clipboard! ✔",
  //     description: `Drama Name: ${text}`,
  //   })
  // }




  return (
    <>
      <div className="my-3">
        <Heading
          title={`مجموع دیده شده ها  (${data.length})`}
          // description="list of kdramas in database"
        />
      </div>

      <div className="w-auto flex items-center justify-between py-4 overflow-x-scroll md:overflow-x-hidden">
        <DataTableToolbar table={table} />
      </div>


      <div className="rounded-md border h-[calc(82vh-220px)] overflow-scroll md:overflow-x-hidden p-4">
      {/* <div className="rounded-md border h-[calc(82vh-220px)] overflow-scroll p-4 relative"> */}
        <Table className="relative ">
          <TableHeader className="">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody className="w-full">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                // onClick={() => copyHandler(row.original.title)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="w-auto flex items-center justify-end space-x-2 py-4">
        <DataTablePagination row={table.getRowModel().rows} table={table} />
      </div>

      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
    </>
  )
}
