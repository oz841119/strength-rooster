import { Box, Button, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Controller, useForm } from "react-hook-form";
import 'dayjs/locale/zh-cn';
import dayjs from 'dayjs';




export default function OneRmForm() {
  const { handleSubmit, reset, control } = useForm({
    defaultValues: {
      action: '',
      weight: '',
      date: dayjs()
    }
  });
  const formReset = () => {
    reset()
  }
  const submit = (sourceForm: any) => {
    const form = JSON.parse(JSON.stringify(sourceForm))
  }
  return (
    <Box
      className="bg-orange-600 rounded-lg w-80 p-3 gap-3 shadow flex flex-wrap justify-between items-start"
      component="form"
      onSubmit={handleSubmit(submit)}
      autoComplete="off"
    >
      <h4 className="">最大重量紀錄</h4>
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
        name="action"
        control={control}
        render={({ field }) => (
          <TextField {...field} fullWidth size="small" label="訓練動作" variant="outlined" />
        )}
      />
      <Controller
        name="weight"
        control={control}
        render={({ field }) => (
          <TextField {...field} fullWidth size="small" type="number" label="重量(KG)" variant="outlined" />
        )}
      />
      <div className="w-full flex justify-end gap-4 mt-auto">
        <Button size="small" variant="contained" color="info" onClick={formReset}>重設</Button>
        <Button size="small" variant="contained" color="success" type="submit">送出</Button>
      </div>
    </Box>
  )
}