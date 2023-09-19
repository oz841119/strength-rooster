"use client"
import DCard from "@/components/Dashboard/DCard";
import DDropdown from "@/components/Dashboard/DDropdown";
import { Button, Input, Spacer } from "@nextui-org/react";

export default function Page() {
  const menu = [{ name: '胸背腿大重量', id: 13 }, { name: '胸背腿手肩 5RM', id: 32 }, { name: '日常', id: 94 }, { name: '10/12 - 11/15 小重量多次數', id: 87 }]
  return (
    <div className="w-96 mx-auto">
      <DCard isFull>
        <DDropdown items={menu} label="選擇菜單"></DDropdown><Spacer y={4} />
        <DDropdown items={menu} label="訓練動作"></DDropdown><Spacer y={4} />
        <Input label="使用重量" color="warning" type="number" variant="bordered" className="mb-4" size="sm" />
        <Input label="訓練次數" color="secondary" type="number" variant="bordered" className="mb-4" size="sm" />
        <Input label="訓練組數" color="primary" type="number" variant="bordered" className="mb-4" size="sm" />
        <DDropdown items={menu} label="註記標籤"></DDropdown><Spacer y={4} />
        <Button color="primary" className="w-full">送出紀錄</Button>  
      </DCard>
    </div>
  )
}