import { Box, Button, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Controller, useForm } from "react-hook-form";
import 'dayjs/locale/zh-cn';
import dayjs from 'dayjs';




export default function TrainingForm() {
  const { handleSubmit, reset, control } = useForm({
    defaultValues: {
      name: '',
      weight: '',
      sets: '',
      reps: '',
      date: dayjs(),
      note: ''
    }
  });
  const formReset = () => {
    reset()
  }
  const submit = (sourceForm: any) => {
    const form = JSON.parse(JSON.stringify(sourceForm))
    form.date = form.date.slice(0, 10)
    form.sets = Number(form.sets)
    form.reps = Number(form.reps)
    form.weight = Number(form.weight)
    createRecord()

    function createRecord() {
      const access_token = JSON.parse(localStorage.getItem('user')!).access_token
      fetch('http://localhost:3000/fitness-record', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'authorization': access_token
        }
      })
        .then(res => res.json)
        .then(res => {
          console.log(res);
        })
    }
  }
  return (
    <Box
      className="bg-teal-500 rounded-lg w-80 p-3 gap-3 shadow flex flex-wrap justify-between items-start"
      component="form"
      onSubmit={handleSubmit(submit)}
      autoComplete="off"
    >
      <h4 className="">訓練記錄</h4>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="zh-cn">
        <Controller
          name="date"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              onChange={(event: any) => { onChange(event)}}
              value={value}
              disableFuture 
              formatDensity="spacious" 
              slotProps={{ textField: { size: 'small', fullWidth: true } }}
              
            />
          )}
        />
      </LocalizationProvider>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField {...field} fullWidth size="small" label="訓練動作" variant="outlined" />
        )}
      />
      <Controller
        name="weight"
        control={control}
        render={({ field }) => (
          <TextField {...field} fullWidth size="small" label="重量(KG)" type="number" variant="outlined" />
        )}
      />
      <Controller
        name="reps"
        control={control}
        render={({ field }) => (
          <TextField {...field} className="w-5/12" size="small" label="次數" type="number" variant="outlined" />
        )}
      />
      <Controller
        name="sets"
        control={control}
        render={({ field }) => (
          <TextField {...field} className="w-5/12" size="small" label="組數" type="number" variant="outlined" />
        )}
      />
      <Controller
        name="note"
        control={control}
        render={({ field }) => (
          <TextField {...field} fullWidth size="small" label="筆記" variant="outlined" />
        )}
      />
      <div className="w-full flex justify-end gap-4">
        <Button size="small" variant="contained" color="info" onClick={formReset}>重設</Button>
        <Button size="small" variant="contained" color="success" type="submit">送出</Button>
      </div>
    </Box>
  )
}