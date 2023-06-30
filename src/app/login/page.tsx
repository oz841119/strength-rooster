"use client"
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    const userJSON = window.localStorage.getItem('user')
    if(userJSON) {
      const accountInp = document.getElementById('login-account') as HTMLInputElement
      const passwordInp = document.getElementById('login-password') as HTMLInputElement
      const user = JSON.parse(userJSON)
      accountInp.value = user.account
      passwordInp.value = user.password
    }}, [])

  const handleLogin = () => {
    const {value: account} = document.getElementById('login-account') as HTMLInputElement
    const {value: password} = document.getElementById('login-password') as HTMLInputElement
    fetch('http://localhost:3000/login', {
      method: 'POST',
      body: JSON.stringify({account, password}),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      
      const { account: apiAccount } = res
      if(apiAccount === account) {
        window.localStorage.setItem('user', JSON.stringify({account, password}))
        router.push('/dashboard')
      }
    })
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