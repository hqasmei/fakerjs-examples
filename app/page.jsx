"use client"
import { useEffect, useState } from "react"
import { generateFakeUsers } from "@/utils/generateFakeUsers"

import Card from "@/components/Card"

export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    const loadData = generateFakeUsers(10)
    setData(loadData)
  }, [])

  return (
    <main className="mx-auto min-h-screen items-center justify-center ">
      <div className="p-12">
        <h1 className="text-center text-3xl font-bold">Users</h1>
        <div className="flex flex-col space-y-4">
          {data.map((item, idx) => {
            return (
              <Card
                key={idx}
                fullName={item.fullName}
                job={item.job}
                avatar={item.avatar}
              />
            )
          })}
        </div>
      </div>
    </main>
  )
}
