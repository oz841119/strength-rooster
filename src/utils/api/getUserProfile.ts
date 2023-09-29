import fetcher from "../fetcher";

export function getUserProfile() {
  return fetcher(
      'https://shy-puce-hippopotamus-tie.cyclic.cloud/user',
      {method: 'GET'}
    )
}