import fetcher from "../fetcher";

interface Credentials {
  account: string,
  password: string
}
export function loginWithCredentials({account, password}: Credentials) {
  return fetcher(
      'http://localhost:3000/auth/login',
      {method: 'POST', body: JSON.stringify({account, password})}
    )
}