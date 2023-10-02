"use client"

import { staticData } from "@/constants/data"
import { useState } from "react"

export function useSalesData() {
  const [sales, setSales] = useState<number[]>([])
  setSales(staticData.data.dashboardData.charts.salesOverTime.data)

  return sales
}
