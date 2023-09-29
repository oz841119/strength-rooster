'use client'

import Side from './Side'
import { getUserProfile } from "@/utils/api/getUserProfile"
import { ReactElement, ReactNode, useEffect, useState } from "react"
import { useRouter } from "next/navigation";
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { I18nProviderClient } from '@/locales/client';
import { DashboardContextProvider, useDashboardContext } from './DashboardContext';
import { Providers } from '@/app/providers';
import zhTw from '@/locales/zh-tw';

const UserNode = ({ userActivation }: { userActivation: string }) => userActivation && (
  <div className="flex justify-end items-center h-full">
    <div className="bg-side px-3 py-1 rounded-xl cursor-pointer flex items-center mr-2 hover:bg-select">
      <PersonIcon className='mr-2' />
      <span>{userActivation}</span>
    </div>
    <LogoutIcon className="cursor-pointer rounded-full text-3xl p-1 hover:bg-select" />
  </div>
)

const PathNode: React.FC = () => {
  const { menuName } = useDashboardContext()
  return (<div className="mb-4"><b className=" text-sm text-card-title">{menuName}</b></div>)
}

export default function RootLayout({ children, params }: { children: React.ReactNode, params: { locale: string } }) {
  const router = useRouter()
  const [userAccount, setUserAccount] = useState<string>('')
  useEffect(() => {
    getUserProfile()
      .then(res => {
        if (res.status === 200) return res.json()
        else {
          router.push(`/login`)
        }
      })
      .then(resp => {
        if (resp?.account) {
          const { account } = resp
          setUserAccount(account)
        }
      })
      .catch(err => {
        console.log('連線錯誤');
      })
  }, [])

  return (
    <I18nProviderClient locale={params.locale} fallback={<p>Loading locales...</p>} fallbackLocale={zhTw}>
      <Providers>
        <DashboardContextProvider>
          <div className="flex w-full min-h-screen bg-background text-foreground">
            <Side />
            <main className="flex-1">
              <div className="flex justify-end h-12 items-center pr-4">
                <UserNode userActivation={userAccount} />
              </div>
              <div className="p-4">
                <PathNode />
                {children}
              </div>
            </main>
          </div>
        </DashboardContextProvider>
      </Providers>
    </I18nProviderClient>
  )
}
