import fetcher from "../fetcher";


const API_URL = process.env.NEXT_PUBLIC_API_URL + '/tags'
const postTagFetcher = (group: string, name: string) => {
  const body = JSON.stringify({group, name})
  return fetcher(
    API_URL,
    { method: 'POST', body: body }
  )
}
const deleteTagFetcher = (group: string, name: string) => {
  const body = JSON.stringify({group, name})
  return fetcher(
    API_URL,
    { method: 'DELETE', body: body }
  )
}

export {
  postTagFetcher,
  deleteTagFetcher
}