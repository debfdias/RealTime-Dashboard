import { useSidebarContext } from "@/contexts/SidebarProvider"
import { signOut } from "next-auth/react"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdLogout } from "react-icons/md"

export default function Header() {
  const { setOpenSidebar } = useSidebarContext()

  return (
    <header className="sticky top-0 z-50 bg-gray-900">
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
            className="text-gray-300 hover:text-blue-400 md:hidden"
          >
            <GiHamburgerMenu size={24} />
          </button>
          <button
            onClick={() => signOut()}
            className="text-red-400 hover:text-red-500 flex"
          >
            <MdLogout size={24} />
          </button>
        </div>
      </div>
      <div className="h-[1px] border-t border-solid border-gray-700" />
    </header>
  )
}
