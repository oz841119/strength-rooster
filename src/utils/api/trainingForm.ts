import fetcher from "../fetcher";

type CreateTraingingFormParams = {
  date: number,
  menu: string,
  action: string,
  weight: number,
  reps: number,
  sets: number,
  tags: Array<string>,
  note: string
}
const createTrainingForm = (params: CreateTraingingFormParams) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL + '/training-form'
  return fetcher(API_URL, {method: 'POST', body: JSON.stringify(params)})
}
export { createTrainingForm }