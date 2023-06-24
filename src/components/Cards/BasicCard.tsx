type BasicCardProps = {
    styleColor: string,
    fontColor: string,
    title: string,
    children: React.ReactNode
    selection: React.ReactNode
}

export default function BasicCard({title, children, fontColor, styleColor, selection}: BasicCardProps) {
    return (
        <div 
            className="inline-block rounded-xl overflow-hidden" 
            style={{ 
                color: fontColor, backgroundColor: styleColor, 
                border: `2px solid ${styleColor}`
            }}
        >
            <h4 className="p-2 flex justify-between">
                <div>{title || '標題'}</div>
                <div>{selection}</div>
            </h4>
            <div className="p-2 bg-white text-black">{children}</div>
        </div>
    )
}