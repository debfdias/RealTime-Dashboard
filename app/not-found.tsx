"use client"

import Link from "next/link"
import { LiaMapSignsSolid, LiaMapSolid } from "react-icons/lia"

export default function NotFound() {
  return (
    <div className="flex min-h-screen justify-center px-8">
      <div className="flex items-center">
        <div className="flex flex-col items-center">
          <LiaMapSignsSolid size={64} />
          <div className="text-2xl sm:text-4xl flex gap-8 ml-8">
            Page not found! Are you lost?
          </div>
          <Link
            href="/"
            className="text-2xl mt-8 flex items-center hover:text-blue-500"
          >
            <div className="mr-4">Take the map and return</div>
            <LiaMapSolid size={48} />
          </Link>
        </div>
      </div>
    </div>
  )
}
