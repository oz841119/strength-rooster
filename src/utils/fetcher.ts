interface RequestOptions extends RequestInit{
  headers?: {
    [key: string]: string;
  };
}

function updateOptions(options: RequestOptions): RequestOptions {
  const update: RequestOptions = { ...options };
  update.headers = {
    ...update.headers,
    'Content-Type': 'application/json; charset=utf-8',
  };
  if (localStorage.access_token) update.headers.Authorization = `Bearer ${localStorage.access_token}`
  return update;
}

export default function fetcher(url: string, options: RequestOptions = {}): Promise<Response> {
  return fetch(url, updateOptions(options));
}
