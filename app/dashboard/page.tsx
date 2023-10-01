"use client"

import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import { staticData } from "@/constants/data"
import SidebarProvider from "@/contexts/SidebarProvider"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Dashboard() {
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
      <SidebarProvider>
        <section className="">
          <Header />
          <Sidebar />
          <div className="w-full dark:bg-gray-800 bg-gray-300 text-gray-700 dark:text-gray-200">
            <main className="h-full transition-all md:ml-[300px] md:px-8 px-16">
              <div className="h-full">
                <div className="min-h-screen py-8">
                  <div>
                    {data.map((item: any) => {
                      return <div key={item.id}>{item.user}</div>
                    })}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </section>
      </SidebarProvider>
    </div>
  )
}
