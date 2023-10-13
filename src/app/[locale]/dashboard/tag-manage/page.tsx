'use client'
import { Spacer } from "@nextui-org/react";
import MenuCard from "./MenuCard";
import AnnotationCard from "./AnnotationCard";
import ActionCard from "./ActionCard";
import { useTagsSWR } from "@/hooks/swrHooks";
import { deleteTagFetcher, postTagFetcher } from "@/utils/api";
export default function Page() {
  const { tags, isLoading, error, mutate } = useTagsSWR()
  const createTag = async (group: string, name: string) => {
    const {status} = await postTagFetcher(group, name)
    if(status === 201) mutate()
  }
  const deleteTag = async (group: string, name: string) => {
    const {status} = await deleteTagFetcher(group, name)
    if(status === 200) mutate()
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