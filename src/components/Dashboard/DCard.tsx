import { ReactNode } from "react"

interface Props {
  title?: string
  children: ReactNode
}

export default function DCard({children, title}: Props) {
  return (
    <div className="bg-side py-4 px-5 rounded-lg inline-flex flex-col">
      {title && (
        <h4 className="mb-5 text-card-title">
          {title}
        </h4>
      )}
      {children}
    </div>
  )
}