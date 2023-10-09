import fetcher from "../fetcher";

type GetTags = {
  menu: Array<string>
  annotation: Array<string>
  action: Array<string>
}
type GetTagsRes = GetTags | null

const API_URL = process.env.NEXT_PUBLIC_API_URL + '/tags'
const getTags = () => {
  return fetcher(
    API_URL,
    { method: 'GET' }
  )
}