import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";

type Item = {
  id: number
  name: string
}
type Props = {
  label: string
  items: Array<Item>
}
export default function DDropdown({items, label}: Props) {
  return (
    <Dropdown backdrop="blur" className="bg-main">
      <DropdownTrigger>
        <Button variant="faded" className="w-full justify-start">{label}</Button>
      </DropdownTrigger>
      <DropdownMenu>
        {
          items && items.map(({name, id}) => (
            <DropdownItem key={id}>{name}</DropdownItem>
          ))
        }
      </DropdownMenu>
    </Dropdown>

  )
}