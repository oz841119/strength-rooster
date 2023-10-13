'use client'
import DCard from "@/components/Dashboard/DCard";
import DRecentlyDateSelect from "@/components/Dashboard/DRecentlyDateSelect";
import DSelect from "@/components/Dashboard/DSelect";
import useTrainingForm from "@/hooks/useTraningForm";
import { Button, Input, Spacer } from "@nextui-org/react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useTagsSWR } from "@/hooks/swrHooks";
type BaseInputPorps = { type: "number", variant: "bordered", className: string, size: "sm" }
type SelectionTypes = 'menu' | 'name' | 'tags'

export default function Page() {
  const { tags } = useTagsSWR()
  const [menu, setMenu] = useState<Array<string>>([])
  const [annotation, setAnnotation] = useState<Array<string>>([])
  const [action, setAction] = useState<Array<string>>([])
  useEffect(() => {
    if(!tags) return 
    setMenu(tags.menu)
    setAnnotation(tags.annotation)
    setAction(tags.action)
  }, [tags])
  const BASE_INPUT_PROPS: BaseInputPorps = { type: "number", variant: "bordered", className: "mb-4", size: "sm" }
  const { trainingForm, setTrainingForm } = useTrainingForm({
    date: dayjs().format("YYYY-MM-DD"),
    sets: "1"
  })
  const onFormChange = (field: keyof typeof trainingForm, value: any) => setTrainingForm({ ...trainingForm, [field]: value })
  const onSelectChanege = (target: SelectionTypes, id: number) => setTrainingForm({ ...trainingForm, [target]: id.toString() })
  const onDateSelectClick = (dateItem: dayjs.Dayjs) => onFormChange('date', dateItem.format('YYYY-MM-DD'))
  const onSubmit = () => {
    console.log(trainingForm);
  }
  return (
    <div className="w-96 mx-auto">
      <DCard isFull>
        <Input value={trainingForm.date} onChange={(e) => onFormChange('date', e.target.value)} label="訓練日期" variant="bordered" className="mb-2" size="sm" placeholder="YYYY-MM-DD" />
        <div className=" mb-4 pr-2 flex justify-end">
          <DRecentlyDateSelect onClick={onDateSelectClick} />
        </div>
        <DSelect color="warning" items={menu} label="選擇菜單" onChange={(id) => onSelectChanege("menu", id)}></DSelect><Spacer y={4} />
        <DSelect color="secondary" items={action} label="訓練動作" onChange={(id) => onSelectChanege('name', id)}></DSelect><Spacer y={4} />
        <Input label="使用重量" value={trainingForm.weight} onValueChange={(val) => onFormChange('weight', val)} color="warning" {...BASE_INPUT_PROPS} />
        <Input label="訓練次數" value={trainingForm.reps} onValueChange={(val) => onFormChange('reps', val)} color="secondary" {...BASE_INPUT_PROPS} />
        <Input label="訓練組數" value={trainingForm.sets} onValueChange={(val) => onFormChange('sets', val)} color="primary" {...BASE_INPUT_PROPS} />
        <DSelect color="default" items={annotation} label="註記標籤" onChange={(id) => onSelectChanege('tags', id)}></DSelect><Spacer y={4} />
        <Button onClick={onSubmit} color="primary" className="w-full">送出紀錄</Button>
      </DCard>
    </div>
  )
}