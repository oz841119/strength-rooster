import fetcher from "../fetcher";

interface Credentials {
  account: string,
  password: string
}
export function postRegister({account, password}: Credentials) {
  return fetcher(
      'http://localhost:3000/user',
      {method: 'POST', body: JSON.stringify({account, password})}
    )
}