import { ReactNode } from "react"

interface Props {
  title?: string
  children: ReactNode
  isFull?: boolean
  className?: string
}

export default function DCard({children, title, isFull, className}: Props) {
  let classNames = "py-4 px-5 bg-white rounded-xl inline-block shadow-sm "
  if(isFull) classNames += "w-full "
  if(className) classNames += className
  return (
    <div className={classNames}>
      {title && (
        <h4 className="mb-5 text-card-title w-full">
          {title}
        </h4>
      )}
      {children}
    </div>
  )
}