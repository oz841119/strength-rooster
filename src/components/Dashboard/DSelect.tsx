import { Select, SelectItem } from "@nextui-org/react";

type Item = {
  id: number
  name: string
}
type Props = {
  label: string
  items: Array<Item>
  onChange: (id: Item["id"]) => void
}
export default function DSelect({ items, label, onChange }: Props) {
  const onSelectionChange = (e: any) => {
    onChange(e.target.value)}
  return (
    <Select label={label} onChange={(e) => {onSelectionChange(e)}}>
      {items && items.map(({ name, id }) => (<SelectItem key={id} value={id}>{name}</SelectItem>))}
    </Select>
  )
}