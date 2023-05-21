import { ArrowRight, Github } from 'lucide-react'
import Link from 'next/link'

interface navbarProps {
  text: string
  route: string
  style: string
}

export default function NavBar(props: navbarProps) {
  return (
    <nav
      className={`${props.style} fixed top-0 flex h-24 w-full items-center justify-between px-24`}
    >
      <Link
        href={`${props.route}`}
        className="flex flex-row items-center justify-center gap-2 text-lg transition-colors hover:cursor-pointer hover:text-gray-200"
      >
        {props.text}
        <ArrowRight />
      </Link>
      <a
        href="https://github.com/VitorHugo05"
        className="flex flex-row gap-4 text-lg transition-colors hover:cursor-pointer hover:text-gray-200"
      >
        Dev Vitor
        <Github className="" />
      </a>
    </nav>
  )
}
