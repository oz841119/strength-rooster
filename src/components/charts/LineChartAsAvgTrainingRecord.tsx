import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, YAxis } from 'recharts';


type AvgTrainRecordData = {
  avg_times: number,
  avg_weight: number,
  name: string,
  groups: number,
  date: string
}
type LineChartAsAvgTrainingRecordProps = {
  data: Array<AvgTrainRecordData>,
  dataKey: string
}

export default function BasicLineChart({data, dataKey}: LineChartAsAvgTrainingRecordProps) {
  const TooltipContent = (info: any) => {
    const {active, label, payload} = info
    if(active === false || payload[0] === undefined) return null
    const {avg_times, avg_weight, name, groups} = payload[0].payload
    
    return (
      <div className="p-2 border-solid border-1 text-xs bg-white">
        <div>{label}</div>
        <div className="font-bold">{name}</div>
        <div>平均重量: {avg_weight}</div>
        <div>平均重量: {avg_times}</div>
        <div>組數: {groups}</div>
      </div>
    )
  }
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <XAxis dataKey="date" interval="preserveStartEnd" tick={{fontSize: 10}}/>
        <YAxis type="number" domain={['dataMin-10', 'dataMax+10']} hide/>
        <Tooltip content={<TooltipContent/>}/>
        <Line type="monotone" dataKey={dataKey} stroke="#8884d8"/>
      </LineChart>
    </ResponsiveContainer>
  )
}