type Method = 'POST' | 'GET' | 'DELETE' | 'PATCH'
export default function fetchWithJWT(route: string, method: Method = 'GET', body?: any): Promise<Response> {
  const API_URL = process.env.NEXT_PUBLIC_API_URL as string + route
  const user = JSON.parse(window.localStorage.getItem('user')!)
  return fetch(
    API_URL, 
    {
      method: method,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'authorization': user?.access_token
      }
    }
  )
}