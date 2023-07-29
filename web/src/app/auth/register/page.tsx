"use client";

import NavBar from "@/components/nav/navBar";
import { data } from "autoprefixer";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, use, useState } from "react";

export default function Register() {
  const [isFormValid, setFormValid] = useState(false);
  const [data, setData] = useState({
    fPass: "",
    sPass: "",
    email: "",
  });

  const handleData = {
    handleFPassword(e: ChangeEvent<HTMLInputElement>) {
      const fPass = e.target.value;
      setData({ ...data, fPass });
      setFormValid(
        data.fPass !== "" &&
          data.sPass !== "" &&
          data.email !== "" &&
          data.fPass === data.sPass
          ? true
          : false
      );
    },
    handleSPassword(e: ChangeEvent<HTMLInputElement>) {
      const sPass = e.target.value;
      setData({ ...data, sPass });
      setFormValid(
        data.fPass !== "" &&
          data.sPass !== "" &&
          data.email !== "" &&
          data.fPass === data.sPass
          ? true
          : false
      );
    },
    handleEmail(e: ChangeEvent<HTMLInputElement>) {
      const email = e.target.value;
      setData({ ...data, email });
      setFormValid(
        data.fPass !== "" &&
          data.sPass !== "" &&
          data.email !== "" &&
          data.fPass === data.sPass
          ? true
          : false
      );
    },
  };

  return (
    <main className=" min-w-screen relative flex min-h-screen flex-col items-center justify-center space-y-4 bg-gray-900 bg-[url('/bg-stars.svg')]">
      <Image
        src={"/color-sharp2.png"}
        width={560}
        height={300}
        alt=""
        className="absolute bottom-0 right-0"
      />
      <Image
        src={"/color-sharp.png"}
        width={560}
        height={300}
        alt=""
        className="absolute left-0 top-0"
      />
      <NavBar style="bg-transparent" text="Mais Notícias" route="/notices" />
      <div className="flex h-auto w-[30%] flex-col gap-8 rounded-lg border border-gray-300/10 bg-gray-800/10 p-10 backdrop-blur-3xl">
        <h1 className="mb-6 text-center font-body text-xl font-bold">
          Registre-se
        </h1>
        <div>
          <form className="flex flex-col gap-8">
            <fieldset className="flex flex-col gap-2">
              <h2>Digite seu email</h2>
              <input
                type="email"
                className="h-auto w-full rounded-lg border border-gray-600 bg-gray-900/95"
                placeholder="Email"
                value={data.email}
                onChange={handleData.handleEmail}
              />
            </fieldset>
            <fieldset className="flex flex-col gap-2">
              <h2 className="text-md">Digite sua senha</h2>
              <input
                type="password"
                className="h-auto w-full rounded-lg border border-gray-600 bg-gray-900/95"
                placeholder="Senha"
                value={data.fPass}
                onChange={handleData.handleFPassword}
              />
            </fieldset>
            <fieldset className="flex flex-col gap-2">
              <h2 className="text-md">Digite novamente sua senha</h2>
              <input
                type="password"
                className="h-auto w-full rounded-lg border border-gray-600 bg-gray-900/95"
                placeholder="Senha"
                value={data.sPass}
                onChange={handleData.handleSPassword}
              />
            </fieldset>
            <button
              type="submit"
              className={`text-md h-auto self-end rounded-lg  px-10 py-3 font-mono  transition-colors hover:bg-green-800 ${
                !isFormValid
                  ? "pointer-events-none bg-red-950 text-black/80 transition-colors !duration-200"
                  : "bg-yellow-500 text-black/80"
              }`}
            >
              Logue agora
            </button>
          </form>
        </div>
        <h2 className="text-center">
          <Link
            href="/auth/login"
            className="text-lg transition-colors hover:cursor-pointer hover:border-b hover:border-gray-200 hover:text-gray-200"
          >
            Já tem uma conta? Logue nela!
          </Link>
        </h2>
      </div>
    </main>
  );
}
