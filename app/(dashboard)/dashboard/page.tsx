"use client"

import { staticData } from "@/constants/data"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Dashboardd() {
  const [data, setData] = useState<any>([])
  const [loading, setLoading] = useState(true)

  const SECONDS_MS = 5000 //5 seconds

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    Authorization: `Bearer ${token}`,
  }

  async function loadData() {
    await axios
      .get("https://dashboard-api-dusky.vercel.app/api/get", { headers })
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  async function loadStatic() {
    setData(staticData.data.dashboardData.tables.recentTransactions)
  }

  useEffect(() => {
    loadStatic()
    const gap = setInterval(() => {
      console.log("loading")
      loadStatic()
    }, SECONDS_MS)

    return () => clearInterval(gap) //prevent memory leak
  }, [])

  return (
    <div>
      <div>the real dashh</div>
      <div>
        {data.map((item: any) => {
          return <div key={item.id}>{item.user}</div>
        })}
      </div>
    </div>
  )
}
