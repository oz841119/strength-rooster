'use client'
import { Spacer } from "@nextui-org/react";
import MenuCard from "./MenuCard";
import AnnotationCard from "./AnnotationCard";
import ActionCard from "./ActionCard";
import { useTagsSWR } from "@/hooks/swrHooks";
export default function Page() {
  const { tags, isLoading, error } = useTagsSWR()
  return (
    <div>
      {!isLoading && (
        <>
          <MenuCard menu={tags && tags.menu} />
          <Spacer y={8} />
          <ActionCard actions={tags && tags.action} />
          <Spacer y={8} />
          <AnnotationCard annotations={tags && tags.annotation} />
        </>
      )}
    </div>
  )
}