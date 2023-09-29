import { usePathname } from "next/navigation"
import { ReactElement, createContext, useContext } from "react"

const MenuPathName: Record<string, string> = {
  "": '總覽',
  "create-training": "記錄訓練",
  "training": "訓練分析",
  "create-aerobic": "記錄有氧",
  "aerobic": "有氧分析",
  "tag-manage": "標籤管理",
}

const getCurrMenuName = (path: string) => {
  const menuPathName = path.match(/\/zh-tw\/dashboard\/([^/]+)/)
  if (!menuPathName) return MenuPathName[""]
  const name = menuPathName[1]
  return MenuPathName[name] || undefined
}

type DashboardContextStore = {
  menuName: string | undefined
}

export const DashboardContext = createContext<DashboardContextStore | null>(null)

export function DashboardContextProvider({ children }: { children: ReactElement }) {
  const path = usePathname()
  const menuName = getCurrMenuName(path)
  const state = { menuName }
  return (
    <DashboardContext.Provider value={state}>
      {children}
    </DashboardContext.Provider>
  )
}


export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  return context as DashboardContextStore
}
