"use client"
import SrSanckbar from "@/components/SrSnackbar";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [errorSnackbarInfo, setErrorSnackbarInfo] =  useState({
    open: false,
    message: '',
  })
  const inputValidator = () => {
    const renderResult = (isPass: boolean = true, message: string = '') => ({ isPass, message })
    const pattern = /^[a-zA-Z0-9]+$/;
    if(account.length < 5) return renderResult(false, 'Account should have a length of 5 characters or more.')
    if(!pattern.test(account)) return renderResult(false, 'Account can only contain letters and numbers.')
    if(password !== repeatPassword) return renderResult(false, 'Passwords do not match')
    if(password.length < 5) return renderResult(false, 'Password should have a length of 5 characters or more.')
    if(!pattern.test(password)) return renderResult(false, 'Password can only contain letters and numbers.')
    return renderResult()
  }
  const submit = () => {
    const { isPass, message } = inputValidator()
    if(!isPass) {
      setErrorSnackbarInfo({open: true, message: message})
    }
  }
  return (
    <div className="w-full min-h-screen text-slate-700 flex">
      <div className="w-full md:w-5/12 min-h-screen bg-slate-300">
        <div className="flex flex-col items-center pt-36 px-3">
          <h2>STRENGTH ROOSTER</h2>
          <div className="text-slate-500 mb-10">
            REGISTER
          </div>
          <div className="w-4/5 flex flex-col">
            <label className="mb-4">
              <div className="text-sm">Account</div>
              <input type="text" className="w-full h-9 px-2" value={account} onChange={(e) => setAccount(e.target.value)}/>
            </label>
            <label className="mb-4">
              <div className="text-sm">Password</div>
              <input type="password" className="w-full h-9 px-2" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <label className="mb-4">
              <div className="text-sm">Repeat Password</div>
              <input type="password" className="w-full h-9 px-2" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)}/>
            </label>
            <div className="w-full text-center bg-slate-700 text-white py-2 cursor-pointer mb-4" onClick={submit}>
              REGSITER
            </div>
            <Link href="./login" className="text-xs text-slate-700 underline cursor-pointer text-center">RETURN</Link>
          </div>
        </div>
      </div>

      <SrSanckbar 
        open={errorSnackbarInfo.open}
        message={errorSnackbarInfo.message}
        severity="error"
        handleClose={() => setErrorSnackbarInfo({open: false, message: ''})}
      />
    </div>
  )
}