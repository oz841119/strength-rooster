import DCard from "@/components/Dashboard/DCard"
import { useI18n } from "@/locales/client"
import { Button, Input } from "@nextui-org/react"
import { useState } from "react"
import Chips from "./Chips"

type Menu = { name: string, id: number }

export default function ActionCard() {
  const t = useI18n()

  const [actions, setActions] = useState([
    { name: '平板槓鈴臥推', id: 13 },
    { name: '上斜槓鈴臥推', id: 32 },
    { name: '下斜槓鈴臥推', id: 94 },
    { name: '上斜啞鈴臥推', id: 87 },
    { name: '槓鈴深蹲', id: 33 },
    { name: '器械 - 平板臥推', id: 11 },
    { name: '傳統硬舉', id: 12 },
    { name: '相撲硬舉', id: 84 },
    { name: '器械 - 臀橋', id: 15 },
    { name: '槓鈴 - 臀橋', id: 16 },
  ])
  const onCloseAction = (action: Menu) => {
    setActions(actions.filter(e => e !== action))
  }

  const [actionInp, setActionInp] = useState('')
  const onActionSubmit = () => {
    console.log(actionInp);
  }
  return (
    <DCard title="新增動作" isFull>
      <div className="flex gap-2 items-end mb-4">
        <Input label={t("menu name")} variant="bordered" className="max-w-xs" size="sm" value={actionInp} onValueChange={setActionInp} />
        <Button size="sm" color="success" variant="faded" onClick={onActionSubmit}>送出</Button>
      </div>
      <Chips chips={actions} type="action" onClose={onCloseAction} />
    </DCard>
  )
}