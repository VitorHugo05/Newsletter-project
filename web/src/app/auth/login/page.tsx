"use client";

import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

import NavBar from "@/components/nav/navBar";
import { UserLoggedOut } from "@/components/nav/user";
import { ArrowRight } from "lucide-react";
import api from "@/api";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

type FormData = {
  password: string
  email: string;
};

export default function Login() {
  const [isFormValid, setFormValid] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const router = useRouter();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  const validateForm = (data: FormData) => {
    const isEmailValid = emailRegex.test(data.email);
    const isPasswordValid = data.password.length > 8;

    const isFormComplete = data.email !== "" && data.password !== "";

    return {
      isValid: isFormComplete && isEmailValid && isPasswordValid,
      isEmailValid,
      isPasswordValid,
    };
  };

  const handleData = {
    handlePassword(e: ChangeEvent<HTMLInputElement>) {
      const password = e.target.value;
      const newData = { ...data, password };
      setData(newData);

      const validation = validateForm(newData);
      setFormValid(validation.isValid);
    },
    handleEmail(e: ChangeEvent<HTMLInputElement>) {
      const email = e.target.value;
      const newData = { ...data, email };
      setData(newData);

      const validation = validateForm(newData);
      setFormValid(validation.isValid);
    },
  };

  const getButtonColor = () => {
    const isAnyFieldFilled =
        data.email !== "" || data.password !== "";

    const { isEmailValid, isPasswordValid } = validateForm(data);

    if (!isAnyFieldFilled) {
      return "bg-red-950 text-black/80 pointer-events-none";
    } else if (isAnyFieldFilled && (!isEmailValid || !isPasswordValid)) {
      return "bg-yellow-500 text-black/80 pointer-events-none";
    } else {
      return "bg-green-800 text-white";
    }
  };

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Olá");
  
    try {
      const res = await api.post("/auth/login", data);
      setCookie("token", res.data.token);
      router.push("/notices");
    } catch (err) {
        console.error("Erro ao registrar:", err);
    }
  }
  

  return (
      <main className="min-w-screen relative flex min-h-screen flex-col items-center justify-center space-y-4 bg-gray-900 bg-[url('/bg-stars.svg')]">
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
        <NavBar
                style="bg-transparent"
                leftContent={<UserLoggedOut />}
                rightContent={
                    <Link
                        href="/notices"
                        className="flex items-center gap-2 text-lg transition-colors hover:cursor-pointer hover:text-gray-200"
                    >
                        Ir para as postagens
                        <ArrowRight className="invisible md:visible" />
                    </Link>
                }
            />
        <div className="flex h-auto w-[30%] flex-col gap-8 rounded-lg border border-gray-300/10 bg-gray-800/10 p-10 backdrop-blur-3xl">
          <h1 className="mb-6 text-center font-body text-xl font-bold">Login</h1>
          <div>
            <form className="flex flex-col gap-8" onSubmit={login}>
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
                    value={data.password}
                    onChange={handleData.handlePassword}
                />
              </fieldset>
              <button
                  type="submit"
                  className={`text-md h-auto self-end rounded-lg px-10 py-3 font-mono transition-colors ${getButtonColor()}`}
              >
                Logue agora
              </button>
            </form>
          </div>
          <h2 className="text-center">
            <Link
                href="/auth/register"
                className="text-lg transition-colors hover:cursor-pointer hover:border-b hover:border-gray-200 hover:text-gray-200"
            >
              Ainda não tem uma conta? crie uma!
            </Link>
          </h2>
        </div>
      </main>
  );
}
