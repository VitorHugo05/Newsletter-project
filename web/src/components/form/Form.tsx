'use client'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'

export default function Form() {
  const [inputValue, setInputValue] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(false)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value
    setInputValue(email)
    setIsEmailValid(validateEmail(email))
  }

  const handleCookies = () => {
    localStorage.setItem('email', inputValue)
  }

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  return (
    <>
      <div className="mb-6 flex flex-col items-center justify-center space-y-2 text-center">
        <h1 className="text-lg">Diary of a programmer</h1>
        <p className="text-lg">
          Receba em primeira mão notícias do mundo da programação
        </p>
      </div>
      <div className="flex flex-col items-center justify-center sm:flex-row">
        <form
          action=""
          className="flex flex-none flex-col items-center space-y-4 md:inline"
        >
          <input
            type="email"
            required
            className="mr-6 rounded-lg border border-gray-300/10 bg-gray-500/10 px-10 backdrop-blur-sm transition-colors hover:bg-gray-800"
            placeholder="Digite seu email"
            value={inputValue}
            onChange={handleInputChange}
          />
          {/* eslint-disable */}
          <Link
            href="/register"
            className={`text-md h-auto self-center rounded-lg bg-purple-700 px-10 py-2 transition-colors hover:bg-green-900 
            
            ${!isEmailValid
                ? 'pointer-events-none bg-purple-950 text-black/80 transition-colors'
                : ''
              }`}
            onClick={handleCookies}
          >
            Inscreva-se
          </Link>
          {/* eslint-enable */}
        </form>
      </div>
    </>
  )
}
