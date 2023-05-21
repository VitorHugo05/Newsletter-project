import NavBar from '@/components/navbar/NavBar'

export default function Notice() {
  return (
    <main className="min-w-screen relative flex min-h-screen flex-col items-center justify-center space-y-4 bg-gray-900">
      <NavBar style="bg-black" text="Register" route="/" />
      <h1>olá</h1>
    </main>
  )
}
