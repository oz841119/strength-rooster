type Method = 'POST' | 'GET' | 'DELETE' | 'PATCH'
export default function fetchWithJWT(route: string, method: Method = 'GET'): Promise<Response> {
  const API_URL = process.env.NEXT_PUBLIC_API_URL as string + route
  const user = JSON.parse(window.localStorage.getItem('user')!)
  return fetch(
    API_URL, 
    {
      method: method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'authorization': user?.access_token
      }
    }
  )
}