interface RequestOptions extends RequestInit{
  headers?: {
    [key: string]: string;
  };
}

function updateOptions(options: RequestOptions): RequestOptions {
  const update: RequestOptions = { ...options };
  update.headers = {
    ...update.headers,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };
  if (localStorage.access_token) update.headers.Authorization = `${localStorage.access_token}`
  return update;
}

export default async function fetcher(url: string, options: RequestOptions = {}): Promise<Response> {
  return fetch(url, updateOptions(options))
}
