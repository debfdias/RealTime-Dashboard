"use client"

import TableComponent from "@/components/Table"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Users() {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  async function loadUsers() {
    await axios
      .get("/api/users")
      .then((response) => {
        //console.log(response.data)
        setUsers(response.data)
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    setLoading(true)
    loadUsers()
  }, [])

  return (
    <div>
      {!loading && (
        <div className="w-full">
          <TableComponent
            title="Users"
            columns={["Name", "Email", "Created"]}
            rows={[]}
          />
        </div>
      )}
    </div>
  )
}
