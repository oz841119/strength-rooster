"use client"
import fetchWithJWT from "@/utils/globarFetch";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useEffect, useState } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export default function Page() {
  const [trainings, setTrainings] = useState<Training[] | []>([])
  useEffect(() => {
    fetchWithJWT('/fitness-record')
      .then(res => res.json())
      .then(res => {
        if (Array.isArray(res)) setTrainings(res)
      })
  }, [])
  return (
    <div className="py-4 px-10">
      <div className="mb-12">
        <div className="py-2 px-4 common-border-title inline-block font-bold bg-zinc-800">新增訓練</div>
        <div className="py-4 px-4 common-border">
          <CreateTrainingForm />
        </div>
      </div>

      <div>
        <div className="py-2 px-4 common-border-title inline-block font-bold bg-slate-800">近期新增</div>
        <div className="py-1 px-4 common-border">
          <LatestTable trainings={trainings} />
        </div>
      </div>
    </div>
  )
}

function CreateTrainingForm() {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex', gap: '12px',
        '& .MuiInputBase-root': { color: "#ffffffd4" },
        '& .MuiFormLabel-root': { color: '#ffffffd4 !important' },
        '& .MuiButtonBase-root': { color: '#fff' },
        '& .MuiOutlinedInput-notchedOutline': { borderColor: '#fff !important' }
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="zh-cn">
        <DatePicker
          slotProps={{ textField: { size: "small" } }}
          disableFuture
          format="YYYY-MM-DD"
        />
      </LocalizationProvider>
      <TextField size="small" id="outlined-basic" label="訓練動作" variant="outlined" />
      <TextField size="small" id="outlined-basic" label="重量" variant="outlined" />
      <TextField size="small" id="outlined-basic" label="次組" variant="outlined" />
      <TextField size="small" id="outlined-basic" label="組數" variant="outlined" />
      <TextField size="small" id="outlined-basic" label="筆記" variant="outlined" />
    </Box>
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
