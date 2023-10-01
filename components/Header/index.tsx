"use client"

import { useSidebarContext } from "@/contexts/SidebarProvider"
import { signOut } from "next-auth/react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdLogout } from "react-icons/md"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { setOpenSidebar } = useSidebarContext()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className="sticky top-0 z-50 dark:bg-gray-900 bg-gray-200">
      <div className="flex items-center justify-between h-[50px] px-16">
        <div className="flex items-center justify-center">
          <div className="text-2xl font-bold text-gray-700 dark:text-white">
            dash
          </div>
          <div className="text-2xl font-bold text-blue-400 mx-1">.</div>
          <div className="text-2xl font-bold text-gray-700 dark:text-white">
            board
          </div>
        </div>
        <div className="flex gap-6">
          <button
            onClick={() => setOpenSidebar(true)}
            className="dark:text-gray-300 text-gray-600 hover:text-blue-400 md:hidden"
          >
            <GiHamburgerMenu size={24} />
          </button>

          <button
            onClick={() => {
              theme === "dark" ? setTheme("light") : setTheme("dark")
            }}
            className="dark:text-gray-300 text-gray-600 dark:hover:text-gray-100 hover:text-gray-500"
          >
            {theme != "dark" ? (
              <BsFillMoonStarsFill size={20} />
            ) : (
              <BsSun size={20} />
            )}
          </button>

          {/* <div
            className="flex cursor-pointer text-gray-300 hover:text-gray-100"
            onClick={() => {
              theme === "dark" ? setTheme("light") : setTheme("dark")
            }}
          >
            {theme != "dark" ? (
              <BsFillMoonStarsFill
                size={20}
                className=" text-gray-300 hover:text-gray-100"
              />
            ) : (
              <BsSun size={20} className=" text-gray-300 hover:text-gray-100" />
            )}
          </div> */}

          <button
            onClick={() => signOut()}
            className="text-red-400 hover:text-red-500 flex"
          >
            <MdLogout size={24} />
          </button>
        </div>
      </div>
      <div className="h-[1px] border-t border-solid dark:border-gray-700 border-gray-400" />
    </header>
  )
}
