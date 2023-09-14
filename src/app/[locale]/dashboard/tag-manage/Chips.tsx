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

export default function Chips({ chips, type, onClose }: ChipsProps) {
  const color = type === "menu" ? "warning" : "default"
  return (
    <div className="flex gap-2 flex-wrap">
      {chips.map(chip => (
        <Chip color={color} variant="bordered" onClose={() => onClose(chip)}>{chip.name}</Chip>
      ))}
    </div>
  )
}