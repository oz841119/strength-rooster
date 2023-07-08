'use client'
import useUser from "@/swr/useUser"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useRouter } from "next/navigation";
export default function TopBar() {
    const {data: user, error, isLoading} = useUser('key')
    return (
        <div className="py-4 px-10 common-border-b flex justify-between items-center">
            <Title/>
            <Info account={user?.account} isLoading={isLoading}/>
        </div>
    )
}


function Title() {
    return (
        <div className="text-2xl font-black">
            <span className="">FIT</span>
            <span className="text-cyan-400">ROOSTER</span>
        </div>
    )
}

function Info({account, isLoading}: {account: string, isLoading: boolean}) {
    const router = useRouter()
    const signOut = () => {
        window.localStorage.clear()
        router.push('/login')
    }
    if(isLoading) return <Loading/>
    return (
        <div className="flex items-center gap-3"> 
            <span className="common-border-b cursor-pointer">{account || '未登入'}</span>
            <ExitToAppIcon className="cursor-pointer" onClick={signOut}/>
        </div>
    )
}

function Loading() {
    return (
        <div>Loading...</div>
    )
}