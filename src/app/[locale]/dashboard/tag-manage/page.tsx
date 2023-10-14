'use client'
import { Spacer } from "@nextui-org/react";
import MenuCard from "./MenuCard";
import AnnotationCard from "./AnnotationCard";
import ActionCard from "./ActionCard";
import { useTagsSWR } from "@/hooks/swrHooks";
import { deleteTagFetcher, postTagFetcher } from "@/utils/api";
import { useDashboardContext } from "../DashboardContext";
export default function Page() {
  const { tags, isLoading, error, mutate } = useTagsSWR()
  const { setIsFullPageLoading } = useDashboardContext()
  const createTag = async (group: string, name: string) => {
    setIsFullPageLoading(true)
    const {status} = await postTagFetcher(group, name)
    if(status === 201) mutate()
    setIsFullPageLoading(false)
  }
  const deleteTag = async (group: string, name: string) => {
    setIsFullPageLoading(true)
    const {status} = await deleteTagFetcher(group, name)
    if(status === 200) mutate()
    setIsFullPageLoading(false)
  }
  return (
    <div>
      {!isLoading && (
        <>
          <MenuCard menu={tags && tags.menu} onSubmit={createTag} onDelete={deleteTag}/>
          <Spacer y={8} />
          <ActionCard actions={tags && tags.action} onSubmit={createTag} onDelete={deleteTag}/>
          <Spacer y={8} />
          <AnnotationCard annotations={tags && tags.annotation} onSubmit={createTag} onDelete={deleteTag}/>
        </>
      )}
    </div>
  )
}