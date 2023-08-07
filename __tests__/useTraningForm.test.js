import { renderHook, act } from '@testing-library/react'
import useTrainingForm from '../src/hooks/useTraningForm'
const form  = {
  date: '',
  name: '',
  weight: 0,
  sets: 0,
  reps: 0,
  note: '',
  tags: []
}
test('更新表單', () => {
  const {result} = renderHook(() => useTrainingForm())
  act(() => result.current.setTrainingForm({...result.current.trainingForm, sets: 99}))
  form.sets = 99
  expect(result.current.trainingForm).toStrictEqual(form)
})