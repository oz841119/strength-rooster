"use client"
import SrSanckbar from "@/components/SrSnackbar";
import Link from "next/link";
import { useState } from "react";
import useRegisterForm from "./useRegisterForm";
import { postRegister } from "@/utils/api/register";

type SrSanckbarProps = React.ComponentProps<typeof SrSanckbar>
type PickSrSanckbarProps = 'open' | 'message' | 'severity'

export default function Page() {
  const { account, password, repeatPassword, setRegisterForm, validForm } = useRegisterForm()
  const [snackbarInfo, setSnackbarInfo] = useState<Pick<SrSanckbarProps, PickSrSanckbarProps>>({
    open: false,
    message: '',
    severity: 'info'
  })

  const submit = async () => {
    const { isPass, message: errMessage } = validForm()
    if (!isPass) return setSnackbarInfo({ open: true, message: errMessage, severity: 'error' })
    const registerResult = await postRegister({ account, password })
    switch (registerResult.status) {
      case 201: {
        setSnackbarInfo({ open: true, message: 'Register success!', severity: 'success' })
        break
      }
      case 409: {
        setSnackbarInfo({ open: true, message: 'Account is used!', severity: 'error' })
        break
      }
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
              <input type="text" className="w-full h-9 px-2" value={account} onChange={(e) => setRegisterForm('account', e.target.value)} />
            </label>
            <label className="mb-4">
              <div className="text-sm">Password</div>
              <input type="password" className="w-full h-9 px-2" value={password} onChange={(e) => setRegisterForm('password', e.target.value)} />
            </label>
            <label className="mb-4">
              <div className="text-sm">Repeat Password</div>
              <input type="password" className="w-full h-9 px-2" value={repeatPassword} onChange={(e) => setRegisterForm('repeatPassword', e.target.value)} />
            </label>
            <div className="w-full text-center bg-slate-700 text-white py-2 cursor-pointer mb-4" onClick={submit}>
              REGSITER
            </div>
            <Link href="./login" className="text-xs text-slate-700 underline cursor-pointer text-center">RETURN</Link>
          </div>
        </div>
      </div>

      <SrSanckbar
        open={snackbarInfo.open}
        message={snackbarInfo.message}
        severity={snackbarInfo.severity}
        handleClose={(_, reason) => (reason === "timeout" && setSnackbarInfo({open: false, message: '', severity: 'info' }))}
      />
    </div>
  )
}