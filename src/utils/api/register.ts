import fetcher from "../fetcher";

interface Credentials {
  account: string,
  password: string
}
export function register({account, password}: Credentials) {
  return fetcher(
      'https://shy-puce-hippopotamus-tie.cyclic.cloud/user',
      {method: 'POST', body: JSON.stringify({account, password})}
    )
}