"use client"

import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import SidebarProvider from "@/contexts/SidebarProvider"

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SidebarProvider>
        <section>
          <Header />
          <Sidebar />
          <div className="w-full pt-16 dark:bg-gray-800 bg-gray-300 text-gray-700 dark:text-gray-200">
            <main className="h-full transition-all md:ml-[300px] md:px-8 px-16">
              <div className="h-full">
                <div className="min-h-screen py-8">{children}</div>
              </div>
            </main>
          </div>
        </section>
      </SidebarProvider>
    </div>
  )
}
