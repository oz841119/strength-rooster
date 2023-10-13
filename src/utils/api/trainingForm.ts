import fetcher from "../fetcher";

type CreateTraingingFormParams = {
  date: string,
  menu: string,
  actionName: string,
  weight: number,
  reps: number,
  sets: number,
  tags: Array<string>
}
const createTrainingForm = (params: CreateTraingingFormParams) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL + '/training-form'
  return fetcher(API_URL, {method: 'POST', body: JSON.stringify(params)})
}
export { createTrainingForm }