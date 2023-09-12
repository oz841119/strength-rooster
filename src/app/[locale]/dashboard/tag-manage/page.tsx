'use client'
import { Spacer } from "@nextui-org/react";
import MenuCard from "./MenuCard";
import TagCard from "./TagCard";
export default function Page() {
  return (
    <div>
      <MenuCard/>
      <Spacer y={4} />
      <TagCard/>
    </div>
  )
}