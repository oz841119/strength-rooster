import { Select, SelectItem } from "@nextui-org/react";

type Props = {
  label: string
  items: Array<string>
  color: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | undefined
  onChange: (value: any) => void
  className?: string
}
export default function DSelect({ items, label, onChange, color, className }: Props) {
  const onSelectionChange = (e: any) => onChange(items[e.target.value])
  return (
    <Select label={label} onChange={(e) => {onSelectionChange(e)}} color={color} className={className}>
      {items && items.map((item, index) => (
        <SelectItem key={index} value={item}>
          {item}
        </SelectItem>
      ))}
    </Select>
  )
}