export default function Form() {
  return (
    <>
      <div className="mb-6 flex flex-col items-center justify-center space-y-2">
        <h1>Diary of a programmer</h1>
        <p>Receba em primeira mão notícias do mundo da programação</p>
      </div>
      <div className="flex items-center justify-center">
        <form action="">
          <input
            type="email"
            className="mr-6 rounded-lg border border-gray-300/10 bg-gray-500/10 px-10 backdrop-blur-sm transition-colors hover:bg-gray-800"
            placeholder="Digite seu email"
          />

          <button
            type="submit"
            className="text-md h-auto rounded-lg bg-green-800 px-10 py-2 transition-colors hover:bg-green-900"
          >
            Inscreva-se
          </button>
        </form>
      </div>
    </>
  )
}
