import React from "react"
import Image from "next/image"

const Card = ({ fullName, job, avatar }) => {
  return (
    <div className="mx-auto w-80 rounded-lg bg-violet-200 shadow-md">
      <div className="flex flex-col items-center  space-x-3 p-4 md:flex-row">
        <div className="md:w-1/3">
          <Image
            src={avatar}
            alt=""
            width={100}
            height={100}
            className="rounded-full"
            priority
          />
        </div>
        <div className="md:w-2/3">
          <h2 className="font-bold">{fullName}</h2>
          <p>{job}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
