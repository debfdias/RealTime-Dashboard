"use client"

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

export interface LayoutContextInterface {
  layout: string
  setLayout: (layout: string) => any
}

export const LayoutContext = createContext({} as LayoutContextInterface)

export function useLayoutContext() {
  return useContext(LayoutContext)
}

type Props = {
  children: ReactNode
}

export default function LayoutProvider({ children }: Props) {
  const [layout, setLayout] = useState<string>("squares")

  useEffect(() => {
    setLayout(layout)
  }, [layout])

  return (
    <LayoutContext.Provider
      value={{
        layout,
        setLayout,
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}
