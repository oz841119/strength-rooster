'use client'
import { Spacer } from "@nextui-org/react";
import MenuCard from "./MenuCard";
import TagCard from "./TagCard";
import ActionCard from "./ActionCard";
export default function Page() {
  return (
    <div>
      <MenuCard/>
      <Spacer y={8} />
      <ActionCard/>
      <Spacer y={8} />
      <TagCard/>
    </div>
  )
}