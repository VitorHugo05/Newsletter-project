import { ArrowRight, Github } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'

interface navbarProps {
  text: string
  route: string
  style: string
  children?: ReactNode
}

export default function NavBar(props: navbarProps) {
  return (
    <nav
      className={`${props.style} fixed top-0 flex h-24 w-full items-center justify-between px-6 md:px-24`}
    >
      <div className="flex flex-row">
        <Link
          href={`${props.route}`}
          className="flex flex-row items-center justify-center gap-2 text-lg transition-colors hover:cursor-pointer hover:text-gray-200"
        >
          {props.text}
          <ArrowRight className="invisible md:visible" />
        </Link>
      </div>
      <div>{props.children}</div>
      <div>
        <a
          href="https://github.com/VitorHugo05"
          className="flex flex-row gap-4 text-lg transition-colors hover:cursor-pointer hover:text-gray-200"
        >
          Dev Vitor
          <Github className="" />
        </a>
      </div>
    </nav>
  )
}
