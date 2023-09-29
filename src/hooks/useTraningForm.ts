import { useState } from 'react';
interface TrainingForm {
  date: string
  name: string,
  weight: string,
  sets: string,
  reps: string,
  note: string,
  tags: Array<string>
  menu: string | null
}

export default function useTrainingForm(defaultValue?: Partial<TrainingForm>) {
  const [trainingForm, setTrainingForm] = useState<TrainingForm>({
    date: defaultValue?.date || '',
    name: defaultValue?.name || '',
    weight: defaultValue?.weight || '',
    sets: defaultValue?.sets || '',
    reps: defaultValue?.reps || '',
    note: defaultValue?.note || '',
    tags: defaultValue?.tags || [],
    menu: defaultValue?.menu || ''
  })
  return {
    trainingForm,
    setTrainingForm,
  }
}