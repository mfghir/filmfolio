import { DataTable } from "@/utilities/kdrama-table/data-table"

const TabKdramaList = ({data} :{data:any}) => {
  return (
    <div className="w-full h-full">
      <DataTable dataTest={data} />
    </div>
  )
}

export default TabKdramaList