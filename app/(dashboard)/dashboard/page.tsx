"use client"

import { staticData } from "@/constants/data"
import axios from "axios"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const LineChart = dynamic(() => import("@/components/Charts/LineChart"), {
  ssr: false,
})

const BarChart = dynamic(() => import("@/components/Charts/BarChart"), {
  ssr: false,
})

export default function Dashboardd() {
  const [lineChartData, setLineCharData] = useState<any>([])
  const [barChartData, setBarCharData] = useState<any>([])
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
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  async function loadStatic() {
    setLineCharData(staticData.data.dashboardData.charts.salesOverTime.data)
    setBarCharData(staticData.data.dashboardData.charts.userEngagement.data)
  }

  useEffect(() => {
    loadStatic()
    const gap = setInterval(() => {
      loadStatic()
    }, SECONDS_MS)

    return () => clearInterval(gap) //prevent memory leak
  }, [])

  return (
    <div className="w-full">
      <div className="flex gap-8">
        <div className="w-1/2">
          <LineChart name="Sales in October" data={lineChartData} />
        </div>
        <div className="w-2/5">
          <BarChart name="User engagement" data={barChartData} />
        </div>
      </div>
    </div>
  )
}
