import DCard from "@/components/Dashboard/DCard"
import { useI18n } from "@/locales/client"
import { Button, Input } from "@nextui-org/react"
import { useState } from "react"
import Chips from "./Chips"

type Menu = {name: string, id: number}

export default function MenuCard() {
  const t = useI18n()
  
  const [menus, setMenus] = useState([{name: '胸背腿大重量', id: 13}, {name: '胸背腿手肩 5RM', id: 32}, {name: '日常', id: 94}, {name: '10/12 - 11/15 小重量多次數', id: 87}])
  const onCloseMenu = (menu: Menu) => {
    setMenus(menus.filter(e => e !== menu))
  }

  const [menuInp, setMenuInp] = useState('')
  const onMenuSubmit = () => {
    console.log(menuInp);
  }
  return (
    <DCard title="新增菜單" isFull>
      <div className="flex gap-2 items-end mb-4">
        <Input label={t("menu name")} variant="bordered" className="max-w-xs" size="sm" value={menuInp} onValueChange={setMenuInp} />
        <Button size="sm" color="success" variant="faded" onClick={onMenuSubmit}>送出</Button>
      </div>
      <div className="flex gap-2">
        <Chips chips={menus} type="menu" onClose={onCloseMenu}/>
      </div>
    </DCard>
  )
}