import fetchWithJWT from '@/utils/globarFetch';
import { useState } from 'react';
interface TrainingForm {
  date: string
  name: string,
  weight: number,
  sets: number,
  reps: number,
  note: string,
  tags: Array<string>
}

export default function useTrainingForm(defaultValue?: Partial<TrainingForm>) {
  const [trainingForm, setTrainingForm] = useState<TrainingForm>({
    date: defaultValue?.date || '',
    name: defaultValue?.name || '',
    weight: defaultValue?.weight || 0,
    sets: defaultValue?.sets || 0,
    reps: defaultValue?.reps || 0,
    note: defaultValue?.note || '',
    tags: defaultValue?.tags || []
  })
  const submitTrainingForm = () => fetchWithJWT('/fitness-record', 'POST', {
    date: trainingForm.date,
    name: trainingForm.name,
    weight: trainingForm.weight,
    sets: trainingForm.sets,
    reps: trainingForm.reps,
    note: trainingForm.note,
    tags: trainingForm.tags
  })
  return {
    trainingForm,
    setTrainingForm,
    submitTrainingForm
  }
}