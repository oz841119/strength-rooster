import fetcher from "../fetcher";

interface Credentials {
  account: string,
  password: string
}
export function loginWithCredentials({account, password}: Credentials) {
  return fetcher(
      'https://shy-puce-hippopotamus-tie.cyclic.cloud/auth/login',
      {method: 'POST', body: JSON.stringify({account, password})}
    )
}