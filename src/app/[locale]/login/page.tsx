'use client'

import SrSanckbar from "@/components/SrSnackbar";
import { useI18n } from "@/locales/client";
import { loginWithCredentials } from "@/utils/api";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const t = useI18n()
  const router = useRouter()
  const pathname = usePathname()
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [isOpenSrSanckbar, setIsOpenSrSanckbar] = useState(false)
  const login = async () => {
    const res = await loginWithCredentials({ account, password })
    if (res.status !== 201) return setIsOpenSrSanckbar(true)
    const { access_token } = await res.json()
    localStorage.setItem('access_token', `Bearer ${access_token}`)
    const lang = pathname.split('/')[1]
    router.push(`/dashboard`)
  }
  return (
    <div className="w-full min-h-screen bg-main text-slate-700 flex">
      <div className="w-full min-h-screen bg-slate-300 md:w-5/12">
        <div className="flex flex-col items-center pt-36 px-3 min-h-screen">
          <h2>STRENGTH ROOSTER</h2>
          <div className="text-slate-500 mb-10">
            {t('auth page.describe')}
          </div>
          <div className="w-4/5 flex flex-col">
            <label className="mb-4">
              <div className="text-sm">{t('account')}</div>
              <input type="text" className="w-full h-9 px-2" onChange={(e) => setAccount(e.target.value)} />
            </label>
            <label className="mb-2">
              <div className="text-sm">{t('password')}</div>
              <input type="password" className="w-full h-9 px-2" onChange={(e) => setPassword(e.target.value)} />
            </label>
            <div className="flex justify-between mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-1" />
                <span className="text-xs">{t('remember')}</span>
              </label>
              <span className="cursor-pointer text-xs text-slate-600">{t('forgot')}</span>
            </div>
            <div onClick={login} className="w-full text-center bg-slate-700 text-white py-2 cursor-pointer mb-4">
              {t('sign in')}
            </div>
            <Link
              href="./register"
              className="w-full text-center bg-slate-400 text-white py-2 cursor-pointer no-underline"
            >
              {t('register')}
            </Link>
          </div>
        </div>
      </div>
      <div className="text-xs text-white absolute top-1 right-2 cursor-pointer">
      </div>
      <SrSanckbar open={isOpenSrSanckbar} message="登入失敗" severity="error" handleClose={() => setIsOpenSrSanckbar(false)} />
    </div>
  )
}
