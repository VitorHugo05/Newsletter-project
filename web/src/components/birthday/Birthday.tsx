'use client'

import { useState } from 'react'

export default function Birthday() {
  const [month, setMonth] = useState<String | any>('')

  function createDayArrays(): [number[], number[], number[], number[]] {
    const array31: number[] = Array.from(
      { length: 31 },
      (_, index) => index + 1,
    )
    const array30: number[] = Array.from(
      { length: 30 },
      (_, index) => index + 1,
    )
    const array29: number[] = Array.from(
      { length: 29 },
      (_, index) => index + 1,
    )
    const array28: number[] = Array.from(
      { length: 28 },
      (_, index) => index + 1,
    )

    return [array31, array30, array29, array28]
  }

  const [monthWith31days, monthWith30days, monthWith29days] = createDayArrays()

  const monthsOfYear = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ]

  function createYearArray(): string[] {
    const yearArray: string[] = []

    for (let year = 2017; year >= 1945; year--) {
      yearArray.push(year.toString())
    }

    return yearArray
  }

  const Years = createYearArray()

  return (
    <div className="flex w-1/2 flex-col">
      <label htmlFor="">Data de nascimento</label>
      <div className="mt-2 space-x-2">
        <select
          name=""
          id=""
          className='hover:bg-gray-800" rounded-lg border border-gray-300/10 bg-gray-500/10 pl-6 pr-10 backdrop-blur-sm transition-colors'
        >
          {/* eslint-disable */}
          {month % 2 === 0 && month !== '2'
            ? monthWith30days.map((days, index) => {
              return (
                <option value={days} key={index}>
                  {days}
                </option>
              )
            })
            : month % 2 !== 0 && month !== '2'
              ? monthWith31days.map((days, index) => {
                return (
                  <option value={days} key={index}>
                    {days}
                  </option>
                )
              })
              : monthWith29days.map((days, index) => {
                return (
                  <option value={days} key={index}>
                    {days}
                  </option>
                )
              })}
          {/* eslint-enable */}
        </select>

        <select
          name=""
          id=""
          className='hover:bg-gray-800" rounded-lg border border-gray-300/10 bg-gray-500/10 pl-6 pr-10 backdrop-blur-sm transition-colors'
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        >
          {monthsOfYear.map((month, index) => {
            return (
              <option value={month} key={index}>
                {month}
              </option>
            )
          })}
        </select>

        <select
          name=""
          id=""
          className='hover:bg-gray-800" rounded-lg border border-gray-300/10 bg-gray-500/10 pl-6 pr-10 backdrop-blur-sm transition-colors'
        >
          {Years.map((year, index) => {
            return (
              <option value={year} key={index}>
                {year}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}
