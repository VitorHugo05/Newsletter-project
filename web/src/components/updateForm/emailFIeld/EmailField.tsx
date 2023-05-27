import { FormDataContext } from '@/context/dataContext'
import { useContext } from 'react'

export default function EmailField() {
  const {data, handleInputEmail} = useContext(FormDataContext)
  
  return (
    <fieldset>
      <div className="flex flex-col">
        <label htmlFor="">Email</label>
      </div>
        <input
          type="email"
          name=""
          id=""
          value={data.email}
          onChange={handleInputEmail}
          placeholder="Digite seu email"
          className="mt-2 w-full rounded-lg border border-gray-300/10 bg-gray-500/10 px-10 backdrop-blur-sm transition-colors hover:bg-gray-800"
        />
    </fieldset>
  )
}