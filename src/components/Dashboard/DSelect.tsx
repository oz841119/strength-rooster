import { Select, SelectItem } from "@nextui-org/react";

type Item = {
  id: number
  name: string
}
type Props = {
  label: string
  items: Array<string>
  color: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | undefined
  onChange: (id: Item["id"]) => void
}
export default function DSelect({ items, label, onChange, color }: Props) {
  const onSelectionChange = (e: any) => {
    onChange(e.target.value)}
  return (
    <Select label={label} onChange={(e) => {onSelectionChange(e)}} color={color}>
      {items && items.map((item, index) => (
        <SelectItem key={index} value={item}>
          {item}
        </SelectItem>
      ))}
    </Select>
  )
}