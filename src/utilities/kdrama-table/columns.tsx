"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { labels, genres, statuses, MovieList, sorts, nationalities } from "@/lib/data"

import { DataTableColumnHeader } from "./DataTableColumnHeader"
import KdramaEdit from "@/components/kdrama/KdramaEdit"
import KdramaDelete from "@/components/kdrama/KdramaDelete"
import KdramaCopy from "@/components/kdrama/KdramaCopy"
import { Checkbox } from "@/components/ui/checkbox"
// import KdramaEdit from "@/components/KdramaEdit"

// import KdramaDelete from "@/components/KdramaDelete"
// import KdramaCopy from "@/components/KdramaCopy"
import { DataTableRowActions } from "./DataTableRowActions"




export const columns: ColumnDef<MovieList>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),

    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },


  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="عنوان" />
    ),
    cell: ({ row }) => {
      // const label = labels.find((label) => label.value === row.original.label)

      return (
        <div className="flex space-x-2">
          <span className="max-w-[120px] truncate font-medium">
            {row.getValue("title")}
          </span>
          {/* {label && <Badge variant="outline">{label.label}</Badge>} */}
        </div>
      )
    },
  },


  {
    id: "label",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="برچسب" />
    ),
    cell: ({ row }) => {
      // const label = labels.find((label) => label.value === row.original.label)

      // const label = labels.find((label) => label.value === row.getValue("label"))
      // console.log( "row  +++++++++++++++----> ", label)
      // // if (!label) return null

      // console.log( "row ----> ",row.original.label)
      // console.log( "row  22----> ",row.getValue("label"))

      return (
        <div className="flex space-x-2">
          <span className="bg-red-600">
            {/* {row.getValue("label")} ******** */}
            {/* {label?.label} */}
          </span>
          {row.original.label && <Badge variant="outline">{row.original.label}</Badge>}
        </div>
      )
    },
  },

  {
    accessorKey: "genre",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ژانر" />
    ),
    cell: ({ row }) => {
      const genre = genres.find((genre) => genre.value === row.getValue("genre"))
      if (!genre) return null

      return (
        <div className="flex items-center">
          {/* {genre.icon && (
            <genre.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )} */}
          <span>{genre.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },


  {
    accessorKey: "opinion",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="نظر" />
    ),
    cell: ({ row }) => {

      return (
        <div className="flex space-x-2">
          <span className="max-w-[300px] whitespace-pre-wrap font-medium">
            {row.getValue("opinion")}
          </span>
        </div>
      )
    },
  },











  {
    accessorKey: "sort",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="نوع" />
    ),
    cell: ({ row }) => {
      const sort = sorts.find((sort) => sort.value === row.getValue("sort"))
      if (!sort) return null

      return (
        <div className="flex items-center">
          <span>{sort.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },



  {
    accessorKey: "nationality",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ملیت" />
    ),
    cell: ({ row }) => {
      const nationality = nationalities.find((nationality) => nationality.value === row.getValue("nationality"))
      if (!nationality) return null

      return (
        <div className="flex items-center">
          <span>{nationality.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },





  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="وضعیت" />
    ),
    cell: ({ row }) => {
      const status = statuses.find((status) => status.value === row.getValue("status"))
      if (!status) return null

      return (
        <div className="flex w-[100px] items-center">
          {/* @ts-ignore */}
          {status.icon && (
            //  @ts-ignore 
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: "actions",
    cell: ({ row ,column,table, getValue}) => {

      const movies = row.original
      console.log("movies",movies);

      console.log("row",row);
      console.log("column",column);
      console.log("table",table);
      return <DataTableRowActions row={row} column={column} table={table} getValue={getValue} />
      // return <DataTableRowActions row={row} column={column} table={table} getValue={getValue} />
    }
  },

  // {
  //   id: "edit",
  //   cell: ({ row }) => {
  //     return <KdramaEdit row={row} />
  //   }
  // },
  // {
  //   id: "delete",
  //   cell: ({ row }) => {
  //     return <KdramaDelete row={row} />
  //   }
  // },
  {
    id: "copy",
    cell: ({ row }) => {
      return <KdramaCopy row={row} />
    }
  }
]
