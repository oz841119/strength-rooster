import { IconButton, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState } from "react";

export default function FormRow() {
  return (
    <div style={{ gap: '6px' }}>
      <Row/>
    </div>
  )
}

function Row() {
  return (
    <div className="flex-start" style={{ gap: '6px' }}>
      <TextField sx={{ minWidth: '50px' }} size="small" label="訓練動作" variant="outlined" />
      <TextField size="small" sx={{ width: '120px' }} id="outlined-basic" label="重量(KG)" variant="outlined" type="number" />
      <TextField size="small" sx={{ width: '120px' }} id="outlined-basic" label="組數" variant="outlined" type="number" />
      <TextField size="small" sx={{ width: '120px' }} id="outlined-basic" label="次數" variant="outlined" type="number" />
      <div>
        <IconButton aria-label="刪除" color="error"><DeleteIcon /></IconButton>
        <IconButton aria-label="複製" color="info"><ContentCopyIcon /></IconButton>
      </div>
    </div>
  )
}