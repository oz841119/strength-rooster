"use client"
import { Alert, Button, Snackbar, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter()
  const [alertMessage, setAlertMessage] = useState(false)

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
    fetch('http://localhost:3000/auth/sign-in', {
      method: 'POST',
      body: JSON.stringify({account, password}),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
    .then(res => res.json())
    .then(res => {
      const { access_token } = res
      if(!access_token) {
        setAlertMessage(true)
      }
      if(access_token) {
        window.localStorage.setItem(
          'user',
          JSON.stringify({
            account,
            password,
            access_token: 'Bearer ' + access_token
          })
        )
        router.push('/dashboard')
        return
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
      <AlertHint message={'登入失敗'} open={alertMessage} onClose={() => setAlertMessage(false)}/>
    </div>
  )
}


function AlertHint({open, message, onClose}: any) {
  const handleClose = () => onClose()
  return (
    <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'center'}} open={open} autoHideDuration={1000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}