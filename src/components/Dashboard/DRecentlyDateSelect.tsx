import dayjs from "dayjs"

export default function DRecentlyDateSelect({onClick}: {onClick: (dayjs: dayjs.Dayjs) => void}) {
  const FROM_DAYS_BEFORE = 6
  const dates: Array<dayjs.Dayjs> = []
  for (let day = FROM_DAYS_BEFORE; day >= 0; day--) {
    dates.push(dayjs().subtract(day, 'day'))
  }
  return (
    <div className="flex gap-2">
      {dates.map(dayItem => (
        <div onClick={() => onClick(dayItem)} className="component_date-select" key={dayItem.date()}>{dayItem.date()}</div>
      ))}
    </div>
  )
}