"use client"

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

export interface SidebarContextInterface {
  openSidebar: boolean
  setOpenSidebar: (state: boolean) => any
}

export const SidebarContext = createContext({} as SidebarContextInterface)

export function useSidebarContext() {
  console.log("called")
  return useContext(SidebarContext)
}

type Props = {
  children: ReactNode
}

export default function SidebarProvider({ children }: Props) {
  const [openSidebar, setOpenSidebar] = useState<boolean>(true)

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth < 900 ? setOpenSidebar(false) : setOpenSidebar(true)
    })

    return () => {
      window.removeEventListener("resize", () => {})
    }
  }, [])

  return (
    <SidebarContext.Provider
      value={{
        openSidebar,
        setOpenSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}
