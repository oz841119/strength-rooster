import fetcher from "@/utils/fetcher";
import useSWR from 'swr'

export default function useTagsSWR () {
  const API_URL = process.env.NEXT_PUBLIC_API_URL + '/tags'
  const fetcherSWR = () => fetcher(API_URL).then(res => res.json())
  const { data, error, isLoading } = useSWR(API_URL, fetcherSWR)
  return {
    tags: data,
    isLoading,
    error
  }
}

