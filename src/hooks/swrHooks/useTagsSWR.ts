import fetcher from "@/utils/fetcher";
import useSWR from 'swr'

type Tags = {
  menu: Array<string>,
  annotation: Array<string>,
  action: Array<string>,
}
export default function useTagsSWR () {
  const API_URL = process.env.NEXT_PUBLIC_API_URL + '/tags'
  const fetcherSWR = () => fetcher(API_URL).then(res => res.json() as Promise<Tags>)
  const { data, error, isLoading, mutate } = useSWR(API_URL, fetcherSWR)
  return {
    tags: data,
    isLoading,
    error,
    mutate
  }
}

