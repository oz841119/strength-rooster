"use client"
import { useState } from "react"

type DateValue = '1m' | '3m' | '6m'
type Btn = {
  value: DateValue, label: string
}
export default function DateBtnGround() {
  const btns: Array<Btn> = [
    {value: '1m', label: '近一月'},
    {value: '3m', label: '近三月'},
    {value: '6m', label: '近六月'}
  ]
  const [currActive, setCurrActive] = useState<DateValue>('1m')
  const BASE_BTN_CLASS_NAME = "group relative h-7 w-16 rounded-lg text-sm font-bold border-gray-500 border text-gray-500 "
  const ACTIVE_BTN_CLASS_NAME = "border-green-500"
  return (
    <div className="flex gap-3">
      {btns.map(btn => (
        <button key={btn.value} className={`${BASE_BTN_CLASS_NAME} ${currActive === btn.value && ACTIVE_BTN_CLASS_NAME} bg-green-500`}>{btn.label}</button>
      ))}
    </div>
  )
}