import DCard from "@/components/Dashboard/DCard"
import { useI18n } from "@/locales/client"
import { Button, Input } from "@nextui-org/react"
import { useState } from "react"
import Chips from "./Chips"

type Props = {
  menu: Array<string> | undefined,
  onSubmit: (group: string, name: string) => void,
  onDelete: (group: string, name: string) => void
}

export default function MenuCard({ menu, onSubmit, onDelete }: Props) {
  const t = useI18n()
  const [menuInp, setMenuInp] = useState('')
  const submitTag = () => {
    onSubmit('menu', menuInp)
  }
  const deleteTag = (name: string) => {
    onDelete('menu', name)
  }
  return (
    <DCard title="新增菜單" isFull>
      <div className="flex gap-2 items-end mb-4">
        <Input label={t("menu name")} variant="bordered" className="max-w-xs" size="sm" value={menuInp} onValueChange={setMenuInp} />
        <Button size="sm" color="success" variant="faded" onClick={submitTag}>送出</Button>
      </div>
      <Chips chips={menu} type="menu" onClose={deleteTag} />
    </DCard>
  )
}