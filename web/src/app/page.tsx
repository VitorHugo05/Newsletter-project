import Form from '@/components/form/Form'
import NavBar from '@/components/navbar/NavBar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-w-screen relative z-20 flex min-h-screen flex-col justify-center space-y-4 bg-gray-900 bg-[url('/bg-stars.svg')]">
      <Image
        src={'/color-sharp2.png'}
        width={560}
        height={300}
        alt=""
        className="absolute bottom-0 right-0 -z-10"
      />
      <Image
        src={'/color-sharp.png'}
        width={560}
        height={300}
        alt=""
        className="absolute left-0 top-0 -z-10"
      />
      <NavBar style="bg-transparent" text="More Notices" route="/notices" />
      <Form />
    </main>
  )
}
