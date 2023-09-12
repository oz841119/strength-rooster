import { ReactNode } from "react"

interface Props {
  title?: string
  children: ReactNode
  isFull?: boolean
}

export default function DCard({children, title, isFull}: Props) {
  let classNames = "py-4 px-5 rounded-lg border border-default-100 inline-block"
  if(isFull) classNames += " w-full"
  return (
    <div className={classNames}>
      {title && (
        <h4 className="mb-5 text-card-title">
          {title}
        </h4>
      )}
      {children}
    </div>
  )
}