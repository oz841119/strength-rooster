"use client"
import fetchWithJWT from "@/utils/globarFetch";
import { Alert, AlertColor, Box, Button, Chip, IconButton, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { forwardRef, useEffect, useRef, useState } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { AddCircle, AddTask, BorderColor } from "@mui/icons-material";
import 'dayjs/locale/zh-cn';
import dayjs, { Dayjs } from "dayjs";


type Form = {
  date: string;
  name: string;
  weight: string;
  sets: string;
  reps: string;
  note: string
}

export default function Page() {
  const [trainings, setTrainings] = useState<Training[] | []>([])
  const [tags, setTags] = useState<string[]>([])
  const [trainingTags, setTrainingTags] = useState<string[]>([])
  useEffect(() => {
    fetchWithJWT('/fitness-record')
      .then(res => res.json())
      .then(res => {
        if (Array.isArray(res)) setTrainings(res)
      })
  }, [])

  const createTag = (tagName: string) => { // 添加可選的Tag
    setTags([...tags, tagName])
  }
  const addTrainingTag = (tagName: string) => { // 添加為當次訓練的Tag
    setTrainingTags([...trainingTags, tagName])
  }
  const deleteTag = (tagName: string) => {
    const newTags = tags.filter(tag => tag !== tagName)
    setTags(newTags)
  }
  const deleteTrainingTag = (tagName: string) => {
    const newTags = trainingTags.filter(tag => tag !== tagName)
    setTrainingTags(newTags)
  }


  const [form, setForm] = useState<Form>({
    date: '2023-07-12',
    name: '',
    weight: '',
    sets: '',
    reps: '',
    note: ''
  })
  const setFormValue = (key: string, value: string) => {
    const target = { ...form }
    target[key as keyof Form] = value
    setForm(target)
  }
  type AlertMessage = {
    isActive: boolean;
    message: string;
    severity: AlertColor;
  }
  const [alertMessage, setAlertMessage] = useState<AlertMessage>({
    severity: 'success',
    isActive: false,
    message: ''
  })
  const submit = async () => {
    const { date, name, note, reps, sets, weight } = form
    const body = { date, name, note, reps: Number(reps), sets: Number(sets), weight: Number(weight) }
    const response = await fetchWithJWT('/fitness-record', 'POST', { ...body, tags: trainingTags })
    if (response.status === 201) {
      setAlertMessage({ isActive: true, message: '新增成功', severity: 'success' })
    } else {
      setAlertMessage({ isActive: true, message: '新增失敗', severity: 'error' })
    }
  }
  return (
    <div className="py-4 px-10">
      <div className="mb-12">
        <div className="py-2 px-4 common-border-title inline-block font-bold bg-zinc-800">新增訓練</div>
        <div className="py-4 px-4 common-border">
          <CreateTrainingForm form={form} onChange={setFormValue} />
          <Tags tags={trainingTags} onDelete={deleteTrainingTag} />
          <div className="common-border py-1 px-2 cursor-pointer inline-block hover:bg-slate-600" onClick={submit}>送出</div>
          <hr className="my-4" />
          <CreateTags onCreateTag={(tabName: string) => createTag(tabName)}></CreateTags>
          <Tags tags={tags} onDelete={deleteTag} onAdd={addTrainingTag} />
        </div>
      </div>

      <div>
        <div className="py-2 px-4 common-border-title inline-block font-bold bg-slate-800">近期新增</div>
        <LatestTable trainings={trainings} />
      </div>

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={alertMessage.isActive}
        autoHideDuration={6000}
        onClose={() => setAlertMessage({ isActive: false, message: '', severity: 'success' })}
      >
        <Alert severity={alertMessage.severity}>
          {alertMessage.message}
        </Alert>
      </Snackbar>
    </div>
  )
}

function CreateTrainingForm({ form, onChange }: { form: Form, onChange: (key: string, value: string) => void }) {
  const inputsChange = (key: string, value: Dayjs | string | null) => {
    if (value === null) return
    if (typeof value === 'object') {
      onChange(key, value.format('YYYY-MM-DD'))
    }
    if (typeof value === 'string') {
      onChange(key, value)
    }
  }
  return (
    <Box
      component="form"
      sx={{
        display: 'flex', gap: '12px', mb: '12px', flexWrap: 'wrap',
        '& .MuiInputBase-root': { color: "#ffffffd4" },
        '& .MuiFormLabel-root': { color: '#ffffffd4 !important' },
        '& .MuiButtonBase-root': { color: '#fff' },
        '& .MuiOutlinedInput-notchedOutline': { borderColor: '#fff !important' }
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="zh-cn">
        <DatePicker
          slotProps={{ textField: { size: "small", } }}
          disableFuture
          defaultValue={dayjs()}
          format="YYYY-MM-DD"
          onChange={(date: Dayjs | null) => inputsChange('date', date)}
        />
      </LocalizationProvider>
      <TextField onChange={(event) => inputsChange(event.target.id, event.target.value)} size="small" id="name" label="訓練動作" variant="outlined" />
      <TextField onChange={(event) => inputsChange(event.target.id, event.target.value)} size="small" type="number" id="weight" label="重量" variant="outlined" />
      <TextField onChange={(event) => inputsChange(event.target.id, event.target.value)} size="small" id="reps" label="組數" variant="outlined" />
      <TextField onChange={(event) => inputsChange(event.target.id, event.target.value)} size="small" id="sets" label="組數" variant="outlined" />
      <TextField onChange={(event) => inputsChange(event.target.id, event.target.value)} size="small" id="note" label="筆記" variant="outlined" />
    </Box>
  )
}

function CreateTags({ onCreateTag }: { onCreateTag: (tagName: string) => void }) {
  const createTag = () => { // 創建可選的Tag
    const inp = (document.getElementById('tagName-inp') as HTMLInputElement)
    if (!inp.value) return
    onCreateTag(inp.value)
    inp.value = ''
  }
  return (
    <div className="text-cyan-400 my-5 flex items-center">
      <div>
        <TextField
          size="small"
          id="tagName-inp"
          label="新增標籤"
          variant="outlined"
          sx={{
            '& .MuiInputBase-root': { color: "#22d3ee" },
            '& .MuiFormLabel-root': { color: '#22d3ee !important' },
            '& .MuiButtonBase-root': { color: '#22d3ee' },
            '& .MuiOutlinedInput-notchedOutline': { borderColor: '#22d3ee !important' }
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') createTag()
          }}
        />
        <IconButton aria-label="create-tagName" size="large" color="info" onClick={createTag}>
          <AddCircle className="w-4 h-4" />
        </IconButton>
      </div>
    </div>
  )
}

interface TagsProps {
  tags: string[]
  onDelete?: (tagName: string) => void
  onAdd?: (tagName: string) => void
}
function Tags({ tags, onDelete, onAdd }: TagsProps) {
  const handleDelete = (tagName: string) => {
    if (onDelete) onDelete(tagName)
  }

  const addTag = (tagName: string) => { // 添加被當次紀錄應用的Tag
    if (onAdd) onAdd(tagName)
  }
  return (
    <div className="flex gap-3">
      {tags.map((tagName, index) => (
        <Chip
          onClick={() => addTag(tagName)}
          label={tagName}
          key={index}
          color="primary"
          onDelete={() => handleDelete(tagName)}
        />
      ))}
    </div>
  )
}

function LatestTable({ trainings }: { trainings: Training[] }) {
  return (
    <TableContainer
      sx={{
        "& .MuiTableCell-root": {
          color: "#fff",
          borderBottom: "1px solid #ffffff3a;",
          width: '200px'
        }
      }}
    >
      <Table sx={{ minWidth: '600px' }}>
        <TableHead>
          <TableRow sx={{ "& .MuiTableCell-root": { fontWeight: 700, fontSize: '1rem' } }}>
            <TableCell>訓練動作</TableCell>
            <TableCell align="right">重量(Kg)</TableCell>
            <TableCell align="right">次數(Reps)</TableCell>
            <TableCell align="right">組數(Sets)</TableCell>
            <TableCell align="right">筆記</TableCell>
            <TableCell align="right">日期</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trainings.map((training, index) => (
            <TableRow
              key={training._id}
              sx={index === trainings.length - 1 ? { "& .MuiTableCell-root": { borderBottom: "none" } } : {}}
            >
              <TableCell>{training.name}</TableCell>
              <TableCell sx={{ color: '#fff' }} align="right">{training.weight}</TableCell>
              <TableCell align="right">{training.reps}</TableCell>
              <TableCell align="right">{training.sets}</TableCell>
              <TableCell align="right">{training.note}</TableCell>
              <TableCell align="right">{training.date && training.date.slice(0, 10)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}


interface Training {
  _id: string
  name: string
  weight: number
  reps: number
  sets: number
  date: string
  note: string
}
