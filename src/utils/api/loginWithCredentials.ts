import fetcher from "../fetcher";

interface Credentials {
  account: string,
  password: string
}
export function loginWithCredentials({account, password}: Credentials) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL + '/auth/login'
  return fetcher(
      API_URL,
      {method: 'POST', body: JSON.stringify({account, password})}
    )
}