import { createTrainingForm } from '@/utils/api';
import dayjs from 'dayjs';
import { useState } from 'react';
interface TrainingForm {
  date: string
  action: string,
  weight: string,
  sets: string,
  reps: string,
  note: string,
  tags: Array<string>
  menu: string
}

export default function useTrainingForm(defaultValue?: Partial<TrainingForm>) {
  const [trainingForm, setTrainingForm] = useState<TrainingForm>({
    date: defaultValue?.date || '',
    action: defaultValue?.action || '',
    weight: defaultValue?.weight || '',
    sets: defaultValue?.sets || '',
    reps: defaultValue?.reps || '',
    note: defaultValue?.note || '',
    tags: defaultValue?.tags || [],
    menu: defaultValue?.menu || ''
  })
  const submitTrainingForm = () => {
    const params = {
      date: dayjs(trainingForm.date).unix(),
      action: trainingForm.action,
      weight: Number(trainingForm.weight),
      sets: Number(trainingForm.sets),
      reps: Number(trainingForm.reps),
      note: trainingForm.note,
      tags: trainingForm.tags,
      menu: trainingForm.menu
    }
    return createTrainingForm(params)
  }
  return {
    trainingForm,
    setTrainingForm,
    submitTrainingForm
  }
}