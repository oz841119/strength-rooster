import DCard from "@/components/Dashboard/DCard"
import { useI18n } from "@/locales/client"
import { Button, Input } from "@nextui-org/react"
import { useState } from "react"
import Chips from "./Chips"


export default function ActionCard({actions}: {actions: Array<string>}) {
  const t = useI18n()
  const onCloseAction = (action: string) => {
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