'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
const LineChartAsAvgTrainingRecord = dynamic(() => import("@/components/charts/LineChartAsAvgTrainingRecord"), {ssr: false})

type recordData = {
  avg_times: number,
  avg_weight: number,
  name: string,
  groups: number,
  date: string
}
export default function Page() {
  const [avgTrainingRecords, setAvgTrainingRecords] = useState<null | recordData[]>(null)
  useEffect(() => {
    fetch('/api/record')
      .then(async res => {
        setAvgTrainingRecords(await res.json());
      })
  }, [])
  return (
    <div> 
      <div className="font-bold">平均訓練記錄</div>
      <div className='w-80 h-80'>
        {avgTrainingRecords && <LineChartAsAvgTrainingRecord dataKey={'avg_weight'} data={avgTrainingRecords}/>}
      </div>
    </div>
  )
}