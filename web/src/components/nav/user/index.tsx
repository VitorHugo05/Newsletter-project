"use client"

import { deleteCookie, getCookie } from "cookies-next";
import { UserCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import jwt, { JwtPayload } from "jsonwebtoken";
import { useRouter } from "next/navigation";

function decodeToken(token: string | undefined): JwtPayload | null {
  if (!token) return null;

  try {
    const decoded= jwt.decode(token) as JwtPayload;
    return decoded; 
  } catch (error) {
    console.error("Erro ao decodificar o token:", error);
    return null;
  }
}

export function UserLoggedOut() {
  const token = getCookie("token") as string | undefined;

  const decodedToken = decodeToken(token);

  const router = useRouter();


  const handleLogout = () => {
    deleteCookie("token");
    router.push("/auth/login");  
  };

  if (decodedToken) {
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
            {decodedToken?.name} 
          </Link>
          <button
            onClick={handleLogout} 
            className="block text-sm text-red-500 hover:text-red-400"
          >
            Quero Sair
          </button>
        </div>
      </div>
    );
  }

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
