'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
const LineChartAsAvgTrainingRecord = dynamic(() => import("@/components/charts/LineChartAsAvgTrainingRecord"), { ssr: false })

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
      <div className='border-4 border-slate-500 border-solid inline-block rounded-lg overflow-hidden bg-white'>
        <div className="font-bold bg-slate-500 p-2 text-zinc-50 text-center">平均訓練記錄</div>
        <div className='w-80 h-80 p-3'>
          {avgTrainingRecords && <LineChartAsAvgTrainingRecord dataKey={'avg_weight'} data={avgTrainingRecords} />}
        </div>
      </div>
    </div>
  )
}