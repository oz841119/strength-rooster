import fetcher from "../fetcher";

export function getUserProfile() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL + '/user'
  return fetcher(
    API_URL,
    { method: 'GET' }
  )
}