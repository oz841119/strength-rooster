import { useState } from 'react';
type Methods = 'GET' | 'POST' | 'DELETE' | 'PATCH'
const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL
export default function useSrQyery(method:　Methods, path: string, options: any) {
    const apiUrl = BASE_API_URL + path
    const [res, setRes] = useState({data: null, status: null, padding: true})
    fetch(apiUrl, {})
}