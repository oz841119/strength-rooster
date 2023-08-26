'use client'

import Link from "next/link";
import { useState } from "react";

export default function Page() {  
  const [ account, setAccount ] = useState('')
  const [ password, setPassword ] = useState('')
  return (
    <div className="w-full min-h-screen text-slate-700 flex">
      <div className="w-full min-h-screen bg-white md:w-5/12">
        <div className="flex flex-col items-center pt-36 px-3">
          <h2>STRENGTH ROOSTER</h2>
          <div className="text-slate-500 mb-10">
            Record each training session <br className="md:hidden"/>and visualize more useful data.
          </div>
          <div className="w-4/5 flex flex-col">
            <label className="mb-4">
              <div className="text-sm">Account</div>
              <input type="text" className="w-full h-9 px-2" onChange={(e) => setAccount(e.target.value)}/>
            </label>
            <label className="mb-2">
              <div className="text-sm">Password</div>
              <input type="password" className="w-full h-9 px-2" onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <div className="flex justify-between mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-1" />
                <span className="text-xs">Remember</span>
              </label>
              <span className="cursor-pointer text-xs text-slate-600">Forgot</span>
            </div>
            <div className="w-full text-center bg-slate-700 text-white py-2 cursor-pointer mb-4">
              LOGIN
            </div>
            <Link
              href="./register"
              className="w-full text-center bg-slate-400 text-white py-2 cursor-pointer no-underline"
            >
              REGISTER
            </Link>
          </div>
        </div>
      </div>
      <div className="text-xs text-white absolute top-1 right-2 cursor-pointer">
      </div>
    </div>
  )
}
