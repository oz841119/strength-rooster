import { Chip } from "@nextui-org/react";

type Chip = {
  name: string
  id: number
}

type ChipsProps = {
  chips: Array<Chip>
  type?: 'menu' | 'tag' | 'action'
  onClose: (chip: Chip) => void
}

type TypeColorMap = {
  'menu': 'warning',
  'tag': 'default',
  'action': 'secondary'
}
const typeColorMap: TypeColorMap = {
  'menu': 'warning',
  'tag': 'default',
  'action': 'secondary'
}

export default function Chips({ chips, type, onClose }: ChipsProps) {
  const color = type ? typeColorMap[type] : "default"
  console.log(chips);
  
  return (
    <div className="flex gap-2 flex-wrap">
      {chips.map(chip => (
        <Chip key={chip.id} color={color} variant="bordered" onClose={() => onClose(chip)}>{chip.name}</Chip>
      ))}
    </div>
  )
}