'use client'
import { useState } from 'react'

import { DarkModeSwitch } from 'react-toggle-dark-mode';
import NavBar from '@/components/navbar/NavBar'

export default function Notice() {
  const [isDarkMode, setDarkMode] = useState(true)
  return (
    <main className={`${isDarkMode ? 'bg-gray-900' : 'bg-zinc-200'} transition-colors min-w-screen relative flex min-h-screen flex-col items-center justify-center space-y-4 `}>
      <NavBar style="bg-gray-800 border-b border-white/10" text="Registre-se" route="/">
        <div className="flex gap-6">
          <button className="text-lg transition-colors hover:cursor-pointer hover:text-gray-200 hover:border-b hover:border-gray-200">
            Relevantes
          </button>
          <button className="text-lg transition-colors hover:cursor-pointer hover:text-gray-200 hover:border-b hover:border-gray-200">
            Recentes
          </button>
        </div>
      </NavBar>

      <div className='' >
        <div className='absolute right-0 bottom-0 '>
          <DarkModeSwitch
            style={{
              marginBottom: '2rem',
              marginRight: '2rem'
            }}
            checked={isDarkMode}
            onChange={setDarkMode}
            size={60}
          />
        </div>
      </div>

    </main>
  )
}
