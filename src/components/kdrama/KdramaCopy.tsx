
import { Button } from "../ui/button"
import { useToast } from "../ui/use-toast"

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const KdramaCopy = ({ row }: { row: any }): JSX.Element => {
  const { toast } = useToast()

  const copyHandler = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "به کلیپ‌برد کپی شد! ✔",
      description: `اسم فیلم/سریال: ${text}`,
    })
  }

  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={() => copyHandler(row.original.title)}
    >
      کپی
    </Button>
  )
}

export default KdramaCopy