"use client"

import { staticData } from "@/constants/data"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const LineChart = dynamic(() => import("@/components/Charts/LineChart"), {
  ssr: false,
})

const BarChart = dynamic(() => import("@/components/Charts/BarChart"), {
  ssr: false,
})

export default function Charts() {
  const [lineChartData, setLineCharData] = useState<any>([])
  const [barChartData, setBarCharData] = useState<any>([])

  function loadStatic() {
    setLineCharData(staticData.data.dashboardData.charts.salesOverTime.data)
    setBarCharData(staticData.data.dashboardData.charts.userEngagement.data)
  }

  useEffect(() => {
    loadStatic()
  }, [])

  return (
    <div className="w-full">
      <div className="text-xl dark:gray-200 gray-700 pb-8">Charts</div>
      <div className="">
        <div className="mb-8">
          <LineChart name="Sales in October" data={lineChartData} />
        </div>
        <div className="">
          <BarChart name="User engagement" data={barChartData} />
        </div>
      </div>
    </div>
  )
}
