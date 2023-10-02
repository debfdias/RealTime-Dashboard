"use client"

import TableComponent from "@/components/Table"
import { staticData } from "@/constants/data"
import { useEffect, useState } from "react"

export default function Tables() {
  const [recentTransaction, setRecentTransactions] = useState<any[]>([])
  const [topProducts, setTopProducts] = useState<any[]>([])

  function loadStatic() {
    setRecentTransactions(
      staticData.data.dashboardData.tables.recentTransactions
    )
    setTopProducts(staticData.data.dashboardData.tables.topProducts)
  }

  useEffect(() => {
    loadStatic()
  }, [])

  return (
    <div className="w-full">
      <div className="text-xl dark:gray-200 gray-700 pb-8">Tables</div>
      <div className="">
        <div className="mb-8">
          <TableComponent
            title="Recent transactions"
            columns={["User", "Amount", "Date"]}
            rows={recentTransaction}
          />
        </div>
        <div className="">
          <TableComponent
            title="Top producs"
            columns={["Name", "Sales"]}
            rows={topProducts}
          />
        </div>
      </div>
    </div>
  )
}
