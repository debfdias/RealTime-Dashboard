"use client"

import { useSidebarContext } from "@/contexts/SidebarProvider"
import appRoutes from "@/routes/routes"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { MdClose } from "react-icons/md"
import { PiStack } from "react-icons/pi"
import { TbLayoutAlignBottom } from "react-icons/tb"

export default function Sidebar() {
  const { openSidebar, setOpenSidebar } = useSidebarContext()
  const [openDropdown, setOpenDropdown] = useState(false)
  const [layout, setLayout] = useState<string>("")

  const pathname = usePathname()

  function checkActiveRoute(routeName: string) {
    return pathname.includes(routeName)
  }

  return (
    <>
      <div
        className={`bg-[#000] bg-opacity-70 absolute inset-0 z-50 hidden ${
          openSidebar ? "block w-screen h-full" : "hidden"
        }`}
      />

      <div
        className={`sm:flex sm:flex-col min-h-full fixed dark:bg-gray-900 bg-gray-200 hidden transition-all duration-350 ease-linear ${
          openSidebar ? "translate-x-0" : "-translate-x-96"
        }`}
      >
        <button
          className="absolute top-4 left-16 block md:hidden mb-10 text-gray-400 dark:text-gray-500 dark:hover:text-gray-400 hover:text-gray-700"
          onClick={() => setOpenSidebar(false)}
        >
          <MdClose size={20} />
        </button>

        <div className="w-[250px] md:mt-8 mt-16 ml-8">
          {appRoutes.map((route: any, index: number) => {
            return (
              <div key={route.path}>
                <Link
                  href={route.isDropdown ? "#" : route.path}
                  onClick={
                    route.isDropdown
                      ? () => setOpenDropdown(!openDropdown)
                      : undefined
                  }
                >
                  <div className="relative mb-3 flex hover:cursor-pointer hover:bg-gray-300/70 dark:hover:bg-gray-700/20 group">
                    <div
                      className="my-2 flex cursor-pointer px-8 items-center justify-center"
                      key={index}
                    >
                      <div className="flex text-blue-400 h-6 w-6">
                        {route.icon}{" "}
                      </div>
                      <div className="flex items-center">
                        <div
                          className={`ml-4 flex  ${
                            checkActiveRoute(route.path) === true
                              ? "font-bold text-gray-700 dark:text-white"
                              : "font-light text-gray-700 dark:text-gray-200 group-hover:text-blue-500"
                          }`}
                        >
                          {route.name}
                        </div>
                        {route.isDropdown && (
                          <div className="ml-20 hover:text-blue-500 text-gray-600 dark:text-gray-300">
                            {" "}
                            {openDropdown ? (
                              <FiChevronUp size={20} />
                            ) : (
                              <FiChevronDown size={20} />
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {checkActiveRoute(route.path) ? (
                      <div className="absolute right-0 top-px h-9 w-1 bg-blue-500 dark:bg-blue-400" />
                    ) : null}
                  </div>

                  {openDropdown && route.path === "layout" && (
                    <div className="font-light cursor-pointer items-center justify-center text-gray-600 dark:text-gray-300">
                      <div
                        onClick={() => setLayout("stacked")}
                        className="flex items-center px-16 py-2 hover:bg-gray-300/70 dark:hover:bg-gray-700/20 hover:text-blue-500"
                      >
                        <PiStack size={20} />
                        <div className="ml-4">Stacked</div>
                      </div>

                      <div
                        onClick={() => setLayout("minimalist")}
                        className="flex items-center px-16 mb-4 py-2 hover:bg-gray-300/70 dark:hover:bg-gray-700/20 hover:text-blue-500"
                      >
                        <TbLayoutAlignBottom size={20} />
                        <div className="ml-4">Minimalist</div>
                      </div>
                    </div>
                  )}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
