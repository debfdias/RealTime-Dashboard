"use client"

import AuthProvider from "@/contexts/AuthProvider"
import { ThemeProvider } from "next-themes"

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </AuthProvider>
  )
}
