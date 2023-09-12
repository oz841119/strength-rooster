import DCard from "@/components/Dashboard/DCard"
import { Button, Input } from "@nextui-org/react"
import { useState } from "react"
import Chips from "./Chips"

type Tag = {name: string, id: number}
export default function MenuCard() {
  const [tags, setTags] = useState([{ name: '練腿日', id: 1 }, { name: '練胸日', id: 3 }, { name: '大重量', id: 12 }])
  const onCloseMenu = (tag: Tag) => {
    setTags(tags.filter(e => e !== tag))
  }

  const [tagInp, setTagInp] = useState('')
  const onTagSubmit = () => {
    console.log('');
  }
  return (
    <DCard title="新增標籤" isFull>
      <div className="flex gap-2 items-end mb-4">
        <Input label="標籤名稱" variant="bordered" className="max-w-xs" size="sm" value={tagInp} onValueChange={setTagInp} />
        <Button size="sm" color="success" variant="faded" onClick={onTagSubmit}>送出</Button>
      </div>
      <div className="flex gap-2">
        <Chips chips={tags} onClose={onCloseMenu} type="tag"/>
      </div>
    </DCard>
  )
}