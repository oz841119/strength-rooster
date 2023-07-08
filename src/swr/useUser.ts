import useSWR from 'swr'

export default function useUser(key: any) {
    const API_URL = process.env.NEXT_PUBLIC_API_URL as string + '/users'
    const user = JSON.parse(window.localStorage.getItem('user')!)
    const fetcher = () => fetch(API_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'authorization': user?.access_token
        }
    })
    .then(res => res.json())
    const {data, error, isLoading} = useSWR(key, fetcher)
    return {data, error, isLoading}
}
