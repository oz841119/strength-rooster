interface SrFetchArgs {
  route: string
  method: 'POST' | 'GET' | 'DELETE' | 'PATCH'
  params?: any
  noServer?: boolean
}

const srFetch = ({route, method = 'GET', params, noServer = true}: SrFetchArgs) => {
  if(noServer && typeof window === 'undefined') return
  const accessToken = window.localStorage.getItem('access_token')
  const API_URL = process.env.NEXT_PUBLIC_API_URL + route
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'authorization': accessToken || ''
  }
  return fetch(
    API_URL,
    {
      method: method,
      body: JSON.stringify(params),
      headers: headers
    }
  )
}

export default srFetch