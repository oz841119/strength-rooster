"use client"
import fetchWithJWT from "@/utils/globarFetch"
import { useEffect } from "react"

export default function Page() {
  useEffect(() => {
    fetchWithJWT('/fitness-record')
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
  })
  return (
    <div>123</div>
  )
}