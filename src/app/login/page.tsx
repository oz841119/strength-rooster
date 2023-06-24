"use client"
import { Button, TextField } from "@mui/material";

export default function Page() {
  const handleLogin = () => {
    const account = document.getElementById('login-account') as HTMLInputElement
    const password = document.getElementById('login-password') as HTMLInputElement
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-80 flex flex-col gap-5">
        <TextField id="login-account" label="帳號" variant="outlined" />
        <TextField id="login-password" label="密碼" variant="outlined" />
        <Button variant="contained" onClick={handleLogin}>LOGIN</Button>
      </div>
    </div>
  )
}