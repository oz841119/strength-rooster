import DCard from "@/components/Dashboard/DCard"
import { Button, Input } from "@nextui-org/react"
import { useState } from "react"
import Chips from "./Chips"

type Props = {
  annotations: Array<string> | undefined,
  onSubmit: (group: string, name: string) => void,
  onDelete: (group: string, name: string) => void
}
export default function MenuCard({annotations, onSubmit, onDelete}: Props) {
  const [annotationInp, setAnnotationInp] = useState('')
  const submitTag = () => {
    onSubmit('annotation', annotationInp)
  }
  const deleteTag = (name: string) => {
    onDelete('annotation', name)
  }
  return (
    <DCard title="新增標籤" isFull>
      <div className="flex gap-2 items-end mb-4">
        <Input label="標籤名稱" variant="bordered" className="max-w-xs" size="sm" value={annotationInp} onValueChange={setAnnotationInp} />
        <Button size="sm" color="success" variant="faded" onClick={submitTag}>送出</Button>
      </div>
      <Chips chips={annotations} onClose={deleteTag} type="tag"/>
    </DCard>
  )
}