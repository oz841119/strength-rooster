"use client"

import TrainingForm from "./TrainingForm"
import OneRmForm from "./OneRmForm"

export default function Page() {
  return (
    <div className="flex gap-5 items-start">
      <TrainingForm/>
      <OneRmForm/>
    </div>
  )
}