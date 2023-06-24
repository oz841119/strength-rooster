'use client'

import BasicCard from '@/components/Cards/BasicCard'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
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

function Selection() {
  const actionSelections = ['槓鈴推', '啞鈴推']
  const [currAction, setCurrAction] = useState('槓鈴推')
  const handleChange = (event: any) => {
    setCurrAction(event.target.value)
  }
  return (
    <FormControl size='small' variant="standard" sx={{minWidth: 80}}>
      <Select
        sx={{fontSize: 12}}
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={currAction}
        onChange={handleChange}
        label="currAction"
      >
        <MenuItem sx={{fontSize: 12}} value={10}>Ten</MenuItem>
        <MenuItem sx={{fontSize: 12}} value={20}>Twenty</MenuItem>
        <MenuItem sx={{fontSize: 12}} value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  )
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
    <div className="flex flex-wrap">
      <BasicCard title="平均訓練記錄" styleColor="#64748b" fontColor="#fff" selection={<Selection/>}>
        <div className='w-80 h-80 p-3'>
          {avgTrainingRecords && <LineChartAsAvgTrainingRecord dataKey={'avg_weight'} data={avgTrainingRecords} />}
        </div>
      </BasicCard>
      {/* <div className=" w-64">
        <Selection />
      </div> */}
    </div>
  )
}