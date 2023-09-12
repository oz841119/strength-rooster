import { Chip } from "@nextui-org/react";

type Chip = {
  name: string
  id: number
}

type ChipsProps = {
  chips: Array<Chip>
  type?: 'menu' | 'tag'
  onClose: (chip: Chip) => void
}

export default function Chips({chips, type, onClose}: ChipsProps) {
  const color = type === "menu" ? "warning" : "default"
  return chips.map(chip => (
    <Chip color={color} variant="bordered" onClose={() => onClose(chip)}>{chip.name}</Chip>
  ))
}