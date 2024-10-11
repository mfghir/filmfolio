"use client"

import { Table } from "@tanstack/react-table"
import { Cross2Icon } from "@radix-ui/react-icons"
import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button"
import { genres, nationalities, sorts, statuses } from "@/lib/data"
import { DataTableFacetedFilter } from "./data-table-faceted-filter"

import { DataTableViewOptions } from "./data-table-view-options"
import { usePathname } from "next/navigation"
import KdramaAdd from "@/components/kdrama/KdramaAdd"
import { DataTableRowActions } from "./DataTableRowActions"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0
  // const { data: session } = useSession();
  const pathname = usePathname()



  return (
    <>
      <section className="w-full flex items-center justify-between gap-x-12 overflow-x-scroll lg:overflow-x-hidden">
        <div className=" flex items-center gap-x-2">
          <Input
            className="h-10 w-[180px] lg:w-[250px]"
            placeholder="نام فیلم، ژانر ..."
            value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("title")?.setFilterValue(event.target.value)
            }
          />

          {table.getColumn("status") && (
            <DataTableFacetedFilter
              column={table.getColumn("status")}
              title="وضعیت"
              options={statuses}
            />
          )}

          {table.getColumn("genre") && (
            <DataTableFacetedFilter
              column={table.getColumn("genre")}
              title="ژانر"
              options={genres}
            />
          )}

          {table.getColumn("sort") && (
            <DataTableFacetedFilter
              column={table.getColumn("sort")}
              title="نوع"
              options={sorts}
            />
          )}


          {table.getColumn("nationality") && (
            <DataTableFacetedFilter
              column={table.getColumn("nationality")}
              title="ملیت"
              options={nationalities}
            />
          )}
          {isFiltered && (
            <Button
              variant="ghost"
              onClick={() => table.resetColumnFilters()}
              className="h-8 px-2 lg:px-3"
            >
              راه اندازی مجدد
              <Cross2Icon className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>

        <div className=" flex justify-end items-center gap-x-2 ">
          {pathname === "/dashboard/kdrama-list" && <KdramaAdd />}
          <DataTableViewOptions table={table} />
          {/* <DataTableRowActions table={table} column={undefined} row={undefined} getValue={undefined} /> */}
        </div>
      </section>
    </>

  )
}