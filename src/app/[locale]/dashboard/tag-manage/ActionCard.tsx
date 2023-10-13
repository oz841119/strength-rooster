import DCard from "@/components/Dashboard/DCard"
import { useI18n } from "@/locales/client"
import { Button, Input } from "@nextui-org/react"
import { useState } from "react"
import Chips from "./Chips"

type Props = {
  actions: Array<string> | undefined,
  onSubmit: (group: string, name: string) => void,
  onDelete: (group: string, name: string) => void
}

export default function ActionCard({actions, onSubmit, onDelete}: Props) {
  const t = useI18n()
  const [actionInp, setActionInp] = useState('')
  const submitTag = () => {
    onSubmit('action', actionInp)
  }
  const deleteTag = (name: string) => {
    onDelete('action', name)
  }
  return (
    <DCard title="新增動作" isFull>
      <div className="flex gap-2 items-end mb-4">
        <Input label={t("menu name")} variant="bordered" className="max-w-xs" size="sm" value={actionInp} onValueChange={setActionInp} />
        <Button size="sm" color="success" variant="faded" onClick={submitTag}>送出</Button>
      </div>
      <Chips chips={actions} type="action" onClose={deleteTag} />
    </DCard>
  )
}