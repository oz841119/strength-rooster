'use client'
import { useI18n } from "@/locales/client";
import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { useState } from "react";
export default function Page() {
  const t = useI18n()
  const [menuInp, setMenuInp] = useState('')
  const [tagInp, setTagInp] = useState('')
  const onMenuSubmit = () => {
    console.log(menuInp);
  }
  return (
    <div className="gap-4">
      <Card className="max-w-sm mb-8">
        <CardBody>
          <CardHeader>創建菜單</CardHeader>
          <div className="flex gap-2 items-end">
            <Input label={t("menu name")} variant="bordered" className="max-w-xs" size="sm" value={menuInp} onValueChange={setMenuInp} />
            <Button size="sm" color="success" variant="faded" onClick={onMenuSubmit}>送出</Button>
          </div>
        </CardBody>
      </Card>
      <Card className=" max-w-sm">
        <CardBody>
          <CardHeader>創建標籤</CardHeader>
          <div className="flex gap-2 items-end">
            <Input label="標籤名稱" variant="bordered" className="max-w-xs" size="sm" value={tagInp} onValueChange={setTagInp} />
            <Button size="sm" color="success" variant="faded" onClick={onMenuSubmit}>送出</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}