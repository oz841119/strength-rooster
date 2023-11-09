import DCard from '@/components/Dashboard/DCard'
import TrainingChart from '@/components/charts/TrainingChart'
import DateBtnGround from './DateBtnGround'
interface Training {
  weight: number
  reps: number
  date: string
}

export default function Page() {
  const trainings: Array<Training> = [{ weight: 80, reps: 12, date: '2022-12-12' }, { weight: 80, reps: 11, date: '2022-12-12' }, { weight: 80, reps: 10, date: '2022-12-12' }, { weight: 80, reps: 10, date: '2022-12-12' }, { weight: 85, reps: 12, date: '2022-12-20' }, { weight: 80, reps: 12, date: '2022-12-20' }, { weight: 80, reps: 11, date: '2022-12-20' }, { weight: 80, reps: 10, date: '2022-12-20' }]
  return (
    <div className='w-full'>
      <DCard isFull>
        <DateBtnGround/>
        <TrainingChart data={trainings} />
      </DCard>
    </div>
  )
}