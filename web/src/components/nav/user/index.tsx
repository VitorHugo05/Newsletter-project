import { User2, UserCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function UserLoggedOut() {
  return (
    <div className="flex h-4 w-auto items-center justify-center">
      <div className="">
        <UserCircle width={36} height={36} />
      </div>
      <div className="ml-3 flex flex-col">
        <p className="text-sm leading-snug">Você ainda não está logado</p>
        <Link
          href="/auth/login"
          className="block text-sm text-red-500 hover:text-red-400"
        >
          Faça Login agora!
        </Link>
      </div>
    </div>
  );
}

export function UserLoggedIn() {
  return (
    <div className="flex h-4 w-auto items-center justify-center">
      <div className="flex">
        <Link href="/profile">
          <Image
            src="https://avatars.githubusercontent.com/u/126702014?v=4"
            alt="user-image"
            width={42}
            height={42}
            className="rounded-full"
          />
        </Link>
      </div>
      <div className="ml-3 flex flex-col">
        <Link href="/profile" className="text-sm font-bold leading-snug">
          VitorHugo05
        </Link>
        <Link href="" className="block text-sm text-red-500 hover:text-red-400">
          Quero Sair
        </Link>
      </div>
    </div>
  );
}
