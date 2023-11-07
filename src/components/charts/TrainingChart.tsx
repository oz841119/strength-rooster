'use client'
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { Label, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
const LineChart = dynamic(() => import("recharts").then(mod => mod.LineChart), { ssr: false, loading: () => (<div>Loading...</div>) })

interface SingleSetTraining {
  weight: number
  reps: number
  date: string
}
interface Props {
  data: Array<SingleSetTraining>
}

interface Capacity {
  date: string
  capacity: number
}

const useCapacityList = (trainingData: Array<SingleSetTraining>) => {
  const [capacityList, setCapacity] = useState<Array<Capacity>>([])
  useEffect(() => {
    const target: Array<Capacity> = []
    trainingData.forEach(({weight, reps, date}) => {
      target.push({date: date, capacity: weight * reps})
    })
    setCapacity(target)
  }, [trainingData])
  return capacityList
}

export default function TrainingChart({ data }: Props) {
  const capacityList = useCapacityList(data)
  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={100} className="mb-8">
        <LineChart data={capacityList} syncId="anyId">
          <XAxis hide dataKey="date"/>
          <YAxis domain={['dataMin', 'dataMax']} interval="preserveStartEnd" tick={{fontSize: 12}}/>
          <Line type="monotone" dataKey="capacity" stroke="#82ca9d" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height={100} className="mb-8">
        <LineChart data={data} syncId="anyId">
          <XAxis hide dataKey="date"/>
          <YAxis domain={['dataMin', 'dataMax']} interval="preserveStartEnd" tick={{fontSize: 12}}/>
          <Line type="monotone" dataKey="weight" stroke="#82ca9d" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height={100}>
        <LineChart data={data} syncId="anyId">
          <XAxis tick={false} tickLine={false} dataKey="date"/>
          <YAxis domain={['dataMin', 'dataMax']} interval="preserveStartEnd" tick={{fontSize: 12}}/>
          <Line type="monotone" dataKey="reps" stroke="#82ca9d" />
          <Tooltip/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}