import DCard from "@/components/Dashboard/DCard"
import { Button, Input } from "@nextui-org/react"
import { useState } from "react"
import Chips from "./Chips"

export default function MenuCard({annotations}: {annotations: Array<string>}) {
  const onCloseMenu = (annotation: string) => {
  }

  const [annotationInp, setAnnotationInp] = useState('')
  const onTagSubmit = () => {
    console.log('');
  }
  return (
    <DCard title="新增標籤" isFull>
      <div className="flex gap-2 items-end mb-4">
        <Input label="標籤名稱" variant="bordered" className="max-w-xs" size="sm" value={annotationInp} onValueChange={setAnnotationInp} />
        <Button size="sm" color="success" variant="faded" onClick={onTagSubmit}>送出</Button>
      </div>
      <Chips chips={annotations} onClose={onCloseMenu} type="tag"/>
    </DCard>
  )
}