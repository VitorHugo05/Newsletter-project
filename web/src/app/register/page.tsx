import Birthday from '@/components/birthday/Birthday'
import Email from '@/components/email/EmailForm'
import NavBar from '@/components/navbar/NavBar'
import Image from 'next/image'

export default function Register() {
  return (
    <main className="min-w-screen relative flex min-h-screen flex-col items-center justify-center space-y-4 bg-gray-900 bg-[url('/bg-stars.svg')]">
      <Image
        src={'/color-sharp2.png'}
        width={560}
        height={300}
        alt=""
        className="absolute bottom-0 right-0"
      />
      <Image
        src={'/color-sharp.png'}
        width={560}
        height={300}
        alt=""
        className="absolute left-0 top-0"
      />
      <NavBar style="bg-transparent" text="More Notices" route="/notices" />
      <div className="h-auto w-[40%] rounded-lg border border-gray-300/10 bg-gray-800/10 px-10 backdrop-blur-3xl">
        <form action="" className="space-y-8 py-8">
          <div className="flex flex-col ">
            <label htmlFor="">Seu nome</label>
            <fieldset className="mt-2 flex flex-row">
              {/* fName */}
              <input
                type="text"
                name=""
                id=""
                placeholder="Primeiro Nome"
                className="mr-4 w-1/2 rounded-lg border border-gray-300/10 bg-gray-500/10 px-10 backdrop-blur-sm transition-colors hover:bg-gray-800"
              />

              {/* lName */}
              <input
                type="text"
                name=""
                id=""
                placeholder="Segundo Nome"
                className="w-1/2 rounded-lg border border-gray-300/10 bg-gray-500/10 px-10 backdrop-blur-sm transition-colors hover:bg-gray-800"
              />
            </fieldset>
          </div>
          {/* Email */}
          <Email />
          {/* Número de contato (whatsapp) */}
          <fieldset className="flex flex-col ">
            <label htmlFor="">Número de Whatsapp</label>
            <input
              type="tel"
              placeholder="(99) 9999-9999"
              pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})"
              className="mt-2 rounded-lg border border-gray-300/10 bg-gray-500/10 px-10 backdrop-blur-sm transition-colors hover:bg-gray-800"
            />
          </fieldset>

          <fieldset className="flex flex-row">
            <Birthday />
            <div className="flex w-1/2 flex-col">
              <label htmlFor="">Genero</label>
              <select
                name=""
                id=""
                placeholder="porfavor selecione um"
                className='hover:bg-gray-800" mt-2 rounded-lg border border-gray-300/10 bg-gray-500/10 px-6 backdrop-blur-sm transition-colors'
              >
                <option value="">N/A</option>
                <option value="">Masculino</option>
                <option value="">Femenino</option>
              </select>
            </div>
          </fieldset>

          <fieldset className="flex flex-row justify-end">
            <button
              type="submit"
              className="text-md h-auto self-end rounded-lg bg-green-800 px-10 py-2 transition-colors hover:bg-green-900"
            >
              {' '}
              Enviar seus dados
            </button>
          </fieldset>
        </form>
      </div>
    </main>
  )
}
