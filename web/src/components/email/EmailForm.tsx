'use client'

import { useState, useEffect } from 'react'

export default function Email() {
  const [email, setEmail] = useState<undefined | string | any>()

  useEffect(() => {
    const newEmail: undefined | string | any = localStorage.getItem('email')
    setEmail(newEmail)
  }, [])

  return (
    <div>
      <div className="flex flex-col">
        <label htmlFor="">Email</label>
      </div>
      <input
        type="email"
        name=""
        id=""
        value={email}
        placeholder="Digite seu email"
        className="mt-2 w-full rounded-lg border border-gray-300/10 bg-gray-500/10 px-10 backdrop-blur-sm transition-colors hover:bg-gray-800"
      />
    </div>
  )
}
