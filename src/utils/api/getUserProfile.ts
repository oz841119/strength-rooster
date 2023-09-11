import fetcher from "../fetcher";

export function getUserProfile() {
  return fetcher(
      'http://localhost:3000/user',
      {method: 'GET'}
    )
}